
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
app.use(express.json());
app.use(morgan('dev'));

const FEE_OPEN = 25, FEE_PER_MIN = 2.5;

app.post('/api/login', (req,res)=>{
  const { email, password } = req.body;
  if(email==='expert@visiorepare.ch' && password==='demo1234'){
    res.json({ok:true,token:crypto.randomBytes(12).toString('hex')});
  } else res.status(401).json({ok:false,error:'Invalid credentials'});
});

app.post('/api/charge', (req,res)=>{
  const sec=parseFloat(req.body.seconds||0);
  const amount=FEE_OPEN+(FEE_PER_MIN/60.0)*sec;
  res.json({ok:true,amount:amount.toFixed(2),receipt:'vr_'+crypto.randomBytes(5).toString('hex')});
});

app.use(express.static(path.join(__dirname,'public')));
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(3000,()=>console.log('Running on http://localhost:3000'));
