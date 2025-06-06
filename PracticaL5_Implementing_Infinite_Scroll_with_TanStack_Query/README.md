# Practical 5: Implementing Infinite Scroll with TanStack Query

## Overview

Implement infinite scrolling functionality in our TikTok application using TanStack Query (formerly React Query) with cursor-based pagination. This will provide a smooth, endless scrolling experience.

## Conceptual Overview

### Cursor-Based Pagination vs. Offset-Based Pagination

Before we dive into implementation, it's important to understand the difference between cursor-based and offset-based pagination:

1. **Offset-Based Pagination:**
   - Uses page and limit parameters (e.g., "give me page 3 with 10 items per page")
   - Simple to implement but has limitations with large datasets
   - Can lead to issues when items are added or removed during pagination

2. **Cursor-Based Pagination:**
   - Uses a unique identifier (cursor) as a reference point (e.g., "give me 10 items after item with ID 1234")
   - More efficient for large datasets
   - Provides consistent results even when data changes
   - Better suited for infinite scroll interfaces

For our TikTok application, cursor-based pagination is the preferred approach because:

- It provides a smoother user experience
- It handles new content being added correctly
- It's more efficient when dealing with potentially thousands of videos

# TanStack Query for Infinite Scroll

TanStack Query (React Query) provides built-in support for infinite scrolling with its `useInfiniteQuery` hook, which:

- Automatically manages pagination state
- Handles loading and error states
- Provides functions to fetch more data
- Maintains a cache of fetched data

# Intersection Observer API

To detect when a user has scrolled to the bottom of the feed, we'll use the Intersection Observer API, which:

- Efficiently detects when elements enter or exit the viewport
- Is more performant than scroll event listeners
- Provides a clean way to trigger loading more content

Refer here for the code updates when following the following steps:  
[https://github.com/syangche/TikTok_Frontend.git](https://github.com/syangche/TikTok_Server.git)

# Part 1: Backend Implementation for Cursor-Based Pagination

## Step 1: Update Video Controller for Cursor-Based Pagination

First, we need to modify our backend to support cursor-based pagination. Open `src/controllers/videoController.js` and update the `getAllVideos` function.

## Step 2: Update Following Videos Controller

Similarly, update the `getFollowingVideos` function to use cursor-based pagination.

# Part 2: Frontend Implementation with TanStack Query

## Step 1: Install Required Dependencies

Navigate to your Next.js project and install the required packages:

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

## Step 2: Set Up Query Client Provider

Update `src/app/layout.js` to include the `QueryClientProvider`.

## Step 3: Update Video Service for Cursor-Based Pagination

Update your `src/services/videoService.js` file to support cursor-based pagination.

## Step 4: Create an Intersection Observer Hook

Create a new file `src/hooks/useIntersectionObserver.js`.

## Step 5: Update VideoFeed Component for Infinite Scroll

Update your `src/components/ui/VideoFeed.jsx` for infinite Scroll.

# Key Differences from Offset-Based Pagination

## Backend Changes

1. **Query Parameters**: Changed from `page` and `limit` to `cursor` and `limit`.  
2. **Response Format**: Now includes `nextCursor` and `hasNextPage` instead of page numbers.  
3. **Database Queries**: Use Prisma's cursor and skip for more efficient pagination.  
4. **Extra Item Pattern**: Implemented the "n+1 pattern" to determine if there are more items to load.  

### Frontend Changes

1. **React Query**: Switched from `useQuery` to `useInfiniteQuery` for managing paginated data.  
2. **Intersection Observer**: Added to detect when the user scrolls to the bottom.  
3. **Cursor Management**: Handle cursor-based navigation instead of page numbers.  

---

## Resources

- TanStack Query Documentation  
- `useInfiniteQuery` Guide  
- Intersection Observer API  
- Prisma Cursor-Based Pagination  
- Next.js App Router Documentation  
```