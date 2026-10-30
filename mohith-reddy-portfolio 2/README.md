# Mohith Reddy Aramati - Senior Full Stack .NET Developer & UI/UX Architect

[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![.NET Core](https://img.shields.io/badge/.NET_Core-8.0-512BD4?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1_AA_Compliant-2E7D32)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Vercel Ready](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)

An enterprise-grade, interactive portfolio and system architecture platform showcasing modern software engineering across C# .NET 8, ASP.NET Core MVC, Blazor, React, Microsoft Azure, SQL Server, Oracle Database, and WCAG 2.1 AA / Section 508 accessibility.

---

## 🏛️ Platform Architecture & Functional Modules

1. **CivicFlow – Enterprise Service Management:**
   - High-throughput operational dashboard simulating public administration grant intake and claims review.
   - Dynamic KPI aggregations (Total, Approved, In-Review, Disallowed) computed directly from real-time state.
   - Accessible SVG-based monthly volume trend charts with light and dark theme persistence.

2. **Advanced Enterprise Data Grid:**
   - Multi-column sorting across IDs, applicant names, programs, filing dates, and funding allocations.
   - Real-time instant search indexing across nested entities.
   - Multi-status filtering with WCAG-compliant status badges.
   - Client-side streaming CSV Export.
   - Accessible pagination and record detail audit modals.

3. **Multi-Step Application Workflow Engine:**
   - 4-step progressive filing wizard with step-by-step schema validation.
   - Inline error states with `aria-invalid` and `aria-describedby` diagnostics.
   - Real-time append synchronization directly into the active Data Grid registry.

4. **Enterprise UI Component Design System:**
   - Interactive tokens for colors, typography, buttons, inputs, alerts, toggles, and accessible modals.
   - Explicit states demonstrated: default, hover, focus-visible, active, disabled, and error.

5. **Accessibility & Section 508 Standards:**
   - Built to WCAG 2.1 AA contrast standards (minimum 4.5:1 text, 3:1 graphical boundaries).
   - Skip to main content link for keyboard and screen-reader users.
   - High-visibility keyboard focus rings (`:focus-visible`).
   - Screen-reader friendly semantic landmark structure and ARIA labeling.

6. **Production Case Studies:**
   - Texas Department of Agriculture (TANS Modernization).
   - Verizon Enterprise Communications & GIS Spatial Integration.
   - New York State Insurance Fund (NYSIF Claims & Policy Modernization).
   - Union Pacific Railroad (Railroad Operations & GIS Modernization).

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Server
```bash
npm run dev
```
Open your browser to `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
npm run preview
```

---

## ☁️ Deployment Guide (Vercel)

### Option 1: 1-Command Direct Deploy
In your project directory, simply run:
```bash
npx vercel
```
Follow the interactive prompts to log in and deploy. Your production link will be generated automatically.

### Option 2: Deploy via GitHub
1. Create a public or private repository on [GitHub](https://github.com).
2. Push your project code:
   ```bash
   git init
   git add .
   git commit -m "feat: enterprise .net and ui/ux portfolio platform"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   git push -u origin main
   ```
3. Import the repository into [Vercel](https://vercel.com) and click **Deploy**.
