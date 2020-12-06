import React, {useState, useEffect } from 'react';
import ClickerButton from '../ClickerButton/ClickerButton'

function ClickerCard(){
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        document.title = `${count} is the running count`
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <ClickerButton addCount={setCount(count + 1)}/>
        </div>
    );
}
export default ClickerCard