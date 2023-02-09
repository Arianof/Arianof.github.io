import { BrowserRouter, Routes, Route } from "react-router-dom";
import RateForm from "./components/rateForm";
import Submit from "./components/Submit";
function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RateForm/>}/>
            <Route path="submitted" element={<Submit/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
