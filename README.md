# Books For Ghana 📚

A modern, responsive React + TypeScript frontend application for Books For Ghana, a platform connecting donors worldwide with schools and communities in Ghana to provide quality educational resources.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📋 Features

- **Home Page**: Hero section with mission statement, impact stats, and donation CTA
- **Donate Page**: Complete donation form with mock payment flow, validation, and confirmation
- **How to Send Books**: Step-by-step guide with printable checklist and shipping instructions
- **About Page**: Team information, mission, values, and impact
- **Contact Page**: Contact form with validation and FAQ section
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **LocalStorage Integration**: Donations persist across page refreshes
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **Print Support**: Print-friendly pages for receipts and checklists

## 🏗️ Project Structure

```
BooksForGhana/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Navigation with mobile menu
│   │   ├── Footer.tsx       # Footer with social links
│   │   ├── Hero.tsx         # Hero section component
│   │   ├── Card.tsx         # Card container
│   │   ├── Modal.tsx        # Modal/dialog component
│   │   ├── Toast.tsx        # Toast notifications
│   │   ├── DonationForm.tsx # Donation form with validation
│   │   └── DonationSummary.tsx # Recent donations display
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── Donate.tsx
│   │   ├── HowToSend.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── lib/                 # Utility functions
│   │   └── storage.ts       # localStorage helpers
│   ├── data/                # Mock data
│   │   └── mock.ts          # Seed donations & team members
│   ├── styles/              # Stylesheets
│   │   └── tailwind.css     # Tailwind CSS config
│   ├── App.tsx              # Main app component with routing
│   └── main.tsx             # Application entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **PostCSS & Autoprefixer** - CSS processing

## 🎨 Design Features

- **Color Palette**: Warm, approachable oranges and blues
- **Typography**: Inter font family for readability
- **Spacing**: Consistent, responsive spacing system
- **Animations**: CSS transitions and hover effects
- **Accessibility**: WCAG-compliant color contrast, focus states

## 💰 Mock Payment Flow

**Important**: This application uses a **mock payment system** for demonstration purposes only.

- All donations are simulated
- No real payment processing occurs
- Donations are stored in localStorage
- Receipt numbers are randomly generated
- No integration with Stripe or other payment providers

**For Production**: Replace the mock flow with real payment processing (Stripe, PayPal, etc.) as marked with `TODO: integrate Stripe` comments in the code.

## 📝 Mock Data

The application includes seed data for demonstrations:
- 3 mock donations with sample donor information
- 3 mock team members with bios and roles
- All contact information is clearly marked "(mock)"

## 🧪 Testing

While comprehensive tests are not included, the code is structured to support testing:

```bash
# Example test structure (not included)
npm install -D @testing-library/react @testing-library/jest-dom vitest
```

Suggested test coverage:
- Donation form validation logic
- Email validation regex
- localStorage persistence
- Component rendering

## 🚢 Deployment

This application can be deployed to any static hosting service:

- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag-and-drop `dist/` folder or connect repo
- **GitHub Pages**: Configure build workflow
- **AWS S3 + CloudFront**: Upload `dist/` to S3 bucket

## 🤝 Contributing

This is a demonstration/mock project. For a production version:

1. Integrate real payment processing (Stripe/PayPal)
2. Connect to a backend API for data persistence
3. Add email notifications
4. Implement real-time tracking
5. Add comprehensive tests
6. Set up CI/CD pipeline

## 📄 License

This project is for demonstration purposes only.

## 👤 Author

Created as a mock/draft for Books For Ghana initiative.

---

**Note**: This is a frontend-only mock application. All content, addresses, and contact information are fictional and clearly marked as "(mock)".

