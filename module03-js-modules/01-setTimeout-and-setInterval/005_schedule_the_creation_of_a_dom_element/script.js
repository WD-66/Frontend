const container = document.querySelector('#message-container');

// *   Use `setTimeout` to schedule the creation of a promotion message after
// 3 seconds.
const myTimeout = setTimeout(() => {
  // *   Create a new DOM element (e.g., a `<div>`) for the promotion message.
  const newDiv = document.createElement('div');
  // *   Add some text to the promotion message, like "Special Offer: Get 20%
  // off your next purchase!".
  newDiv.textContent = 'Special Offer: Get 20% off your next purchase!';
  // *   Use Tailwind CSS to style the message with a background color, padding,
  // rounded corners, and centered text.
  newDiv.className = 'bg-red-500 text-white p-4 rounded-lg mx-auto shadow-lg';
  // *   Append the new element to the `message-container` div.
  container.appendChild(newDiv);
}, 3000);
