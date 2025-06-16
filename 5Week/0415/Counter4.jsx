import React, { useState, useEffect } from "react";

function Counter4() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`카운트 값이 변경 됨: ${count}`);
    }, [count]);

    return (
        <div>
            <h1>카운트: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                증가
            </button>
        </div>
    );
}

export default Counter4;