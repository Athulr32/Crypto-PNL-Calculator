import { useContext, useEffect, useState } from 'react';
import DataContext from '../context/data-context';
import './TradeDetails.css'
import AllTrades from './AllTrades';


function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }

function TradeDetails(props){

    const [allTrade,setAllTrade]= useState([])
    const ctx = useContext(DataContext);
    let profitedTrade=Math.round((ctx.winRate/100)*ctx.noOftrade);
    let lossTrade=Math.round(ctx.noOftrade - profitedTrade);
    let profitedArray;
    let lossArray;

        //To generate Random trades depends upon the winrate
    useEffect(()=>{
            if(profitedTrade || lossTrade){
                profitedArray = new Array(profitedTrade).fill('profit');
                lossArray = new Array(lossTrade).fill('loss')
               setAllTrade([...profitedArray,...lossArray])
  
            }
    },[profitedTrade,lossTrade])


    //To shuffle the array to randomise the trade
    if(allTrade.length >0){
        shuffle(allTrade); 
    }


    return(
        <>  
            <main className="container-trade">
                <AllTrades  trades={allTrade}></AllTrades>
            </main>
        </>
    );

}

export default TradeDetails;