import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedComponent from "./componenets/SharedComponent";
import Home from "./componenets/Home/Home";
import Driver from "./componenets/Driver/Driver";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route index element={<Home />} />
          <Route path="/driver_view" element={<Driver />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
