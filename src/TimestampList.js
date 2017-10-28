import React from 'react';

const TimestampList =  (props) =>  {
    return (
        <div>
                {props.timestamps.map( ts => <div>{ts.value}</div>)}
        </div>
    );
}

export default TimestampList;