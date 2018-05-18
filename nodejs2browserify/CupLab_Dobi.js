"use strict";

const DobiSpotAPI = require('./DobiSpotAPI');

module.exports = class CupLab_Dobi{

    constructor(accessKey, secret) {

        this.config = {
            url:"https://api.dobitrade.com", 
            accessKey:accessKey, 
            secret:secret
        };

        this.dobiSpotAPI = new DobiSpotAPI(this.config.url, this.config.accessKey, this.config.secret);
        this.DobiResult = null;
    }

    quote(market) {
        this.DobiResult = null;
        this.dobiSpotAPI.quote(market, (data) => this.DobiResult = data);
        return this.DobiResult;
    }

    myOrders(market, sort=1, page=2) {
        this.DobiResult = null;
        this.dobiSpotAPI.myOrders(market, sort, page, (data) => this.DobiResult = data);
        return this.DobiResult;
    }

    markets() {
        this.DobiResult = null;
        this.dobiSpotAPI.markets((data) => this.DobiResult = data);
        return this.DobiResult;
    }

    myInfo() {
        this.DobiResult = null;
        this.dobiSpotAPI.myInfo((data) => this.DobiResult = data);
        return this.DobiResult;
    }

    order(market, tradeType, price="", number="") {
        this.DobiResult = null;
        this.dobiSpotAPI.order(market, tradeType, price, number, (data) => this.DobiResult = data);
        return this.DobiResult;
    }

    rules(market) {
        this.DobiResult = null;
        this.dobiSpotAPI.rules(market, (data) => this.DobiResult = data);
        return this.DobiResult;
    }

    cancel(market, orderId) {
        this.DobiResult = null;
        this.dobiSpotAPI.cancel(market, orderId, (data) => this.DobiResult = data);
        return this.DobiResult;
    }
}
