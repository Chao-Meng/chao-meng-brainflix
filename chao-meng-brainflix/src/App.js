import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/App.scss';
import Page from "./pages/Page/Page"
import Upload from "./pages/Upload/Upload"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page/>} />
        <Route path="/upload" element={<Upload/>}></Route>
        <Route path="/videos/:videoId" element={<Page/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
