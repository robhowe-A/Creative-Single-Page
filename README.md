# Frontend Mentor - Creative agency single page site solution

This is a solution to the [Creative agency single page site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/creative-agency-singlepage-site-Pq6V3I2RM). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Creative agency single page site solution](#frontend-mentor---creative-agency-single-page-site-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot (Mobile)](#screenshot-mobile)
    - [Screenshot (Tablet)](#screenshot-tablet)
    - [Screenshot (Desktop)](#screenshot-desktop)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [An example challenge picture](#an-example-challenge-picture)
    - [A JS function I'm proud of](#a-js-function-im-proud-of)
  - [Author: Robert Howell](#author-robert-howell)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot (Mobile)

<img src="./Web capture_1440-resolution.jpeg" alt="Web capture at resolution 1440 pixels.">

### Screenshot (Tablet)

<img src="./Web capture_768-resolution.jpeg" alt="Web capture at resolution 768 pixels.">

### Screenshot (Desktop)

<img src="./Web capture_375-resolution.jpeg" alt="Web capture at resolution 375 pixels.">

### Links

- Live Site URL: [Creative-Single-Page](https://robhowe-a.github.io/Creative-Single-Page/website/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This chellenge came together from a mobile-first and semantic HTML driven design. One of the best things I learned about this project is attention to detail. I've configured the site well to suit the design needs. With more time dedicated to CSS practices, I can refine the design to exact perfection. For now, the design is well and looks good on devices of all sizes. I worked with the design and filled in missing details like any developer may, where decisions had to be made. I enjoyed the assets' consistency in this project. It challenged my markup skills to have all the pictures be at the right sizes in responsive design.

### An example challenge picture

```html
<picture>
  <source srcset="assets/mobile/image-slide-1.jpg" media="(max-width: 375px)" width="375" height="404" />
  <source srcset="assets/tablet/image-slide-1.jpg" media="(max-width: 438px)" width="438" height="472" />
  <source srcset="assets/desktop/image-slide-1.jpg" media="(min-width: 439px)" width="895" height="728" />
  <img src="assets/mobile/image-slide-1.jpg" alt="Brand section photo: A design pamphlet being read." />
</picture>
```

```css
main @media screen and (min-width: 501px) {
  & img {
    object-fit: contain;
    object-position: top;
    height: auto;
  }
}
```

### A JS function I'm proud of

```js
main: () => {
  const navigation = new NavigationAction();
  navigation.init();

  const slideshow = new BrandSpotSlideShow();
  slideshow.init();
};
```

## Author: Robert Howell

- Linkedin - [Robert Howell](https://www.linkedin.com/in/rhowell-5464/)
- Github - [Robert Howell](https://github.com/robhowe-A)