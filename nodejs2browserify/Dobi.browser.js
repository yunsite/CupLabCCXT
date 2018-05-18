/*  A entry point for the browser bundle version. This gets compiled by:
        
        browserify --debug ./ccxt.browser.js > ./build/ccxt.browser.js
 */


window.CupLab_Dobi = require ('./CupLab_Dobi')
window.$           = require ('jquery')
window._           = require ('underscore')
window.crypto      = require ('crypto');
