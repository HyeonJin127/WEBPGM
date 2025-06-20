import React, {useState, useEffect} from "react";

function Counter3(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title=`You clicked ${count} times`;
    });

    return (
        <div>
            <p>
                총 {count}번 클릭했습니다.
            </p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    )
}

export default Counter3;