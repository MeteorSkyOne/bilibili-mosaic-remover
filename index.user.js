// ==UserScript==
// @name         b站直播马赛克去除
// @namespace    http://msnets.com/
// @version      2024-10-27
// @description  remove live mosaic mask
// @author       MeteorSky
// @match        https://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// ==/UserScript==

(function() {
    'use strict';

    function removeElementsByClassNames(classNames) {
        classNames.forEach(className => {
            const elements = document.querySelectorAll(`.${className}`);
            elements.forEach(element => element.remove());
        });
    }

    const classNamesToRemove = ['web-player-module-area-mask', 'web-player-module-area-mask-panel'];

    removeElementsByClassNames(classNamesToRemove);

    const observer = new MutationObserver(() => {
        removeElementsByClassNames(classNamesToRemove);
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();