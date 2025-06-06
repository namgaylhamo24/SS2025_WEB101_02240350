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
# TikTok Clone - Next.js Implementation Guide
## Part 1 - Getting Started

### Step 1: Navigate to Your Project Directory
Open your terminal and navigate to your GitHub repository directory.

### Step 2: Create a New Next.js Project
Initialize a new Next.js project with:
```bash
npx create-next-app@latest
```
Configure with these settings:
- TypeScript? → No
- ESLint? → Yes
- Tailwind CSS? → Yes
- src/ directory? → Yes
- App Router? → Yes
- Customize import alias? → No

### Step 3: Clean Up the Default Project
1. Navigate to `src/app`
2. Replace `page.js` with a basic component
3. Clean up `globals.css` to keep only Tailwind directives:
```css
@import "tailwindcss";
```

### Step 4: Set Up Project Structure
```bash
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/app/profile
mkdir -p src/app/upload
```

### Step 5: Create Basic Layout Components
Create `src/components/layout/MainLayout.jsx` with navigation links.

### Step 6: Update Layout
Modify `src/app/layout.js` to include your layout component.

### Step 7: Create Basic Pages
- Profile page: `src/app/profile/page.jsx`
- Upload page: `src/app/upload/page.jsx`

### Step 8: Start Development Server
```bash
npm run dev
```
Access at: `http://localhost:3000`

## Part 2: Creating the Web Layout and Main Interface

### Objectives
- Create sidebar navigation
- Implement main content area
- Set up video feed layout
- Create placeholder video components

### Step 1: Install Dependencies
```bash
npm install react-icons
```

### Step 2: Update Layout Structure
Update `MainLayout.jsx` to match TikTok's web layout with sidebar.

### Step 3: Create VideoCard Component
Create `src/components/ui/VideoCard.jsx` with interaction buttons (like, comment, share).

### Step 4: Create VideoFeed Component
Create `src/components/ui/VideoFeed.jsx` to display multiple videos.

### Step 5: Update Home Page
Modify `src/app/page.js` to display the video feed.

### Step 6-8: Create Additional Pages
- Following page: `src/app/following/page.jsx`
- Explore page: `src/app/explore/page.jsx`
- Live page: `src/app/live/page.jsx`

### Step 9: Update Upload Page
Enhance `src/app/upload/page.jsx` to match TikTok's interface.

### Step 10: Update Profile Page
Improve `src/app/profile/page.jsx` with better layout.

### Step 11: Test Application
Verify all components and navigation work correctly.

## Part 3: Creating Login and Registration Forms

### Objectives
- Create login/signup pages
- Implement form validation
- Connect forms to navigation
- Understand form handling

### Concepts
1. **React Hook Form**
   - `register`: Manages input state
   - `handleSubmit`: Form submission handler
   - `watch`: Observes form values
   - `errors`: Validation errors

2. **Form Validation**
   - Required fields
   - Pattern matching
   - Minimum length
   - Custom validation

3. **Form Submission**
   - Loading states
   - API integration
   - Error handling

### Step 1: Install Dependencies
```bash
npm install react-hook-form
```

### Step 2: Create Login Page
Create `src/app/login/page.jsx` with:
- Email/password fields
- Form validation
- Forgot password link
- Signup navigation

### Step 3: Create Signup Page
Create `src/app/signup/page.jsx` with:
- Username/email/password fields
- Password confirmation
- Terms checkbox
- Comprehensive validation

### Step 4: Update MainLayout
Modify navigation to include login/signup links.

### Testing
- Verify validation works for all fields
- Test successful submissions
- Check loading states
- Confirm error messages appear correctly

## Resources
- [React Documentation](https://legacy.reactjs.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Hook Forms](https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/)
- [Form Validation with Zod](https://youtu.be/cc_xmawJ8Kg)