import React, { FC } from 'react';

interface SentimentProps {
  polarity: number;
  sentence: string;
}
const Polarity: FC<SentimentProps> = (props: SentimentProps) => {
    const green = Math.round((props.polarity + 1) * 128);
    const red = 255 - green;
    
    const textColor = {
        backgroundColor: 'rgb(' + red + ', ' + green + ', 0)',
        padding: '15px'
    };

    return (
        <div style={textColor}>"{props.sentence}" has polarity of {props.polarity} </div>
    )
}

export default Polarity;
