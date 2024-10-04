import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import List from "./pages/List";
import Layout from "./layouts/Layout";
import "./global module.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/list" element={<List />}></Route>
          {/* 초기 작업 확인용 */}
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
