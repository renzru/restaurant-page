import * as data from './products.json'
import { createImage, createText } from './utils';


function getHome() {
    const main = document.createElement('main');
    const cover = getCover();
    const coverCard = getCoverCard();

    main.append(cover, coverCard);
    return main;
}

function getCover() {
    const cover = document.createElement('section');
    
    const coverHeading = getCoverHeading();
    const priceTag = getCoverPriceTag();
    const coverProduct = createImage('./src/media/cover-chicken.png', 'cover__chicken');
    
    cover.classList.add('cover');
    cover.append(coverHeading, priceTag, coverProduct);

    return cover;
}

function getCoverHeading() {
    const coverHeading = document.createElement('article');
    const crispyUpperText = createText('p', 'THE NEXT LEVEL OF');
    const crispyBanner = createImage('./src/media/crispy.png', 'cover__crispy');

    coverHeading.classList.add('cover__heading');
    coverHeading.append(crispyUpperText, crispyBanner);

    return coverHeading;
}

function getCoverPriceTag() {
    const priceTag = document.createElement('div');
    const priceText = createText('p', 'ONLY');
    const priceValue = createText('h1', '$8.99!');

    priceTag.classList.add('cover__pricetag');
    priceTag.append(priceText, priceValue);

    return priceTag;
}

function getCoverCard() {
    const coverCard = document.createElement('section');    
    const container = document.createElement('article');

    const header = createText('h1', 'Crispy Honey-Garlic Chicken $8.99');
    const body = getCoverCardBody();
    const actions = getCoverCardActions();

    coverCard.classList.add('cards-container--cover');
    container.classList.add('card', 'card--cover');
    header.classList.add('card__header');
    
    container.append(header, body, actions);
    coverCard.append(container);

    return coverCard;
}


function getCoverCardBody() {
    const products = data;
    const body = document.createElement('div');
    const divider = document.createElement('hr');
    const description = createText('p', products.CHG_chicken.description);
    
    body.classList.add('card__body');
    divider.classList.add('card__divider');
    description.classList.add('card__description');
    
    body.append(divider, description);
    return body;
}

function getCoverCardActions() {
    const actions = document.createElement('div');
    const button = createText('button', 'Add to Basket');

    actions.classList.add('card__actions');
    button.classList.add('card__purchase');

    actions.append(button);
    return actions;
}

export {getHome};