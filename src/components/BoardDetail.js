import { useParams } from "react-router-dom"
import Header from "./Header";

export default function BoardDetail() {
    const { boardID } = useParams();
    return (
        <>
            <Header />
            <h2>{boardID} 번 게시글 내용입니다!</h2>
        </>
    )
}
