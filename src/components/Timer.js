import { useEffect } from "react";

export default function Timer() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log(`타이머 실행중`)
        }, 1000);

        return (() => {
            console.log("🎈 언마운트 시에 실행")
            clearInterval(timer);
        })
    }, []);

    return (
        <>
            <h1>타이머가 실행 중입니다!</h1 >
        </>
    )
}