export default function Dialog(props) {
  return (
    <div
      style={
        props.color
          ? { backgroundColor: props.color }
          : { backgroundColor: "orange" }
      }
    >
      {typeof props.title === "string" ? <h1>{props.title}</h1> : props.title}
      <p>{props.message}</p>
      {typeof props.color === "undefined"
        ? alert("색상 값이 안들어 왔습니다")
        : ""}
      {props.children}
    </div>
  );
}
