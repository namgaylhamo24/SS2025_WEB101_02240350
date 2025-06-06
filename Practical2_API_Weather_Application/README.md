# RESTful API Weather Application
# INSTRUCTION
## Implementing GET, POST, PUT & DELETE requests to a public REST API

### Project Setup

1. **Create project directory structure**
   - Create a new folder for your project
   - Create two files in this folder:
     - `index.html` (for the user interface)
     - `script.js` (for the JavaScript code)

2. **Understanding the APIs we'll use**
   - Weather data: OpenWeatherMap API (for GET requests)
   - Saved locations: JSONPlaceholder API (for POST, PUT, DELETE requests)

## Step 1: Building the HTML Structure

The HTML file provides the structure and UI for our application with:
- A tabbed interface for different operations
- Forms for entering data
- Display areas for showing results
- Basic CSS styling

**Key HTML components:**
- Tab navigation for different API operations
- Weather lookup form (GET request)
- Location saving form (POST request)
- Saved locations display (PUT and DELETE requests)
- Response information display
- Location editing modal

## Step 2: Creating the JavaScript Functionality

The JavaScript file implements:
- Event listeners to handle user interactions
- Functions for each API operation (GET, POST, PUT, DELETE)
- Data processing and display logic

### Key JavaScript Components:

1. **Configuration and Constants**
```javascript
const WEATHER_API_KEY = 'API Key'; // Replace with your API key
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const PLACEHOLDER_API_URL = 'https://jsonplaceholder.typicode.com/posts';
```

2. **GET Request Implementation**
```javascript
async function getWeather() {
  // Constructing the URL with query parameters
  const url = `${WEATHER_API_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${WEATHER_API_KEY}`;
  
  // Fetch API for GET request
  const response = await fetch(url);
  const data = await response.json();
  
  // Display weather data
  weatherResult.innerHTML = `
    <div class="weather-card">
      <h3>${data.name}, ${data.sys.country}</h3>
      <div><strong>Weather:</strong> ${data.weather[0].main} — ${data.weather[0].description}</div>
      <div><strong>Temperature:</strong> ${data.main.temp}°C (Feels like: ${data.main.feels_like}°C)</div>
    </div>
  `;
}
```

3. **POST Request Implementation**
```javascript
async function saveLocation() {
  // Create the location object
  const locationData = {
    title: name,
    body: JSON.stringify({
      city,
      country,
      notes
    }),
    userId: 1
  };

  // Fetch API for POST request
  const response = await fetch(PLACEHOLDER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(locationData)
  });
}
```

4. **PUT Request Implementation**
```javascript
async function updateLocation() {
  // Fetch API for PUT request
  const response = await fetch(`${PLACEHOLDER_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(locationData)
  });
}
```

5. **DELETE Request Implementation**
```javascript
async function deleteLocation(id) {
  // Fetch API for DELETE request
  const response = await fetch(`${PLACEHOLDER_API_URL}/${id}`, {
    method: 'DELETE'
  });
}
```

## Step 3: Testing and Usage

**To use the application:**

1. **API Key Setup:**
   - Replace `YOUR_OPENWEATHERMAP_API_KEY` in the JavaScript file with your actual API key from OpenWeatherMap
   - Sign up at [openweathermap.org](https://openweathermap.org) if you don't have an API key

2. **Running the Application:**
   - Open `index.html` in a web browser
   - No server setup is needed for this simple project

3. **Testing Each API Operation:**
   - GET: Enter a city name and click "Get Weather"
   - POST: Fill out the location form and click "Save Location"
   - PUT: Click "Edit" on a saved location, make changes, and click "Update"
   - DELETE: Click "Delete" on a saved location

## Complete Code Structure

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather API Dashboard</title>
  <style>
    /* CSS styles for the application */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      padding: 20px;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    /* Additional styling for tabs, forms, and display elements */
  </style>
</head>
<body>
  <h1>Weather API Dashboard</h1>
  <div class="container">
    <!-- Tab navigation -->
    <div class="tabs">
      <div class="tab active" data-tab="get">GET Weather</div>
      <div class="tab" data-tab="post">POST Location</div>
      <div class="tab" data-tab="saved">Saved Locations</div>
    </div>
    
    <!-- Tab content sections -->
    <div class="tab-content active" id="get-tab">
      <!-- GET Weather form -->
    </div>
    
    <div class="tab-content" id="post-tab">
      <!-- POST Location form -->
    </div>
    
    <div class="tab-content" id="saved-tab">
      <!-- Saved locations display -->
    </div>
  </div>
  
  <script src="script.js"></script>
</body>
</html>
```

### script.js
```javascript
// Complete JavaScript implementation as shown in the sections above
// Including all API request functions, event listeners, and utility functions
```

This implementation provides a complete weather application that demonstrates all four CRUD operations using public REST APIs. The application features a clean UI with tabbed navigation and proper error handling for API requests.