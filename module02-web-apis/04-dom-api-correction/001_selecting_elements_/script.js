// 1.  **Select Elements and Log to Console**:

//     *   Select the `h1` element inside the `.hero-content`
//  div and log it to the console.
const headerH1 = document.querySelector('.hero-content h1');
console.log('headerH1:', headerH1);

//     *   Select all the `a` elements inside the `.nav-list`
// and log them to the console.
const navLinks = document.querySelectorAll('.nav-list a');
console.log('navLinks:', navLinks);

//     *   Select the `.btn` element and log it to the console.
const btn = document.querySelector('.btn');
console.log('btn:', btn);

// 2.  **Modify Styles**:

//     *   Change the background color of the `.header`
//  element to `#b5651d`.
const header = document.querySelector('.header');
header.style.backgroundColor = '#b5651d';
//     *   Change the font size of the `h1` element inside the
// `.hero-content` div to `3rem`.
headerH1.style.fontSize = '3rem';
//     *   Change the text color of all `a` elements inside the
//  `.nav-list` to `#faf0e6`.
navLinks.forEach(link => {
  link.style.color = '#faf0e6';
});
// for (const link of navLinks) {
//   link.style.color = '#faf0e6';
// }

// 3.  **Add Content**:

//     *   Select the `.hero-content` div and add a new `p`
// element with the text "Open daily from 7 AM to 9 PM."
// inside it.
const hero = document.querySelector('.hero-content');
const newP = document.createElement('p');
newP.textContent = 'Open daily from 7 AM to 9 PM.';
hero.appendChild(newP);
