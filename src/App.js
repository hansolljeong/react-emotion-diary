import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import MyHeader from "./pages/MyHeader";
import MyButton from "./pages/MyButton";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"Test Header"}
          leftChild={<MyButton text={"left"} />}
          rightChild={<MyButton text={"right"} type={"positive"} />}
        />
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
