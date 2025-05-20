
## a) Documentation

### Main Concepts Applied

In this practical, I developed a **RESTful API Weather Application** that integrates both **OpenWeatherMap** and **JSONPlaceholder** APIs to perform basic CRUD operations (GET, POST, PUT, DELETE). The key concepts applied include:

* **RESTful API Principles**: Implemented HTTP methods such as GET (retrieve weather data), POST (save new locations), PUT (update existing locations), and DELETE (remove saved locations).
* **Frontend Development**: Built the user interface using `index.html` and styled it with basic CSS.
* **JavaScript Interactivity**: Used `script.js` to manage API requests and user interactions.
* **API Integration**:

  * **OpenWeatherMap** was used to fetch weather data via GET requests.
  * **JSONPlaceholder** simulated backend functionality for saving and manipulating location data (POST, PUT, DELETE).
* **Modal and Tab Navigation**: Designed a responsive UI with modal popups for editing and tabbed sections for each operation.

---

## b) Reflection

### What I Learned

This project helped me understand how to:

* Structure and integrate multiple APIs in a single web application.
* Manage different types of API requests through JavaScript fetch and async/await syntax.
* Handle dynamic content updates on the frontend based on API responses.
* Simulate backend interactions using mock APIs for practice before working with real databases.

Additionally, I gained confidence in using modals for data editing and implementing client-side logic for form submissions and updates.

---

### Challenges Faced & How I Overcame Them

#### 1. **Handling CORS Errors**

* **Issue**: Initially, I faced CORS-related issues when trying to interact with the APIs.
* **Solution**: After researching, I learned that using `JSONPlaceholder` (a public test API) and client-side-only architecture avoids CORS issues for educational purposes.


#### 2. **UI Updates Not Reflecting**

* **Issue**: Changes to saved locations (PUT/DELETE) weren't reflected in the UI.
* **Solution**: I debugged the code and realized that I needed to refresh the location display list after each update or deletion.


---

This practical gave me a deeper appreciation for the workflow of modern web applications and the importance of proper API handling and UI logic. I'm more confident now in building projects that connect frontends to external data sources.

---

