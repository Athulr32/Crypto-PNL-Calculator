
import React,{useState} from 'react'
import Button from './Button';
import './CalculatorForm.css'

function CalculatorForm(props){

    const [userInput,setUserInput]=useState({
        noOftrade:0,
        capital:0,
        winRate:0,
        leverage:0,
        takeProfit:0,
        stopLoss:0,
    });

    const [exchangeValue,setExchangeValue] = useState({
        makerFee:0.1,
        takerFee:0.1
    });

    const tradeInputHandler=function(event){
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                noOftrade:event.target.value
            }
        })
    }

    const capitalInputHandler=function(event){
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                capital:event.target.value
            }
        })
    }

    const winRateInputHandler=function(event){
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                winRate:event.target.value
            }
        })
    }

    const leverageInputHandler=function(event){
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                leverage:event.target.value
            }
        })
    }


    const takeProfitInputHandler=function(event){
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                takeProfit:event.target.value
            }
        })
    }

    const stopLossInputHandler=function(event){
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                stopLoss:event.target.value
            }
        })
    }

    const exchanges=[
        {
        name:'Binance',
        makerFee:0.1,
        takerFee:0.1
        },

        {
        name:'ByBit',
        makerFee:-0.025,
        takerFee:0.075
        },

         {
        name:'Huobi',
        makerFee:0.1,
        takerFee:0.1
        }
    ]

    const exchangeInputHandler = function(event){
            for(const exchange of exchanges){
                if(event.target.value === exchange.name){
                    setExchangeValue({
                        makerFee:exchange.makerFee,
                        takerFee:exchange.takerFee
                    })
                }
            }
            
    }

  
    const submitInputForm = function(e){
        e.preventDefault();
        if(userInput.noOftrade && userInput.capital && userInput.winRate && userInput.leverage && userInput.takeProfit 
            && userInput.stopLoss){
            props.getData(userInput,exchangeValue)
        }
        else{
            alert("Enter all fields")
        }
    }

    return(
        <div className='settings-list'>
            <h3 className='calc-heading'>Strategy</h3>
            <form onSubmit={submitInputForm}>
                <div className="form-elements">
                    <label>Number of trades</label>
                    <input onChange={tradeInputHandler} type="number"/>
                </div>
                <div className="form-elements">
                    <label>Capital</label>
                    <input onChange={capitalInputHandler} type="number"/>
                </div>
                <div className="form-elements">
                    <label>Win rate %</label>
                    <input onChange={winRateInputHandler} type="number"/>
                </div>
                <div className="form-elements">
                    <label>Leverage</label>
                    <input onChange={leverageInputHandler} type="number"/>
                </div>
                <div className="form-elements">
                    <label>Take Profit %</label>
                    <input onChange={takeProfitInputHandler} type="number"/>
                </div>
                <div className="form-elements">
                    <label>Stop loss %</label>
                    <input onChange={stopLossInputHandler} type="number"/>
                </div>

            <div className="exchange">       
                <div className="form-elements-exchange">
                    <label>Exchange</label>
                    <select onChange={exchangeInputHandler}>
                        <option>Binance</option>
                        <option>ByBit</option>
                        <option>Huobi</option>
                    </select>
                </div>
               
            </div>
            <div className="fee">
                <div className="form-elements-fee">
                    <label>Maker Fee</label>
                    <input readOnly value={exchangeValue.makerFee} type="number"/>
                </div>
                <div className="form-elements-fee">
                    <label>Taker fee</label>
                    <input readOnly value={exchangeValue.takerFee} type="number"/>
                </div>
            </div>
             <div className="calculate-button">
                 <Button>Calculate</Button>
             </div>
            </form>
        </div>
    )

}

export default CalculatorForm