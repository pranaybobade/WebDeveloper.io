const mobileHam = document.querySelector ('.hamburger');
const lists = document.querySelector ('.unlist');

const toggleNavbar = () => {
  lists.classList.toggle ('active');
};

mobileHam.addEventListener ('click', () => toggleNavbar ());
