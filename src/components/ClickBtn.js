import React, { useState } from 'react';

function ClickBtn() {
    const [isClick, setClickState] = useState(true);
    const text = isClick ? "클릭해 주세요" : "다시 클릭해 주세요";
    return (
        <button onClick={() => setClickState(!isClick)}>
            {text}
        </button>
    );
}

export default ClickBtn;