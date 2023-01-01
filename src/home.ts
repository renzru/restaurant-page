import * as data from './products.json'
import { createText, createTextNSpan, createImage } from './utils';


function getHome() {
    const main = document.createElement('main');
    const cover = getCover();
    const coverCard = getCoverCard();
    const featured = getFeatured();

    main.append(cover, coverCard, featured);
    return main;
}

function getCover() {
    const cover = document.createElement('section');
    cover.classList.add('cover');
    
    const coverHeading = getCoverHeading();
    const priceTag = getCoverPriceTag();
    const coverProduct = createImage(data.product_cover[0].src, 'cover__chicken');
    
    cover.append(coverHeading, priceTag, coverProduct);

    return cover;
}

function getCoverHeading() {
    const coverHeading = document.createElement('article');
    coverHeading.classList.add('cover__heading');

    const crispyUpperText = createText('p', 'THE NEXT LEVEL OF');
    const crispyBanner = createImage('./src/media/crispy.png', 'cover__crispy');

    coverHeading.append(crispyUpperText, crispyBanner);

    return coverHeading;
}

function getCoverPriceTag() {
    const priceTag = document.createElement('div');
    priceTag.classList.add('cover__pricetag');

    const priceText = createText('p', 'ONLY');
    const priceValue = createText('h1', '$8.99!');

    priceTag.append(priceText, priceValue);

    return priceTag;
}

function getCoverCard() {
    const coverCard = document.createElement('section');    
    coverCard.classList.add('cards-container--cover');

    const container = document.createElement('article');
    container.classList.add('card', 'card--cover');

    const header = createTextNSpan('h1', `${data.product_cover[0].name} <span class="card__price">${data.product_cover[0].price}</span>`);
    header.classList.add('card__header');

    const body = getCoverCardBody();
    const actions = getCoverCardActions();

    container.append(header, body, actions);
    coverCard.append(container);

    return coverCard;
}

function getCoverCardBody() {
    const body = document.createElement('div');
    body.classList.add('card__body');

    const divider = document.createElement('hr');
    divider.classList.add('card__divider');

    const description = createText('p', data.product_cover[0].description);
    description.classList.add('card__description');
    
    body.append(divider, description);
    return body;
}

function getCoverCardActions() {
    const actions = document.createElement('div');
    actions.classList.add('card__actions');

    const button = createText('button', 'Add to Basket');
    button.classList.add('card__purchase');

    actions.append(button);
    return actions;
}

function getFeatured() {
    const featured = document.createElement('section');
    featured.classList.add('featured');

    const header = createText('h1', 'FEATURED');
    header.classList.add('section__heading');

    const description = createText('p', 'Discover our latest featured products!');
    description.classList.add('section__description');

    const container = getFeaturedContainer();

    featured.append(header, description, container);
    return featured;
}

function getFeaturedContainer() {
    const container = document.createElement('section');
    container.classList.add('cards-container', 'cards-container--featured');

    const totalCards = 3;

    for (let i:number = 0; i < totalCards; i++){
        container.append(getFeaturedCard(data.products_featured[i]));
    }

    return container;
}

function getFeaturedCard(product: {name: string, price: string, description: string, src: string}) {
    const card = document.createElement('article');
    card.classList.add('card', 'card--featured');
    
    const image = createImage(product.src, 'card__image');
    const header = createTextNSpan('h1', `${product.name}<span class="card__price">${product.price}</span>`);
    header.classList.add('card__header');
    
    const body = document.createElement('div');    
    body.classList.add('card__body');

    const divider = document.createElement('hr');
    divider.classList.add('card__divider');

    const description = createText('p', product.description);
    description.classList.add('card__description');
    
    body.append(divider,description);
    card.append(image,header,body);

    return card;
}

export {getHome};