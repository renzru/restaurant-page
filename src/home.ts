import * as data from './data.json'
import { createText, createTextNSpan, createImage } from './utils';


function getHome() {
    const main = document.createElement('main');
    const cover = getCover();
    const coverCard = getCoverCard();
    const featured = getFeatured();
    const delivery = getDelivery();
    const review = getReview();

    main.append(cover,coverCard,featured,delivery,review);
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

    const totalCards = data.products_featured.length;

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

function getDelivery() {
    const delivery = document.createElement('section');
    delivery.classList.add('delivery');

    const header = createText('h1', 'WE DELIVER');
    header.classList.add('section__heading');

    const description = createText('p', 'Order from your favorite delivery apps!');
    description.classList.add('section__description');

    const container = getDeliveryContainer();

    delivery.append(header, description, container);
    return delivery
}

function getDeliveryContainer() {
    const container = document.createElement('section');
    container.classList.add('cards-container', 'cards-container--delivery');

    const totalCards = data.delivery_apps.length;

    for (let i:number = 0; i < totalCards; i++){
        container.append(getDeliveryCard(data.delivery_apps[i].src));
    }
    
    return container;
}

function getDeliveryCard(src: string) {
    const image = createImage(src, 'delivery__icon');

    return image
}

function getReview() {
    const review = document.createElement('section');
    review.classList.add('review');

    const contentContainer = document.createElement('section');
    contentContainer.classList.add('review__container');

    const cardsContainer = document.createElement('section');
    cardsContainer.classList.add('card-container--review');

    const totalCards = data.customer_reviews.length;

    for (let i:number = 0; i < totalCards; i++) {
        cardsContainer.append(getReviewCard(data.customer_reviews[i]));
    }

    const posterImage = createImage('./src/media/lady-review.png', "review__customer");

    contentContainer.append(cardsContainer, posterImage);
    review.append(contentContainer);

    return review;
}

function getReviewCard(review: {name: string, src: string, rating: string, comment: string}){
    const card = document.createElement('article');
    card.classList.add('card', 'card--review');

    const header = document.createElement('div');
    header.classList.add('card--review__heading');

    const customerPic = createImage(review.src, "card--review__picture");
    const customerName = createText('h1', review.name);
    customerName.classList.add('card--review__username');
    const rating = createText('h1', review.rating);
    rating.classList.add('card--review__rating');

    const starIcon = createImage('./src/media/star.png', "card--review__star");

    header.append(customerPic, customerName, rating, starIcon);

    const customerComment = createText('p', review.comment);
    customerComment.classList.add('card--review__comment');

    card.append(header, customerComment);    
    return card;
}

export {getHome};