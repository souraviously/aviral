# Royal Wedding Invitation Suite 💍

Digital wedding invitation applications for the royal wedding celebration of **Rahul & Avantika**.

This monorepo contains both sides of the digital invitation:
- **`wedding-invitation-bride/`**: The Bride's side invitation (*Avantika & Rahul*)
- **`wedding-invitation-groom/`**: The Groom's side invitation (*Rahul & Avantika*)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
Install dependencies for each application:
```bash
# Install bride app dependencies
cd wedding-invitation-bride && npm install && cd ..

# Install groom app dependencies
cd wedding-invitation-groom && npm install && cd ..
```

---

## 💻 Local Development

You can run both applications simultaneously or each independently:

### Run Both Concurrently
```bash
npm run dev:both
```
- **Bride Invitation**: http://localhost:3000
- **Groom Invitation**: http://localhost:3001

### Run Individually
- **Bride Invitation (Port 3000)**:
  ```bash
  npm run dev:bride
  ```
- **Groom Invitation (Port 3001)**:
  ```bash
  npm run dev:groom
  ```

---

## 📦 Building for Production

```bash
# Build bride app
npm run build:bride

# Build groom app
npm run build:groom
```

---

## 🎨 Tech Stack
- **React 19**
- **Vite 6**
- **TailwindCSS**
- **Motion (Framer Motion)**
- **Lucide Icons & Canvas Confetti**


## 🚀 Deploy to Vercel

The repository contains two separate invitation apps:
- `wedding-invitation-groom/`
- `wedding-invitation-bride/`

You can deploy each app on Vercel **either as two independent Vercel projects or as a single monorepo project**. Both approaches are described below.

---
### 1️⃣ Deploy as two separate Vercel projects

1. **Create a Vercel account** (if you don’t have one) at https://vercel.com/signup and log in.
2. **Import the repository**:
   - Click **New Project** → **Import Git Repository**.
   - Select your Git provider (GitHub, GitLab, Bitbucket) and the repository containing this monorepo.
3. **Configure the Groom project**:
   - **Root Directory**: `wedding-invitation-groom`
   - **Build Command**: `npm install && npm run build`
   - **Output Directory**: `dist`
   - Click **Deploy**.
4. **Configure the Bride project** (repeat steps 2‑3) with **Root Directory** set to `wedding-invitation-bride`.
5. After deployment you will receive URLs such as `https://<project>.vercel.app`. Verify that the images load and the text shows **Rahul & Avantika**.
6. (Optional) Add custom domains in **Settings → Domains** for each project, e.g. `groom.rahulavantikawedding.com` and `bride.rahulavantikawedding.com`.

---
### 2️⃣ Deploy as a monorepo Vercel project (single dashboard entry)

1. Add a `vercel.json` file at the repository root (if not already present) with the following content:
```json
{
  "projects": {
    "groom": {
      "src": "wedding-invitation-groom",
      "buildCommand": "npm install && npm run build",
      "outputDirectory": "dist"
    },
    "bride": {
      "src": "wedding-invitation-bride",
      "buildCommand": "npm install && npm run build",
      "outputDirectory": "dist"
    }
  }
}
```
2. In Vercel, **New Project** → select the same repository. Leave the **Root Directory** blank – Vercel will read `vercel.json`.
3. Deploy. Vercel will create two deployments:
   - `https://<project>-groom.vercel.app`
   - `https://<project>-bride.vercel.app`
4. You can map each deployment to a sub‑domain (e.g., `groom.example.com`) via **Settings → Domains**.

---
### 3️⃣ Verify the live sites
- Open the URLs and ensure:
  - All three event images appear.
  - Text reflects the updated wedding details.
  - Countdown points to **5 December 2026**.
  - Any Google‑Maps link points to *Ust**av** Banquet, Dhanbad*.
- If something is missing, make sure the file exists in the `public/` folder of the corresponding app and that the import path in the source code is correct.

---
### 📌 Tips & Common Issues
- **Build failures** – Usually caused by missing `node_modules`. Vercel runs `npm install` automatically, so you don’t need to pre‑install locally.
- **Images not loading** – Commit the three JPEGs (or their optimized WebP versions) inside `public/` of each app and reference them with a relative path like `./haldi.webp`.
- **Custom domain** – After the first deployment, add your domain in Vercel and update the DNS `CNAME` to point to `<project>.vercel.app`.

That’s all you need to get both invitation sites live on Vercel! 🎉