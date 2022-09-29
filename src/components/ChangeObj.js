import React, { useState } from "react";

export default function ChangeObj(props) {
    // state 초기값 설정
    const [index, changeIndex] = useState(0);

    // objArr 이라는 키 이름으로 전달 된 배열에 담긴 객체를 전달 받음
    // 해당 배열의 값에 접근하기 위해 index 를 이용하여 배열의 오브젝트에 접근
    let obj = props.objArr[index];

    // 버튼 클릭 시, 각각의 오브젝트로 이동 할 수 있도록 index 의 값을 변경
    // index 가 변경되면 index 는 state 이므로 랜더링이 다시 발생합니다
    const onChange = () => {
        if (index === props.objArr.length - 1) {
            changeIndex(0);
        } else {
            changeIndex(index + 1);
        }
        obj = props.objArr[index];
    }

    return (
        <div>
            <h1>이름 : {obj.name}</h1>
            <h1>나이 : {obj.age}</h1>
            <h1>별명 : {obj.nickName}</h1>
            <button onClick={onChange}>프로필 변경하기</button>
        </div>

    )
}