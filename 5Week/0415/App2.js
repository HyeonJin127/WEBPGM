import React, { useState, useMemo } from "react";

function App2() {
    const [name, setName] = useState("react");
    const [count, setCount] = useState(0);

    const user = useMemo(() => {
        return {name};
    }, [name]);

    return (
        <div>
            <h1>useMemo로 객체 메모이제이션</h1>
            <button onClick={() => setCount(count + 1)}>클릭: {count}</button>
            <h2>사용자: {user.name}</h2>
        </div>
    );
}

export default App2;