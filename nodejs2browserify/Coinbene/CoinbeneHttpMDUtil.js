const $ = require('jquery');
const _ = require('underscore');
const crypto = require('crypto');

module.exports = class CoinbeneHttpMDUtil {

    constructor(apiid, secret) {
        this.apiid = apiid;
        this.secret = secret;
        this.result = null;
    }

    buildMySign(data, secret) {
        var params = $.extend({}, data);
        params["secret"] = secret;

        // var ordered = [];
        var ordered = {};
        _.each(_.keys(params).sort(), function (key) {
            // ordered.push(key + ":" + params[key]);
            ordered[key] = params[key];
        });

        var ordered_str = "";
        _.each(ordered, function(value, key, list) {
            ordered_str += key.toUpperCase() + "=" + value.toString().toUpperCase() + "&";
        });
        ordered_str = ordered_str.substring(0, ordered_str.length - 1);

        return crypto.createHash('md5').update(ordered_str).digest('hex'); 
    }

    httpGet(url, resource, params='', success_func, error_func, async=false) {
        var params_str = "";
        _.each(params, function(value, key, list) {
            params_str += key + "=" + value + "&";
        });
        var url_str = url + resource + "?" + params_str.substring(0, params_str.length - 1);
        // console.log("httpGet: " + url_str);

        $.ajax({
            url: url_str,
            type: "GET",
            async: async,
            contentType: "application/x-www-form-urlencoded",
            cache: false,
            success: success_func,
            error: error_func
        });
    }

    httpPost(url, resource, params, success_func, error_func, async=false) {
        params["timestamp"] = Date.now();
        params["apiid"] = this.apiid;
        params["sign"] = this.buildMySign(params, this.secret);

        var url_str = url + resource;

        // console.log("httpPost: " + url_str + "\r\n    data:" + JSON.stringify(params) + "\r\n    hash:" + params["sign"]);

        $.ajax({
            url: url_str,
            type: "POST",
            async: async,
            data: JSON.stringify(params),
            contentType: "application/json",
            cache: false,
            success: success_func,
            error: error_func
        });
    }
}
