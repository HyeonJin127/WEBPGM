import { useState } from "react";

const Area = () => {
    const [size, setSize] = useState({ width: 100, height: 100 });

    return (
        <div>
            <h1>너비 : {size.width}, 높이 : {size.height} (제한 : 0 부터 150)</h1>
            <button onClick={() => {
                const copy = {...size};
                if(copy.width < 150){
                    copy.width += 10;
                    setSize(copy);
                }
            }}
            >
                너비 증가
            </button>
            <button onClick={() => {
                const copy = {...size};
                if(copy.height < 150){
                    copy.height += 10;
                    setSize(copy);
                }
            }}
            >
                높이 증가
            </button>
            <br />
            <button onClick={() => {
                const copy = {...size};
                if(copy.width > 0){
                    copy.width -= 10;
                    setSize(copy);
                }
            }}
            >
                너비 감소
            </button>
            <button onClick={() => {
                const copy = {...size};
                if(copy.height > 0){
                    copy.height -= 10;
                    setSize(copy);
                }
            }}
            >
                높이 감소
            </button>
        </div>
    );
};

export default Area;