##  a) Documentation

### Main Concepts Applied

During this practical task, I created a TikTok-inspired web interface using **Next.js**, **Tailwind CSS**, and **React Hook Form**. The core concepts I applied included:

1. **Project Initialization & Configuration**

   * Created a new Next.js app with App Router, Tailwind CSS, and ESLint for better development practices.
   * Organized the project into folders (`components/layout`, `ui`, `lib`, and `app` subdirectories like `profile`, `upload`).

2. **Responsive Layout and Navigation**

   * Built reusable layout components (`MainLayout.jsx`) to include navigation links (Home, Following, Explore, Live, Profile, Upload).
   * Used `react-icons` for sidebar icons and structured a consistent layout across all pages.

3. **Component-Based UI Development**

   * Created UI components such as `VideoCard` and `VideoFeed` to simulate TikTok's video feed using placeholder data.

4. **Routing & Page Structure**

   * Implemented multiple routes (Home, Profile, Upload, Explore, Following, Live) using Next.js's App Router system.

5. **Form Handling with React Hook Form**

   * Built Login and Signup pages using `react-hook-form`, enabling:

     * Input registration
     * Validation using `required`, `pattern`, and `minLength`
     * Error handling and loading states
     * Password confirmation validation

6. **User Experience Enhancements**

   * Added loading states and error messages for form interactions to guide users.

---

##  b) Reflection

### What I Learned

* How to set up and organize a Next.js project using modern folder structures and App Router.
* Gained hands-on experience with **Tailwind CSS** for rapid UI development and responsive design.
* Understood and practiced component reusability and hierarchy, especially in layout and UI components.
* Learned how to implement client-side form validation efficiently with **React Hook Form**.
* Experienced how to link multiple pages and maintain navigation across them using a shared layout.

### Challenges Faced & How I Overcame Them

#### 1. **Tailwind CSS Not Applying**

**Issue:** Initially, Tailwind classes weren't being recognized.

**Fix:**
I realized I had missed importing the Tailwind directives correctly in `globals.css`. I rechecked the setup and updated `globals.css` as follows:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Result:** Styles were applied correctly.

---

#### 2. **Page Routing Not Working**

**Issue:** Navigation links did not route correctly.

**Fix:**
I was using `href` incorrectly in Link components. I reviewed the Next.js and corrected the implementation:

```jsx
import Link from 'next/link';

<Link href="/explore">Explore</Link>
```

**Result:** Routing worked as expected across pages.

---

#### 3. **Form Validation Errors Not Displaying**

**Issue:** Validation errors were not showing under inputs.

**Fix:**
I forgot to check the `errors` object from `react-hook-form`. I added conditions to display error messages:

```jsx
{errors.email && <span>{errors.email.message}</span>}
```

**Result:** Real-time feedback and validations were visible and functional.

---

#### 4. **Password Confirmation Failing**

**Issue:** The confirmation password validation didn’t trigger.

**Fix:**
I used the `watch` function in combination with a custom `validate` method in `react-hook-form`:

```jsx
validate: (value) => value === watch("password") || "Passwords do not match"
```

 **Result:** Password mismatch was correctly caught and displayed.

---


## Conclusion

This practical helped me reinforce my understanding of modern full-stack development tools and best practices using **Next.js**, **Tailwind**, and **React**. I also strengthened my debugging and problem-solving skills while working on form validation, layout structures, and routing issues.

