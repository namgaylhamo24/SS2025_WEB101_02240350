This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# INSTRUCTION
# File Upload Implementation

## Objective
Create a React application with a file upload form that includes:
- Multipart form data handling
- File type and size validation
- Upload progress tracking
- Drag and drop interface

## Part 1: Setup Project

1. Create a new Next.js project:
```bash
npx create-next-app file-upload
cd file-upload
```

2. Install required dependencies:
```bash
npm install react-hook-form formidable axios react-dropzone
```

Refer here for codes and project structure (Part 2):
[https://github.com/syangche/React_Practicals.git](https://github.com/syangche/React_Practicals.git)

## Part 2: Create Basic File Upload Form and API Route for File Upload

1. Create a new file in `pages/index.js` and implement a basic form with React Hook Form.
   - Implement File Validation

2. Create a new file in `pages/api/upload.js`.
   - Implement Progress Tracking
   - Implement Drag and Drop Interface