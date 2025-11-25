# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop preview of the contact form solution](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub Repo URL](https://github.com/mtayyabrawan/responsive-contact-form-using-grid)
- Live Site URL: [GitHub Pages URL](https://mtayyabrawan.github.io/responsive-contact-form-using-grid)

## My process

- First I designed form layout using grid
- Made styles responsive
- Added error styles to form
- Implemented form submission and validation in JavaScript

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Few JavaScript Lines
- Mobile-first workflow

### What I learned

I learned how to implement custom form validation and accessible toast messages and also grid layout.

```css
.form-field:has(input + label) {
  flex-direction: row;
  justify-content: start;
  > label {
    cursor: pointer;
    text-wrap: nowrap;
  }
  &:has([type="checkbox"]) {
    flex-wrap: wrap;
  }
}
```

```js
_textarea.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter" && !evt.shiftKey && !evt.altKey && !evt.ctrlKey) {
    _formBtn.click();
  }
});
```

### Continued development

I want to continue focusing on accessibility and learning more about advanced CSS grid layouts.

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io) - Great challenges to practice.
- [Kevin Powell's CSS Grid Tutorial](https://www.youtube.com/watch?v=rg7Fvvl3taU) - Great tutorial for learning CSS Grid.

## Author

- Website - [Muhammad Tayyab](https://mtayyabrawan.github.io)
- Twitter - [@mtayyabrawan](https://x.com/mtayyabrawan)
- Frontend Mentor - [@mtayyabrawan](https://www.frontendmentor.io/profile/mtayyabrawan)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge.
