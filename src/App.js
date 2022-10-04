import "./App.css";
import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassState from "./components/ClassState";
import FuntionalState from "./components/FuntionalState";
import ClickBtn from "./components/ClickBtn";
import Counter from "./components/Counter";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ChangeObj from "./components/ChangeObj";
import TestCss from "./components/TestCss";
import TestStyled from "./components/TestStyled";
import ClassProps from "./components/ClassProps";
import ConditionalRender from "./components/ConditionalRender";
import TestRef from "./components/TestRef";
import ChangeFocus from "./components/ChangeFocus";
import PracticeOne from "./components/PracticeOne";
import PracticeTwo from "./components/PracticeTwo";
import TestUseEffect from "./components/TestUseEffect";
import Timer from "./components/Timer";
import { useEffect, useRef, useState } from "react";
import Comparing from "./components/Comparing";
import PracticeTimer from "./components/PracticeTimer";
import ReactFragment from "./components/ReactFragment";
import TableColumn from "./components/TableColumn";
import Dialog from "./components/Dialog";
import WelcomeDialog from "./components/WelcomeDialog";
import FancyBorder from "./components/FancyBorder";
import SignUpDialog from "./components/SignUpDialog";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Board from "./components/Board";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import BoardDetail from "./components/BoardDetail";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="profile" element={<Profile />} />
        <Route path="board" element={<Board />} />
        <Route path="board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
