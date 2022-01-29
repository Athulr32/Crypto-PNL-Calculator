import React from 'react'
import './Title.css'

function Title(){

    return(
        <header>
            <div className='title'>
                <div className='crypto'>Crypto</div>
                <div className='crypto-trading'>Trading</div>
                <div className='pnl'>PNL</div>
                <div className='calc'>Calculator</div>
            </div>
        </header>
    )

}

export default Title;