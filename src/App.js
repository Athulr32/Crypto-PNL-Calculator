
import { useState } from 'react';
import Calculator from './Calculator/Calculator';
import DataContext from './context/data-context';
import Title from './Title/Title';
import TradeDetails from './TradeDetails/TradeDetails';

function App() {

  const [data,setData]=useState({ noOftrade:0,
    capital:0,
    winRate:0,
    leverage:0,
    takeProfit:0,
    stopLoss:0,
    makerFee:0,
    takerFee:0})

 
  function dataFromUser(data,exchangeValue){
      setData({...data,...exchangeValue})
  }



  return (
    <DataContext.Provider value={
      {
        noOftrade:data.noOftrade,
        capital:data.capital,
        winRate:data.winRate,
        leverage:data.leverage,
        takeProfit:data.takeProfit,
        stopLoss:data.stopLoss,
        makerFee:+data.makerFee,
        takerFee:+data.takerFee
      }
    }>
      {console.log("Test")}
      <Title></Title>
      <Calculator getData={dataFromUser}></Calculator>
      <TradeDetails></TradeDetails>
    </DataContext.Provider>

   
  );
}

export default App;
