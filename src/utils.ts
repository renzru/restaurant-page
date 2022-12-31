function createText(tag: string, text: string){
    const element = document.createElement(`${tag}`);
    element.textContent = text;

    return element;
}

function createImage(src: string, className: string) {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add(`${className}`);

    return img;
}

export {createText, createImage};