# README

![./images/JavaScript_Access_To_Dobi.png](./images/JavaScript_Access_To_Dobi.png)

## 参考文档

https://api.dobitrade.com/#api_block

## 使用方法

```
cupLab_Dobi = new CupLab_Dobi("your accessKey", "your secret");
console.log(CupLab_Dobi.markets());
console.log(CupLab_Dobi.myInfo());
console.log(CupLab_Dobi.myOrders("mcc_btc"));
console.log(CupLab_Dobi.quote("mcc_btc"));
console.log(CupLab_Dobi.rules("mcc_btc"));
console.log(CupLab_Dobi.order("mcc_btc", "buy", "0.032", "0.02"));
console.log(CupLab_Dobi.order("mcc_btc", "sell", "0.032", "0.02"));
console.log(CupLab_Dobi.order("mcc_btc", "buy", "0.032", "50"));
console.log(CupLab_Dobi.order("mcc_btc", "sell", "0.032", "50"));
console.log(CupLab_Dobi.cancel("mcc_btc", "1649"));
```
