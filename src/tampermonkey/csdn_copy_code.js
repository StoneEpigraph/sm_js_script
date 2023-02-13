// ==UserScript==
// @name         csdnCopyCode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to copy the code in csdn!
// @author       WhatsUPeng
// @match        https://blog.csdn.net/*/article/details/*
// @match        https://php.cn/*
// @match        https://www.php.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tmall.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let codeDom = document.querySelectorAll('code');
    codeDom.forEach(item => {
        item.contentEditable = "true";
    });
    // Your code here...
})();
