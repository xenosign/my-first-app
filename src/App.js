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

import { useState } from "react";


function App() {

  const [condition, setCondition] = useState("1번");
  const onChange = () => {
    condition === "1번" ? setCondition("2번") : setCondition("1번");
  }


  return (
    <div className="App">
      {condition === "1번" ? <PracticeOne text={condition} /> : <PracticeTwo text={condition} />}
      <button onClick={onChange}>{condition}</button>
    </div>
  );
}

export default App;
