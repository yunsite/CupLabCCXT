"use strict";

const CoinbeneSpotAPI = require('./CoinbeneSpotAPI');

module.exports = class Coinbene {

    constructor(apiid, secret) {

        this.config = {
            url:"http://api.coinbene.com", 
            apiid:apiid, 
            secret:secret
        };

        this.coinbeneSpotAPI = new CoinbeneSpotAPI(this.config.url, this.config.apiid, this.config.secret);
        this.coinbeneResult = null;
    }

    ticker(symbol) {
        this.coinbeneResult = null;
        this.coinbeneSpotAPI.ticker(symbol, (data) => this.coinbeneResult = data);
        return this.coinbeneResult;
    }

    orderbook(symbol, depth = 5) {
        this.coinbeneResult = null;
        this.coinbeneSpotAPI.orderbook(symbol, depth, (data) => this.coinbeneResult = data);
        return this.coinbeneResult;
    }

    trades(symbol) {
        this.coinbeneResult = null;
        this.coinbeneSpotAPI.trades(symbol, (data) => this.coinbeneResult = data);
        return this.coinbeneResult;
    }

    balance() {
        this.coinbeneResult = null;
        this.coinbeneSpotAPI.balance((data) => this.coinbeneResult = data);
        return this.coinbeneResult;
    }

    place(symbol, tradeType, price="", quantity="") {
        this.coinbeneResult = null;
        this.coinbeneSpotAPI.place(symbol, tradeType, price, quantity, (data) => this.coinbeneResult = data);
        return this.coinbeneResult;
    }

    ordersinfo(symbol) {
        this.coinbeneResult = null;
        this.coinbeneSpotAPI.ordersinfo(symbol, (data) => this.coinbeneResult = data);
        return this.coinbeneResult;
    }

    info(orderId) {
        this.coinbeneResult = null;
        this.coinbeneSpotAPI.info(orderId, (data) => this.coinbeneResult = data);
        return this.coinbeneResult;
    }

    cancel(orderId) {
        this.coinbeneResult = null;
        this.coinbeneSpotAPI.cancel(orderId, (data) => this.coinbeneResult = data);
        return this.coinbeneResult;
    }
}
