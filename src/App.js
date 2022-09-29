import './App.css';
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassState from './components/ClassState';
import FuntionalState from './components/FuntionalState';
import ClickBtn from './components/ClickBtn';
import Counter from './components/Counter';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import ChangeObj from './components/ChangeObj';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import ClassProps from './components/ClassProps';
import ConditionalRender from './components/ConditionalRender';
import TestRef from './components/TestRef';
import ChangeFocus from './components/ChangeFocus';
import PracticeOne from './components/PracticeOne';
import PracticeTwo from './components/PracticeTwo';
import TestUseEffect from './components/TestUseEffect';
import Timer from './components/Timer';
import { useEffect, useRef, useState } from 'react';
import Comparing from './components/Comparing';
import PracticeTimer from './components/PracticeTimer';

function App() {
  const [show, setShow] = useState(false);
  const btnFocus = useRef();

  useEffect(() => {
    btnFocus.current.focus();
  }, []);

  return (
    <div className="App">
      {show && <PracticeTimer />}
      <button ref={btnFocus} onClick={function () { setShow(!show) }}>{show ? "숨기기" : "보이기"}</button>
    </div >
  );
}

export default App;
