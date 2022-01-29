import { useContext } from 'react';
import DataContext from '../context/data-context';
import './PNLDetails.css'


function    PNLDetails(props){
    const ctx = useContext(DataContext)
    let wins = Math.round((ctx.winRate/100)*ctx.noOftrade)
  
    let wonUSD = parseFloat(props.totalProfit).toFixed(2)
    let lostUSD =parseFloat(props.totalLoss).toFixed(2)
    let totalFeePaid = parseFloat(props.totalFee).toFixed(2)
    let newBalance = parseFloat(wonUSD - lostUSD - totalFeePaid).toFixed(2);
    console.log(newBalance);
    return(
        <>
            <h3 className='pnl-title'>PNL Details</h3>
           <div className="pnl-details">
                <div className="details">
                    <div>Trades</div>
                    <div>{ctx.noOftrade}</div>
                </div>
                <div className="details">
                    <div>Winrate</div>
                    <div>{ctx.winRate}</div>
                </div>
                <div className="details">
                    <div>Wins</div>
                    <div>{Math.round(wins)}</div>
                </div>
                <div className="details">
                    <div>Losses</div>
                    <div>{ctx.noOftrade - wins}</div>
                </div>
                <div className="details">
                    <div>Won (USD)</div>
                    <div>{wonUSD}</div>
                </div>
                <div className="details">
                    <div>Lost (LOST)</div>
                    <div>{lostUSD}</div>
                </div>
                <div className="details">
                    <div>Fees Paid</div>
                    <div>{totalFeePaid}</div>
                </div>
                <div className="details">
                    <div>Net Profit</div>
                    <div>{newBalance}</div>
                </div>
            </div>
        </>
     
    )
}

export default PNLDetails;