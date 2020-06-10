import React from 'react';
import './CreateTicket.css';
import BaseCreateTable from './BaseCreateTable';
import CurrencyRateChart from './CurrencyRateChart';

const CreateTicket = (props) => {
    return(
        <div>
            <div>
                <h4>Get currency rate</h4>
                <div><BaseCreateTable currencies = {props.currencies}
                                      getCurrencyDynamic = {props.getCurrencyDynamic}/></div>
            </div>
            <div>
                <div><CurrencyRateChart rateDynamicData = {props.rateDynamicData}/></div>
            </div>
        </div>
    )
}

export default CreateTicket;