import React from 'react';
import numeral from 'numeral'
const CurrencyFormat = ({amount}) => {
    const formatedAccount=numeral(amount).format('$0,0.00')
    return (
        <div>
           {formatedAccount} 
        </div>
    );
}

export default CurrencyFormat;
