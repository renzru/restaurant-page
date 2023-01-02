import { createText, createImage, createTextNSpan } from "./utils";

function getMenu() {
    const main = document.createElement('main');

    const menu = document.createElement('section');
    menu.classList.add('menu');

    const heading = createText('h1', 'MENU');
    heading.classList.add('section__heading');


    const description = createText('p', 'Select from our variety of products!');
    description.classList.add('section__description')
}