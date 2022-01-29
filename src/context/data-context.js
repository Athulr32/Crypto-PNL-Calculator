import React from "react";

const DataContext=React.createContext({
    noOftrade:null,
    capital:null,
    winRate:null,
    leverage:null,
    takeProfit:0,
    stopLoss:0,
    makerFee:0,
    takerFee:0
})

export default DataContext;