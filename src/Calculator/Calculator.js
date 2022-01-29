import './Calculator.css'
import CalculatorForm from './CalculatorForm';

function Calculator(props){

    return(
        <div className='mobileContainer'>
            <main className="container">
            <CalculatorForm getData={props.getData}></CalculatorForm>
            </main> 
        </div>
        
    )


}

export default Calculator;