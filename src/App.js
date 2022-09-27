import './App.css';
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassState from './components/ClassState';
import FuntionalState from './components/FuntionalState';
import ClickBtn from './components/ClickBtn';

function App() {
  return (
    <div className="App">
      <ClassState />
      <FuntionalState />
      <ClickBtn />
      {/* <MainHeader />
      <ImgComponent />
      <br />
      <BtnToNaver /> */}
    </div>
  );
}

export default App;
