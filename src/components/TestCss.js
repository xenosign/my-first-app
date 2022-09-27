const divStyle = {
    backgroundColor: "orange"
}

const headingStyle = {
    color: "blue"
}

const spanStyle = {
    backgroundColor: "pink",
    fontWeight: "700"
}

export default function TestCss() {
    return (
        <div className="component-root" style={divStyle}>
            <h1 style={headingStyle}>CSS 테스트 컴포넌트 입니다</h1>
            <span style={spanStyle}>해당 컴포넌트를 기본 CSS로 꾸며 보아요!</span>
        </div>
    )
}