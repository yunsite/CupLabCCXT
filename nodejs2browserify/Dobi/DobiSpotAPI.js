const DobiHttpMDUtil = require('./DobiHttpMDUtil');

module.exports = class DobiSpotAPI {

    constructor(url, accessKey, secret) {
        this.url = url;
        this.accessKey = accessKey;
        this.secret = secret;
        this.httpMDUtil = new DobiHttpMDUtil(accessKey, secret);
    }

    rules(market = "", success, error) {
        var TICKER_RESOURCE = "/trade/rules";
        var params={};

        if (market != "") {
            params["market"] = market;

            return this.httpMDUtil.httpGet(this.url, TICKER_RESOURCE, params, success, error);
        }

    }

    myOrders(market = "", sort, page=1, success, error) {
        var DEPTH_RESOURCE = "/trade/myOrders";
        var params = {};

        if (market != "") {
            params["market"] = market;
            params["page"] = page;
            params["sort"] = sort;

            return this.httpMDUtil.httpPost(this.url, DEPTH_RESOURCE, params, success, error);
        }
    }

    quote(market = "", success, error) {
        var TRADES_RESOURCE = "/market/quote";
        var params = {};

        if (market != "") {
            params["market"] = market;

            return this.httpMDUtil.httpGet(this.url, TRADES_RESOURCE, params, success, error);
        }
    }

    markets(success, error) {
        var TRADES_RESOURCE = "/trade/markets";
        var params = {};

        return this.httpMDUtil.httpGet(this.url, TRADES_RESOURCE, params, success, error);
    }

    order(market, tradeType, price="", number="", success, error) {
        var TRADE_RESOURCE = "/trade/order";
        var params = {
            "market":market,
            "type":tradeType
        };

        if (price != "") {
            params["price"] = price;
        }

        if (number != "") {
            params["number"] = number;
        }

        return this.httpMDUtil.httpPost(this.url, TRADE_RESOURCE, params, success, error);
    }

    cancel(market, orderId, success, error) {
        var CANCEL_ORDER_RESOURCE = "/trade/cancel";
        var params = {
            'id':orderId,
	        'market':market
        };

        return this.httpMDUtil.httpPost(this.url, CANCEL_ORDER_RESOURCE, params, success, error);
    }

    myInfo(success, error) {
        var ORDER_INFO_RESOURCE = "/trade/myInfo";
        var params = {};

        return this.httpMDUtil.httpPost(this.url, ORDER_INFO_RESOURCE, params, success, error);
    }
}
