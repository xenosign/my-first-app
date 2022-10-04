export default function Dialog(props) {
  return (
    <div style={{ backgroundColor: props.color }}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      {props.children}
    </div>
  );
}
