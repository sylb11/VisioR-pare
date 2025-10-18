VisioRépare – PWA Package (White Background)

Files:
- manifest.webmanifest  → copy to /public/
- splash-640x1136.png   → copy to /public/
- splash-750x1334.png   → copy to /public/
- splash-1242x2688.png  → copy to /public/
- splash-1536x2048.png  → copy to /public/

How to use:
1) Ensure you also have icons in /public/: icon-192.png, icon-512.png, apple-touch-icon.png, favicon.ico
2) Add to the <head> of your HTML pages:
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   <link rel="apple-touch-icon" href="apple-touch-icon.png">
   <link rel="manifest" href="manifest.webmanifest">
   <meta name="theme-color" content="#0a3d62">
3) (Optional iOS meta tags) Add to <head> of index.html and language.html:
   <meta name="apple-mobile-web-app-capable" content="yes">
   <meta name="apple-mobile-web-app-title" content="VisioRépare">
   <link rel="apple-touch-startup-image" href="splash-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
   <link rel="apple-touch-startup-image" href="splash-750x1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
   <link rel="apple-touch-startup-image" href="splash-1242x2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
   <link rel="apple-touch-startup-image" href="splash-1536x2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">

After commit to GitHub, Vercel will auto-redeploy. Test on iPhone/Android by adding to Home Screen.