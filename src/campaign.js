import desktopImg from '../images/desktop.jpg';
import mobileImg from '../images/mobile.jpg';

let attrs = {
    srcset : `${desktopImg} 640w`,
    src : `${mobileImg}`,
    alt : 'campaign images'
};

let createImage = () => {
    return new Image();
}

let setAttributes = (el, attrs) => {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};

let campaign = document.querySelectorAll('.campaign')[0];

    for (let index = 0; index < campaign.childElementCount; index++) {
        let campaignImage = createImage();
        setAttributes(campaignImage, attrs);
        campaign.children[index].appendChild(campaignImage);
    }