import { useContext, useEffect,useRef,useState,useLayoutEffect } from "react";
import DataContext from "../context/data-context";
import PNL from "../PNL/PNL";
import TradeDesc from "./TradeDesc";
import Trades from "./Trades";

function AllTrades(props){

    const ctx = useContext(DataContext)
    let capital =ctx.capital;
    let totalCapital = ctx.capital*ctx.leverage
    let id=1;
    let profit
    let loss;
    let newBalanceProfit=ctx.capital
    let newBalanceLoss=ctx.capital
    let newBalance=capital;
    let initialCapital=ctx.capital*ctx.leverage;
    let totalProfit=0;
    let totalLoss = 0;
    let totalFee=0
    let fee;

    const tradeDetails =[]
     
        for(const trade of props.trades){
            if(trade==='profit'){

                 //Checking if the totalCapital is greater than initial capital
                if(totalCapital>initialCapital){
                    //We need to trade with initial capital only
                    totalCapital=initialCapital;
                }
                //calculating fee from total capital
                    fee=(ctx.makerFee/100)*totalCapital + (ctx.takerFee/100)*totalCapital
               
                //Calculating the profit from totalCapital 
                    profit=(ctx.takeProfit/100)*totalCapital
                    
                //Updating the New Balance by adding the profit and reducing the fee
                    // newBalanceProfit=+newBalanceProfit + profit - fee
    
                //Increasing out capital whenw are profited
                    newBalance=+newBalance+profit - fee//=> this is needed to calculate overall new Balance
                    //Convert varCapital to integer
                //Increasing the total profit variable
                    totalProfit=totalProfit+profit; //=> To display in PNL section

                //Increasing the total fee variable 
                    totalFee=totalFee+fee    //=> To display in PNL section
                   
                tradeDetails.push({
                    key:id,
                    Outcome:'Win',
                    Fee:parseFloat(fee).toFixed(2),
                    PNL:parseFloat(ctx.takeProfit).toFixed(2),
                    PNLUSD:parseFloat(profit).toFixed(2),
                    newBalance:parseFloat(newBalance).toFixed(2)
                })
                id++;
                
            }
            else{

                //Calculating the fee from Total Capital
                fee=(ctx.makerFee/100)*totalCapital + (ctx.takerFee/100)*totalCapital;

                //Calcualting the loss from total Capital
               loss=(ctx.stopLoss/100)*totalCapital

                //Decreasing our new Balance from the loss
                newBalance = +newBalance- loss - fee;  //Convert it to integer

                if(newBalance<capital){
                    totalCapital = newBalance * ctx.leverage
                }
               
                // newBalanceLoss = varCapital
                // newBalanceProfit=varCapital
                //Calcualting the overall loss occured
                totalLoss=totalLoss+loss;

                //Caculating the overall Fees
                totalFee=totalFee+fee
                
                tradeDetails.push(
                    {
                    key:id,
                    Outcome:'Loss',
                    Fee:parseFloat(fee).toFixed(2),
                    PNL:parseFloat(ctx.stopLoss).toFixed(2), 
                    PNLUSD:parseFloat(loss).toFixed(2),
                    newBalance:parseFloat(newBalance).toFixed(2)
                })
                id++
            }
        }
        
    //props.trades = all profit and loss trades
    return(
        <>
            <div style={{display:'flex',flexDirection:'column-reverse'}}>
                <div>
               
                <TradeDesc></TradeDesc>
            {tradeDetails.map(trade=>{

                 return <Trades key={trade.key} trade={trade} ></Trades>
            })}
                </div>

                <PNL totalFee={totalFee} totalProfit={totalProfit} totalLoss={totalLoss}></PNL>
            </div>
           
        </>
    );

}

export default AllTrades;