import React from 'react';
import { format } from "date-fns";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, } from "recharts";

const CurrencyRateChart = (props) => {

    let formatXAxis = (tickItem) => {
        let converted = format(new Date(tickItem), 'dd/MM/yyyy');
        return converted;
    }

    if(props.rateDynamicData.rateShortDtos !== undefined) {
        const data = props.rateDynamicData.rateShortDtos;
        return(
            <div>
                <h4>Chart of {props.rateDynamicData.currencyName} ({props.rateDynamicData.abbreviation}) rate dynamics</h4>
                <LineChart width={800} height={400} data={data}
                           margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
                    <CartesianGrid strokeDasharray = "3 3"/>
                    <XAxis type='category' tickFormatter={formatXAxis} dataKey='date' domain={['auto', 'auto']}/>
                    <YAxis type="number" label = {`${props.rateDynamicData.scale} ${props.rateDynamicData.abbreviation}`} domain={['auto', 'auto']}/>
                    <Line type="monotone" dataKey='rate' stroke="#ffffff" />
                </LineChart>
            </div>
        )
    } else return(
        <div/>
    )
}

export default CurrencyRateChart;