
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({limit:'2mb'}));
app.use(morgan('dev'));

const FEE_OPEN = parseFloat(process.env.FEE_OPEN || '25');
const FEE_PER_MIN = parseFloat(process.env.FEE_PER_MIN || '2.5');

// Auth demo
const TECH = { email: process.env.ADMIN_EMAIL || 'expert@visiorepare.ch', pass: process.env.ADMIN_PASS || 'demo1234', name: 'Expert Demo' };
app.post('/api/login', (req,res)=>{
  const { email, password } = req.body||{};
  if(email===TECH.email && password===TECH.pass){
    const token = crypto.randomBytes(16).toString('hex');
    return res.json({ ok:true, token, user:{role:'technician', name:TECH.name, email:TECH.email} });
  }
  res.status(401).json({ ok:false, error:'Invalid credentials' });
});

// Billing demo
app.post('/api/charge', (req,res)=>{
  const { seconds } = req.body||{};
  const amount = FEE_OPEN + (FEE_PER_MIN/60.0)*parseFloat(seconds||0);
  const receipt = 'vr_' + crypto.randomBytes(6).toString('hex');
  return res.json({ ok:true, amount:+amount.toFixed(2), currency:'CHF', receipt });
});

// Static files
app.use(express.static(path.join(__dirname,'public')));
app.get('*', (_,res)=> res.sendFile(path.join(__dirname,'public','index.html')) );

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('VisioRépare Suisse v1 running on :' + PORT));
