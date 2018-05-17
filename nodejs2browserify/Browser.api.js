const qs = require('querystring');
const crypto = require('crypto');
const axios = require('axios');

/*-------------------请求配置----------------*/
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'https://api.dobitrade.com';
// 请求拦截
axios.interceptors.request.use((config) => {
  return config;
}, err => {
  return Promise.reject(err);
});
// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.status && parseInt(res.status, 10) === 200 && parseInt(res.data.status, 10) != 1) {
    // 后台返回错误
    // TODO res.data.msg;
  }
  return res;
}, err => {
  // 错误的XMLHttpRequest对象
  console.log(err);
  return Promise.reject(err);
});
/*-------------------请求配置----------------*/



module.exports = class DobiA {
  constructor(accessKey, secretKey) {
    // 基本参数
    this.secretKey = secretKey;
    this.baseParam = {
      accessKey: accessKey,
      version: '1.0',
      timestamp: this.generateTimeStap(),
    }
  }

  generateTimeStap() {
    return (Date.parse(new Date()) / 1000).toString();
  }
  /**
   * 生成签名
   * 将接口需要的参数排序后加密
   * @param {Object} params 接口需要传入的字段与值
   * @returns 加密后的字符串sign
   * @memberof Dobi
   */
  generateSign(params) {
    let newObj = Object.assign(this.baseParam, params);
    let newKeys = Object.keys(newObj).sort();
    let oResult = {};
    newKeys.forEach((key, i) => {
      oResult[newKeys[i]] = newObj[newKeys[i]];
    });
    let queryStr = qs.stringify(oResult);
    return crypto.createHmac('sha1', this.secretKey).update(queryStr).digest('hex');
  }
  
  /**
   * 
   * 封装好的带有sign的请求
   * @param {String} type get / post 
   * @param {String} url 请求url
   * @param {Object} data 接口需要的参数
   * @returns Promise对象
   * @memberof Dobi
   */
  signRequest(type, url, data) {
    Object.keys(this.baseParam).forEach((key, i) => {
      data[key] = this.baseParam[key];
    });
    data['sign'] = this.generateSign(data);
    if (type == 'get') {
      return axios({
        method: "GET",
        url: url,
        params: data,
      });
    } else if (type == 'post') {
      return axios({
        method: "POST",
        url: url,
        data: qs.stringify(data),
      })
    }
  }

  // ----------  begin requests  -----------------
  // 委托下单
  order(data) {
    return this.signRequest('post', '/trade/order', data);
  }

  // 撤销委托单
  cancel(data) {
    return this.signRequest('post', '/trade/cancel', data);
  }

  // 我的委托單列表
  myOrders(data) {
    return this.signRequest('post', '/trade/myOrders', data);
  }

  // 我的信息
  myInfo(data) {
    return this.signRequest('post', '/trade/myInfo', data);
  }

  // 交易规则
  tradeRules(data) {
    return this.signRequest('get', '/trade/rules', data);
  }

  // 最新行情
  quote(data) {
    return this.signRequest('get', '/market/quote', data);
  }

  // 交易市場
  markets(data) {
    return this.signRequest('get', '/trade/markets', data);
  }
}
