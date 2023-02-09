// ==UserScript==
// @name         ZaraNotifyer
// @namespace    mep
// @version      1.0
// @description  Zara Notifyer Plugin
// @author       MyEvilpumpkin
// @license      MIT
// @match        https://www.zara.com/*&notify
// @icon         https://static.zara.net/stdstatic/3.5.0-b.23/images/favicon-32x32.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const color = 'СЕРЫЙ';
    const size = 'M';
    const refreshInterval = 5 * 60 * 1000;

    let hasColor = false;
    let hasSize = false;

    [].forEach.call(document.getElementsByClassName('product-detail-color-selector__color-button'), element => {
        if (element.innerText === color) {
            hasColor = true;
            element.click();
        }
    });

    if (hasColor) {
        [].forEach.call(document.getElementsByClassName('size-selector__size-list-item'), element => {
            if (element.innerText === size) {
                hasSize = true;
            }
        });
    }

    if (hasColor && hasSize) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://notification.site/notify');
        xhr.send();
    }
    else {
        setTimeout(() => { location.reload(); }, refreshInterval);
    }

})();
