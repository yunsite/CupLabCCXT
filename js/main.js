cupLab_Dobi = new CupLab_Dobi("your accessKey", "your secret");
console.log(cupLab_Dobi.markets());
console.log(cupLab_Dobi.myInfo());
console.log(cupLab_Dobi.myOrders("mcc_btc"));
console.log(cupLab_Dobi.quote("mcc_btc"));
console.log(cupLab_Dobi.rules("mcc_btc"));
console.log(cupLab_Dobi.order("mcc_btc", "buy", "0.032", "0.02"));
console.log(cupLab_Dobi.order("mcc_btc", "sell", "0.032", "0.02"));
console.log(cupLab_Dobi.order("mcc_btc", "buy", "0.032", "50"));
console.log(cupLab_Dobi.order("mcc_btc", "sell", "0.032", "50"));
console.log(cupLab_Dobi.cancel("mcc_btc", "1649"));
