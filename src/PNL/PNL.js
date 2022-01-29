import PNLDetails from "./PNLDetails";
import './PNL.css'


function PNL(props){

    
    return(
        <>
        <main className="container-pnl">
            <PNLDetails totalFee={props.totalFee} totalProfit={props.totalProfit} totalLoss={props.totalLoss}></PNLDetails>
        </main>
        </>
    );

}

export default PNL;