function fetchAndProcessPosts(labelName) {
  // Construct the API URL
  const apiUrl = `/feeds/posts/default/-/${labelName}?alt=json-in-script&callback=relatedPosts`;

  // Create a script element to load the data
  const scriptElement = document.createElement('script');
  scriptElement.src = apiUrl;

  // Define the callback function (relatedPosts)
  window.relatedPosts = function(data) {
    // Process the data here
    console.log(data);
  };

  // Append the script element to the document
  document.head.appendChild(scriptElement);
}
