import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import MyHeader from "./pages/MyHeader";
import MyButton from "./pages/MyButton";
import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [isLogin, isSetLogin] = useState(false);

  useEffect(() => {
    console.log("마운트됬을때", isLogin);
    return () => {
      console.log("컴포넌트 언마운트");
    };
  });

  const handleClick = () => {
    isSetLogin(!isLogin);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"Test Header"}
          leftChild={<MyButton text={"left"} />}
          rightChild={<MyButton text={"right"} type={"positive"} />}
        />
        <button onClick={handleClick}>A버튼</button>
        {!isLogin && <Child />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

const Child = () => {
  return <div>자식 영역</div>;
};
