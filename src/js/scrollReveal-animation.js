import ScrollReveal from 'scrollreveal';
// const mediaQuery1024 = window.matchMedia('(min-width: 1024px)');

const move = (elem, origin, distance = '250px', duration = 1200) => {
  ScrollReveal().reveal(elem, {
    reset: false,
    distance: distance,
    origin: origin,
    duration: duration,
  });
};

const scale = (elem, duration = 1500) => {
  ScrollReveal().reveal(elem, {
    reset: false,
    scale: 1.4,
    duration: duration,
    distance: '0px',
  });
};

move('.first-screen__title', 'left');
move('.first-screen__undertitle-text', 'bottom');
move('.first-screen__text', 'left');
move('.button', 'bottom', '100px');
scale('.first-screen__decor-container', 1700);
move('.title', 'left');
move('.text', 'right');
move('.portfolio__item', 'top', '350px', 1500);
scale('.product', 1700);
move('.products__bg', 'left');
move('.form__input', 'left');
