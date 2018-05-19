dobi = new CupLab.Dobi("your accessKey", "your secret");
console.log(dobi.markets());
console.log(dobi.myInfo());
console.log(dobi.myOrders("mcc_btc"));
console.log(dobi.quote("mcc_btc"));
console.log(dobi.rules("mcc_btc"));
console.log(dobi.order("mcc_btc", "buy", "0.032", "0.02"));
console.log(dobi.order("mcc_btc", "sell", "0.032", "0.02"));
console.log(dobi.order("mcc_btc", "buy", "0.032", "50"));
console.log(dobi.order("mcc_btc", "sell", "0.032", "50"));
console.log(dobi.cancel("mcc_btc", "649"));

coinbene = new CupLab.Coinbene("your accessKey", "your secret");
console.log(coinbene.ticker('ziberusdt'))
console.log(coinbene.orderbook('ziberusdt'))
console.log(coinbene.trades('ziberusdt'))
console.log(coinbene.balance())
console.log(coinbene.place("ziberusdt", "sell-limit", "1.00000000", "2.0000"))
console.log(coinbene.ordersinfo("ziberusdt"))

