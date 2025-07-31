// ### Instructions

// 1.  **Create the HTML Structure**:
const body = document.querySelector('body');
//     *   Create a `header` element with a `nav` inside it.
const header = document.createElement('header');
body.appendChild(header);
const nav = document.createElement('nav');
header.appendChild(nav);
//     *   Inside the `nav`, create an `a` element with the
// class `logo` and the text "Coffee Shop".
const logo = document.createElement('a');
// for creating initial classes on element
logo.className = 'logo';
nav.appendChild(logo);

// once element is created, update with add
// logo.classList.add('logo');

//     *   Create a `ul` element with the class
// `nav-list`.
const navList = document.createElement('ul');
nav.appendChild(navList);
// Inside the `ul`, create four `li` elements with the class
// `nav-item`, each containing an `a` element with text
//  "Home", "Menu", "About", and "Contact".
const navArray = ['Home', 'Menu', 'About', 'Contact'];

navArray.forEach(navText => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = navText;
  li.appendChild(a);
  navList.appendChild(li);
});

// 2.  **Create the Hero Section**:

//     *   Create a `section` element with the class `hero`.
//     *   Inside the `hero`, create a `div` with the class `hero-content`.
//     *   Inside the `div`, create an `h1` element with the text "Welcome to Our Coffee Shop".
//     *   Add a `p` element with the text "Enjoy the best coffee in town."
//     *   Add an `a` element with the class `btn` and the text "Explore Our Menu".
const hero = document.createElement('section');
hero.className = 'hero';
body.appendChild(hero);

const heroContent = document.createElement('div');
heroContent.classList.add('hero-content');
hero.appendChild(heroContent);

const h1 = document.createElement('h1');
h1.textContent = 'Welcome to Our Coffee Shop';
heroContent.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'Enjoy the best coffee in town.';
heroContent.appendChild(p);
// 3.  **Create the Footer**:

//     *   Create a `footer` element with the class `footer`.
//     *   Inside the `footer`, create a `p` element with the text "© 2024 Coffee Shop. All rights reserved.".
const footer = document.createElement('footer');
footer.className = 'footer';
body.appendChild(footer);

const footerP = document.createElement('p');
footerP.textContent = '© 2024 Coffee Shop. All rights reserved.';
footer.appendChild(footerP);
// 4.  **Apply CSS Styles Using JavaScript**:

//     *   Use JavaScript to apply the following CSS styles to the elements using `element.style`:
//         *   `.header`: background-color: #fff, box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), padding: 1rem 0.
header.style.backgroundColor = '#fff';
header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
header.style.padding = '1rem 0';
//         *   `.nav`: display: flex, justify-content: space-between, align-items: center, max-width: 1200px, margin: 0 auto, padding: 0 1rem.
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'center';
nav.style.maxWidth = '1200px';
nav.style.margin = '0 auto';
nav.style.padding = '0 1rem';
//         *   `.logo`: font-size: 1.5rem, font-weight: bold, color: #333, text-decoration: none.
logo.style.fontSize = '1.5rem';
logo.style.fontWeight = 'bold';
logo.style.color = '#333';
logo.style.textDecoration = 'none';
//         *   `.nav-list`: display: flex, list-style: none.
navList.style.display = 'flex';
navList.style.listStyle = 'none';
//         *   `.nav-item`: margin-left: 1.5rem.
const navItems = document.querySelectorAll('.nav-item');
for (const item of navItems) {
  item.style.marginLeft = '1.5rem';
}
//         *   `.nav-item a`: text-decoration: none, color: #333, font-weight: bold.
const navAs = document.querySelectorAll('.nav-item');
for (const a of navItems) {
  a.style.textDecoration = 'none';
  a.style.color = '#333';
  a.style.fontWeight = 'bold';
}
//         *   `.hero`: height: 560px, background: url("[https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1](https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1)") no-repeat center center/cover, color: #fff.
hero.style.height = '560px';
hero.style.background =
  'url("https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1") no-repeat center center/cover';
hero.style.color = '#fff';
//         *   `.hero-content`: max-width: 600px, height: 100%, display: flex, flex-direction: column, justify-content: space-around, align-items: center, text-align: center.
//         *   `.hero-content h1`: font-size: 2.5rem, margin-bottom: 1rem.
//         *   `.hero-content p`: font-size: 1.2rem, margin-bottom: 2rem.
heroContent.style.maxWidth = '600px';
heroContent.style.height = '100%';
heroContent.style.display = 'flex';
heroContent.style.flexDirection = 'column';
heroContent.style.justifyContent = 'space-around';
heroContent.style.alignItems = 'center';
heroContent.style.textAlign = 'center';

h1.style.fontSize = '2.5rem';
h1.style.marginBottom = '1rem';
//         *   `.btn`: background-color: #333, color: #fff, padding: 0.75rem 1.5rem, text-decoration: none, border-radius: 5px, transition: background-color 0.3s ease.
//         *   `.btn:hover`: background-color: #555. (tip: you can set a `mouseover` and a `mouseout` event for this)
btn.style.backgroundColor = '#333';
btn.style.color = '#fff';
btn.style.padding = '0.75rem 1.5rem';
btn.style.textDecoration = 'none';
btn.style.borderRadius = '5px';
btn.style.transition = 'background-color 0.3s ease';
//         *   `.footer`: background-color: #333, color: #fff, text-align: center, padding: 1rem 0, margin-top: auto.
footer.style.backgroundColor = '#333';
footer.style.color = '#fff';
footer.style.textAlign = 'center';
footer.style.padding = '1rem 0';
footer.style.marginTop = 'auto';
// Now, is this practical? Certainly no! But you gotta learn and get comfortable with the DOM API ❤️
