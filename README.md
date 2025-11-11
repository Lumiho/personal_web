# Leo Zavala - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Works perfectly on all devices
- **Fast**: Built with Next.js for optimal performance
- **Sections**:
  - Home/Hero section with introduction
  - About section with bio and interests
  - Projects showcase with GitHub links
  - Experience & Leadership section
  - Contact section with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Personal Information

1. **About Section**: Edit `components/About.tsx`
2. **Projects**: Update `data/projects.json` with your projects
3. **Experience**: Edit `components/Experience.tsx`
4. **Contact Links**: Update social links in `components/Contact.tsx`

### Update Social Links

Edit the `socialLinks` array in `components/Contact.tsx` with your actual:
- GitHub username
- LinkedIn profile
- Email address
- Resume PDF path

### Add Project Images

1. Create an `public/images/` directory
2. Add your project screenshots
3. Update image paths in `data/projects.json`

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Add your custom domain (optional)

### Build for Production

```bash
npm run build
npm start
```

## 📝 License

MIT

