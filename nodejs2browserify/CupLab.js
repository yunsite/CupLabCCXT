/*  A entry point for the browser bundle version. This gets compiled by:
        
        browserify --debug CupLab.js > CupLab.browser.js
 */


window.CupLab = {
	'Coinbene' : require ('./Coinbene/Coinbene'),
	'Dobi'     : require ('./Dobi/Dobi')
};

window.$           = require ('jquery');
window._           = require ('underscore');
window.crypto      = require ('crypto');
