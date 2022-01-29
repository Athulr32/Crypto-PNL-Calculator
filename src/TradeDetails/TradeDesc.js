import './TradeDesc.css'

function TradeDesc(){

    return(
        <>
            <div className="trade-title">Trades</div>
         <div className="trade-nav">
            <div>Trade</div>
            <div className='outcome'>Outcome</div>
            <div>Total Fee</div>
            <div className='pnlperc'>PNL %</div>
            <div className='PLUSD-mob'>PL USD</div>
            <div className='PLUSD-lap'>Profit/Loss USD</div>
            <div className='newBalance'> New Balance</div>
        </div>
        
        </>
       
    );
}

export default TradeDesc