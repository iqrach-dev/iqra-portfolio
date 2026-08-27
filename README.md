# Iqra Choudhary — Portfolio Website (Fullstack)

Yeh aapki portfolio website hai — do hisson mein:
- **Frontend** (`public/index.html`) — jo log dekhte hain
- **Backend** (`server.js`) — jo contact form ke messages ko aapki email pe bhejta hai

---

## Step 1: Node.js install karein

1. Jayein: https://nodejs.org
2. **LTS version** download karein (jo bhi bara "Download" button dikhe)
3. Install kar lein (Next, Next, Finish — normal software install jaisa)
4. Check karne ke liye, apne computer ka **Terminal** (Mac) ya **Command Prompt / PowerShell** (Windows) kholein aur likhein:
   ```
   node -v
   ```
   Agar koi version number (jaise `v20.11.0`) dikhe, matlab install ho chuka hai.

---

## Step 2: Project files kholein terminal mein

1. Is poore folder (`iqra-portfolio`) ko apne computer mein kahin save kar lein (jaise Desktop pe)
2. Terminal/Command Prompt kholein
3. Us folder tak jayein, jaise:
   ```
   cd Desktop/iqra-portfolio
   ```

---

## Step 3: Dependencies install karein

Terminal mein yeh likhein aur Enter dabayein:
```
npm install
```
Yeh thora time lega (1-2 minute) — is se zaroori packages install hongi.

---

## Step 4: Email bhejne ke liye setup (optional lekin recommended)

Agar aap chahti hain ke contact form ka message **actually aapki email pe aaye**, to yeh karna hoga:

1. Apne Gmail account mein jayein: https://myaccount.google.com/security
2. **2-Step Verification** ON karein (agar already nahi hai)
3. Usi page pe **"App Passwords"** dhoondein, click karein
4. Ek naya app password generate karein (naam kuch bhi de dein, jaise "portfolio")
5. Google aapko ek **16-character code** dega (jaise `abcd efgh ijkl mnop`) — usay copy kar lein

6. Ab project folder mein `.env.example` file ko **copy** karke uska naam `.env` rakh dein (bina .example ke)
7. `.env` file kholein aur yeh fill karein:
   ```
   GMAIL_USER=aapka-email@gmail.com
   GMAIL_APP_PASSWORD=wahi-16-character-code-jo-copy-kiya-tha
   ```
8. File save kar lein

**Agar yeh step abhi skip karna chahti hain:** koi masla nahi — form phir bhi kaam karega, bas message email pe jane ke bajaye sirf terminal mein show hoga (testing ke liye).

---

## Step 5: Website chalayein

Terminal mein likhein:
```
npm start
```

Agar sab sahi hua, to yeh dikhega:
```
Server running: http://localhost:3000
```

Ab apna **browser** kholein aur jayein: **http://localhost:3000**

Aapki website wahan live dikhegi, aur contact form bhi kaam karega.

Band karne ke liye, terminal mein `Ctrl + C` dabayein.

---

## Step 6: Website ko internet pe live daalna (asal duniya mein sabko dikhane ke liye)

Abhi tak yeh sirf aapke apne computer pe chal rahi hai. Duniya bhar mein kisi ko bhi link se dikhane ke liye, free hosting use karein:

**Recommended: Render.com (free, aasan)**
1. https://render.com pe account banayein
2. "New Web Service" pe click karein
3. Apne project ko GitHub pe upload karein (agar GitHub account nahi hai, bana lein — free hai)
4. Render ko us GitHub repo se connect karein
5. Environment Variables mein `GMAIL_USER` aur `GMAIL_APP_PASSWORD` add karein (Settings mein)
6. Deploy karein — Render aapko ek free live link dega (jaise `iqra-portfolio.onrender.com`)

Agar is step mein madad chahiye (GitHub pe upload karna, Render setup), to bata dein — main step-by-step guide kar dunga jab aap yahan tak pohanch jayein.

---

## Files ka structure

```
iqra-portfolio/
  server.js          <- backend (Express server)
  package.json        <- dependencies list
  .env.example         <- template (copy to .env)
  public/
    index.html         <- pura frontend (website ka design)
```
