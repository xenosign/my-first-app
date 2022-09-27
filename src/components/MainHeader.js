import React from "react";

function MainHeader({ userID, text, href }) {
    return (
        <div>
            <h1>{userID} 님 반값습니다.</h1>
            <a href={href}>{text}</a>
        </div>

    )
}

export default MainHeader;