import { useEffect, useRef, useState } from "react";

export default function PracticeTimer() {
    const [render, reRender] = useState(0);
    const time = useRef(0);

    useEffect(() => {
        const timer = setInterval(() => {
            time.current = time.current + 1;
            console.log(time.current);
        }, 1000);

        return (() => {
            clearInterval(timer);
        })
    }, [])

    const showTime = () => {
        reRender(render + 1);
    }

    return (
        <>
            <h1>{time.current}</h1>
            <button onClick={showTime}>시간</button>
        </>
    )
}