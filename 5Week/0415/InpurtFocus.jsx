import { useRef, useEffect } from "react";

function InputFocus() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRefcurrunt.focus();
    }, []);

    return <input ref={inputRef} type="text" />;
}

export default InputFocus;