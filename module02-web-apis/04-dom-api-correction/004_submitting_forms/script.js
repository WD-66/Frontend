// Submitting forms
// ================

// ### Objective

// In this exercise, you will create a simple contact form and use JavaScript to handle the form submission, validate the fields, and display the submitted data.

// ### Instructions:
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const messageTextArea = document.querySelector('#message');
const emailInput = document.querySelector('#email');

const output = document.querySelector('#output');
// *   Add an event listener to handle form submission.
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const message = messageTextArea.value.trim();
  const email = emailInput.value.trim();
  try {
    // *   Validate that all fields are not empty.
    if (!name) {
      throw new Error('Name is required');
    }

    if (!email) {
      throw new Error('Message is required');
    }
    if (!message) {
      throw new Error('Message is required');
    }
    //     *   If validation passes, output the form data to the
    // console and display it in the `p` element as a list (`ul`)
    console.log(name, message, email);
    output.innerHTML = `<ul>
    <li>${name}</li>
    <li>${email}</li>
    <li>${message}</li>
    </ul>`;
    output.classList.remove('bg-red-500');
    output.classList.add('bg-green-500');

    //     *   Clear the form fields
    event.target.reset();
  } catch (error) {
    //     *   If not output an error message in the `p` element,
    // style it as an error. Maybe something red and flashy?
    //     *   [Make sure to toggle the error and success styles](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)!
    output.textContent = error.message;
    output.classList.remove('bg-green-500');
    output.classList.add('bg-red-500');
  }
});

//  In a real-life scenario, we would use the yet another
// Web API to send the data from the form over the network to
// store the data, sign up an user, create an order, process a payment and a very long et cetera, that other Web API is called **Fetch API**. We will talk about it very soon!
