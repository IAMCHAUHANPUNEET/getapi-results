/**
 * Fetches data from a given URL and returns it. Logs errors if the request fails.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<any>} - A promise that resolves to the fetched data.
 */
async function fetchapi(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null; // Return null or an empty object if you prefer
  }
}