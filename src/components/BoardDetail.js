import { useLocation, useParams } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";

export default function BoardDetail() {
  const { boardID } = useParams();
  const location = useLocation();
  const articleList = [1, 2];

  if (articleList.find((el) => el === parseInt(boardID))) {
    return (
      <>
        <Header />
        <h2>{boardID} 번 게시글 내용입니다!</h2>
        <p>쿼리: {location.search}</p>
        <p>주소: {location.pathname}</p>
        <p>해쉬: {location.hash}</p>
      </>
    );
  } else {
    return (
      <>
        <NotFound />
      </>
    )
  }
}
