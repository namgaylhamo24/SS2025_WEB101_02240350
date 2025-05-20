## a) Documentation

### Main Concepts Applied

In this practical, I developed a **File Upload Feature** using a **React (Next.js)** application. The main concepts implemented are:

* **Multipart Form Data Handling**
  Utilized `formidable` middleware on the server side to parse multipart/form-data for handling file uploads efficiently.

* **Form Validation with React Hook Form**
  Integrated `react-hook-form` to handle input states and validation for file types (e.g., images, PDFs) and file size limits to ensure only valid files are accepted.

* **Upload Progress Tracking**
  Used `axios` and the `onUploadProgress` event to provide real-time upload status to the user with a progress bar.

* **Drag and Drop Interface**
  Integrated `react-dropzone` to allow users to drag and drop files directly into the upload area for improved UX.

* **API Routing**
  Created a custom API route in `pages/api/upload.js` to handle server-side file processing.

---

## b) Reflection

### What I Learned

This practical helped reinforce several key web development skills:

* How to **create full-stack file upload functionality** in a modern React (Next.js) application.
* How to use `react-hook-form` for **effective form management** and validation.
* The importance of providing **visual feedback (progress tracking)** to improve user experience during asynchronous tasks.
* Using `react-dropzone` taught me how to make forms more interactive and accessible by allowing drag-and-drop file submissions.

I also became more confident working with **custom API routes** in Next.js, which is essential for server-side logic like file handling.

---

### Challenges Faced and Solutions

#### 1. **File Type and Size Validation Errors**

* **Issue**: Files outside the accepted type or size were still being uploaded.
* **Cause**: The validation logic was initially not enforced properly in `react-hook-form`.
* **Solution**: I updated the form controller to include explicit checks for MIME types and file size before proceeding with the upload.


---

#### 3. **Drag-and-Drop Events Not Triggering**

* **Issue**: Drag and drop didn’t trigger file selection.
* **Cause**: The drop zone was not properly wired to handle dropped files.
* **Solution**: I re-checked the integration with `react-dropzone` and ensured the component was properly connected to file state logic.

---

### Final Thoughts

This practical was very helpful in learning how to connect the frontend (what the user sees) and the backend (server-side) in a React/Next.js project. By using helpful tools like `axios`, `formidable`, `react-hook-form`, and `react-dropzone`, I was able to create a file upload system that is easy for users to use and works well.


---


