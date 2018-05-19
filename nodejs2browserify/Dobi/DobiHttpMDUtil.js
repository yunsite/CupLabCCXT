const crypto = require('crypto');
const $ = require('jquery');

module.exports = class HttpMDUtil {

    constructor(accessKey, secret) {
        this.accessKey = accessKey;
        this.secret = secret;
        this.result = null;
    }

    dealBaseInfo(params) {
        params["accessKey"] = this.accessKey;
        params["version"] = "1.0"
        params["timestamp"] = Date.now();

        var ordered = {};
        var keysSort = Object.keys(params).sort();
        keysSort.forEach(function (key) {
            ordered[key] = params[key];
        });

        var params_str = "";
        var paramsKeys = Object.keys(ordered)
        paramsKeys.forEach(function(key) {
            params_str += key + "=" + ordered[key] + "&";
        });
        params_str = params_str.substring(0, params_str.length - 1);

        params_str += "&" + "sign=" + this.buildMySign(params_str);

        return params_str;
    }

    buildMySign(data, secret) {
        // https://github.com/Caligatio/jsSHA
        /*
        var shaObj = new jsSHA("SHA-1", "TEXT");
        shaObj.setHMACKey(this.secret, "TEXT");
        shaObj.update(data);
        return shaObj.getHMAC("HEX");
        */
        return crypto.createHmac('sha1', this.secret).update(data).digest('hex');
    }

    httpGet(url, resource, params={}, success_func, error_func, async=false) {
        this.http("get", url, resource, params, success_func, error_func, async);
    }

    httpPost(url, resource, params={}, success_func, error_func, async=false) {
        this.http("post", url, resource, params, success_func, error_func, async);
    }

    http(type, url, resource, params={}, success_func, error_func, async=false) {
        var params_str = this.dealBaseInfo(params);
        var url_str = url + resource;

        if (type == "get") {
            url_str += "?" + params_str;
            $.ajax({
                url: url_str,
                type: "GET",
                async: async,
                contentType: "application/x-www-form-urlencoded",
                cache: false,
                success: success_func,
                error: error_func
            });
        } else {
            $.ajax({
                url: url_str,
                type: "POST",
                async: async,
                data: params_str,
                contentType: "application/x-www-form-urlencoded",
                cache: false,
                success: success_func,
                error: error_func
            });

        }
        
    }
}
