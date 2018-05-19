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
        this.dobiResult = null;
    }

    quote(market) {
        this.dobiResult = null;
        this.dobiSpotAPI.quote(market, (data) => this.dobiResult = data);
        return this.dobiResult;
    }

    myOrders(market, sort=1, page=2) {
        this.dobiResult = null;
        this.dobiSpotAPI.myOrders(market, sort, page, (data) => this.dobiResult = data);
        return this.dobiResult;
    }

    markets() {
        this.dobiResult = null;
        this.dobiSpotAPI.markets((data) => this.dobiResult = data);
        return this.dobiResult;
    }

    myInfo() {
        this.dobiResult = null;
        this.dobiSpotAPI.myInfo((data) => this.dobiResult = data);
        return this.dobiResult;
    }

    order(market, tradeType, price="", number="") {
        this.dobiResult = null;
        this.dobiSpotAPI.order(market, tradeType, price, number, (data) => this.dobiResult = data);
        return this.dobiResult;
    }

    rules(market) {
        this.dobiResult = null;
        this.dobiSpotAPI.rules(market, (data) => this.dobiResult = data);
        return this.dobiResult;
    }

    cancel(market, orderId) {
        this.dobiResult = null;
        this.dobiSpotAPI.cancel(market, orderId, (data) => this.dobiResult = data);
        return this.dobiResult;
    }
}
