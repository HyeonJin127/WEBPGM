import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
            <button onClick={() => setCount(0)}>
                리셋
            </button>
        </div>
    );
}