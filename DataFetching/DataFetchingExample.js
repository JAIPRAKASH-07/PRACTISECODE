// Example: Fetch data using async/await
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetch data from API
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Parse the response to JSON
      console.log('Fetched Data:', data); // Log the data to the console
    } catch (error) {
      console.error('Error fetching data:', error.message); // Handle errors
    }
  }
  
  // Call the function
  fetchData();
  