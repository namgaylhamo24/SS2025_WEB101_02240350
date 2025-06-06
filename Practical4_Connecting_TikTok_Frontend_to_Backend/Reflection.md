### Main Concepts Applied

1. **API Client Configuration**  
   - Used **Axios** to create a centralized API client with request/response interceptors for handling authentication tokens and errors.  
   - Implemented **JWT-based authentication** with token storage in `localStorage`.  

2. **Authentication State Management**  
   - Created an **AuthContext** using React’s Context API to manage global authentication state (user data, login/logout functions).  
   - Protected routes by checking authentication status before rendering sensitive components.  

3. **Dynamic UI Components**  
   - Built reusable **Modal** and **AuthForms** components for login/signup flows.  
   - Integrated **react-hot-toast** for user feedback during API calls.  

4. **Real Data Integration**  
   - Replaced mock data with API calls to fetch videos, user profiles, and follow statuses.  
   - Implemented **loading states** and error handling for smoother UX.  

5. **Social Features**  
   - Developed follow/unfollow functionality with real-time UI updates.  
   - Created a personalized "Following" feed and an "Explore Users" page.  

---

### What I Learned  
- **Backend-Frontend Communication**: Gained hands-on experience connecting a Next.js frontend to an Express.js backend, especially handling CORS and token-based auth.  
- **State Management**: Learned how to use React Context effectively for global state (auth) without overcomplicating the app.  
- **Error Handling**: Improved skills in gracefully managing API errors (e.g., token expiration, 404s) and displaying user-friendly messages.  
- **Dynamic Routing**: Mastered Next.js dynamic routes (e.g., `profile/[userId]`) for user profiles.  

### Challenges & Solutions  

#### 1. **Authentication Token Expiry**  
- **Issue**: Users stayed "logged in" even after token expiration, causing silent failures.  
- **Fix**: Added an Axios response interceptor to check for `401` errors, clear tokens, and redirect to login.  
  ```javascript
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
  ```

#### 2. **Follow Button State Sync**  
- **Issue**: Follow buttons didn’t update immediately after API calls, confusing users.  
- **Fix**: Used React state to toggle button labels (`Follow`/`Unfollow`) optimistically while waiting for the API response.  
  ```javascript
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);
  const handleFollow = async () => {
    setIsFollowing(!isFollowing); // Optimistic update
    await userService.follow(user.id); // API call
  };
  ```

#### 3. **Video Upload Failures**  
- **Issue**: Large video files caused `413 Payload Too Large` errors.  
- **Fix**: Adjusted Express.js `bodyParser` limits and added client-side file validation:  
  ```javascript
  // Frontend validation
  if (file.size > 50 * 1024 * 1024) {
    toast.error("File must be <50MB");
    return;
  }
  ```

#### 4. **Profile Page Hydration Errors**  
- **Issue**: Mismatched server/client user data caused Next.js hydration warnings.  
- **Fix**: Fetched user data client-side with `useEffect` and added loading skeletons.  

---

### Final Thoughts  
This project was a deep dive into full-stack integration. I learned the importance of **defensive coding**—anticipating edge cases (e.g., expired tokens, slow networks) and designing UIs that keep users informed. The biggest takeaway? **Real-world apps thrive on clear communication**: between frontend/backend, between components, and with users through feedback like toasts and loaders.  

---  
