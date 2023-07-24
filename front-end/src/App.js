import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Search from "./components/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/upload" element={<FileUpload/>}/>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<HomePage/>}/>
          <Route exact path="/login" element={<Login/>}/>

          <Route exact path="/search" element={<Search/>}/>  
        </Routes>
      </BrowserRouter>

      
      
    </>
  );
}

export default App;
