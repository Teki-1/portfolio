import { BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Routes index element={<Home />} />
          <Routes path="*" element={<NotFound />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
