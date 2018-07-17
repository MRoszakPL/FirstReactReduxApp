import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data) {
        return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
        <Sparklines width={120} height={180} data={props.data} >
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type={'mean'}/>
        </Sparklines>
        <p>{average(props.data)} {props.units}</p>
        </div>
    );
}