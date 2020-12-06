import React, {useState, useEffect } from 'react';

function ClickerButton({}){
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        document.title = `${count} is the running count`
    })

    return (
        <div>
            <button addCount={setCount(count + 1)}/>
        </div>
    );
}
export default ClickerButton