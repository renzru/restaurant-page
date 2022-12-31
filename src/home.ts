import './normalize.css'
import './style.css'
import { createImage, createText } from './utils';


function getHome() {
    const main = document.createElement('main');

    const cover = getCover();

    main.append(cover);
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

export {getHome};