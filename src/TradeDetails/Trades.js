
import './Trades.css'

function Trades(props){

    let outcome=props.trade.Outcome;
    console.log(outcome);
    return(
    
        <div className="trades">
            <div>{props.trade.key}</div>
            <div className={`trade-outcome ${outcome==='Win'?'green':'red'}`}>{props.trade.Outcome}</div>
            <div className={'red'}>{"-"+props.trade.Fee}</div>
            <div className={outcome==='Win'?'green':'red'}>{outcome==='Win'?"+"+props.trade.PNL:"-"+props.trade.PNL}</div>
            <div className={outcome==='Win'?'green':'red'}>{outcome==='Win'?"+"+props.trade.PNLUSD:"-"+props.trade.PNLUSD}</div>
            <div className={outcome==='Win'?'green':'red'}>{props.trade.newBalance}</div>
        </div>
    );
}

export default Trades