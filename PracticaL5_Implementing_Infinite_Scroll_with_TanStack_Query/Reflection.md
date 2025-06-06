### Main Concepts Applied

1. **Cursor-Based Pagination**  
   - Replaced traditional offset-based pagination with cursor-based pagination to handle large datasets more efficiently.  
   - Used unique identifiers (cursors) to fetch data after a specific point, ensuring consistency even when data changes.  

2. **TanStack Query (`useInfiniteQuery`)**  
   - Leveraged the `useInfiniteQuery` hook to manage paginated data, including automatic state handling, loading/error states, and caching.  
   - Implemented functions like `fetchNextPage` to load additional data seamlessly.  

3. **Intersection Observer API**  
   - Detected when users scrolled to the bottom of the page to trigger new data fetches.  
   - Improved performance by avoiding scroll event listeners in favor of Intersection Observer.  

4. **Backend Adjustments**  
   - Updated API endpoints to accept `cursor` and `limit` parameters instead of `page` and `limit`.  
   - Modified responses to include `nextCursor` and `hasNextPage` for frontend navigation.  

---
### What I Learned  

1. **Efficiency of Cursor-Based Pagination**  
   - Learned how cursor-based pagination outperforms offset-based methods, especially for dynamic content like TikTok videos.  
   - Understood the "n+1 pattern" to determine if more items exist without overfetching.  

2. **Power of TanStack Query**  
   - Discovered how `useInfiniteQuery` simplifies complex pagination logic, reducing boilerplate code.  
   - Appreciated built-in features like caching and background refetching.  

3. **Intersection Observer Magic**  
   - Saw firsthand how Intersection Observer efficiently tracks DOM elements without costly scroll listeners.  

### Challenges Faced  

1. **Backend-Frontend Sync**  
   - **Issue**: Initially, the backend returned `nextCursor` as `null`, but the frontend expected `undefined` to stop pagination.  
   - **Fix**: Standardized the response format and added validation.  
 

2. **Memory Leaks with Observers**  
   - **Issue**: Forgot to disconnect Intersection Observers, causing memory leaks during component unmounts.  
   - **Fix**: Added a cleanup function in `useEffect`.  
   ```javascript
   useEffect(() => {
     const observer = new IntersectionObserver(callback);
     observer.observe(ref.current);
     return () => observer.disconnect(); // Cleanup
   }, []);
   ```

3. **UI "Jumps" During Loading**  
   - **Issue**: New content caused sudden layout shifts, disrupting the scrolling experience.  
   - **Fix**: Added a skeleton loader to reserve space.  
---

### Final Thoughts  

This practical was a game-changer! I went from "Why is my app crashing?" to "Wow, infinite scroll is smooth!" The biggest takeaway? **Cursor-based pagination + TanStack Query = ❤️**. Sure, debugging the Observer had me grumbling, but the final result—seamless scrolling like TikTok—made it worth the headache.
