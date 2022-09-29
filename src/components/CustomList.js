function CustomList(props) {
    return (
        <ul>
            {props.arr.map((el) => {
                return (
                    <div>
                        <li>{el.name}</li>
                        <li>{el.age}</li>
                        <li>{el.nickNAme}</li>
                    </div>
                )
            })}
        </ul>
    )
}

export default CustomList;