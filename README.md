# Portfolio Project

A modern, responsive portfolio website built with React and Next.js. This project showcases your skills, projects, resume, and contact information in a clean and professional layout.

## Features

- Home, About, Projects, Services, Resume, and Contact pages
- Responsive design for all devices
- Modular component structure
- Easy to customize and extend
- Modern UI with Tailwind CSS
- Project and resume sections with downloadable assets

## Folder Structure

```
new protfolio/
├── app/                # Next.js app directory (pages, layouts, styles)
├── components/         # Reusable React components
│   ├── About/
│   ├── contact/
│   ├── Home/
│   ├── Projects/
│   ├── resume/
│   ├── Services/
│   ├── Sidebar/
│   ├── pages/
│   └── ui/             # UI primitives (buttons, cards, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and user context
├── public/             # Static assets (images, PDFs)
├── styles/             # Global styles
├── App.jsx             # Main React entry (if using CRA)
├── main.jsx            # Main entry point
├── package.json        # Project dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
└── README.md           # Project documentation
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd new protfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Usage

- Edit content in the `components/` and `app/` directories to customize your portfolio.
- Add your own images and assets to the `public/assets/` folder.
- Update your resume in `public/assets/kelash kumar-CV.pdf`.

## Technologies Used

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/) (for some components)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is open source and available under the [MIT License](LICENSE). 