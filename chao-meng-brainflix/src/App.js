import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Page from "./pages/Page/Page";
import Upload from "./pages/Upload/Upload";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page />} />
        <Route path="/videos/upload" element={<Upload />}></Route>
        <Route path="/videos/:videoId" element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
