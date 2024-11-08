import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedComponent from "./componenets/SharedComponent";
import Home from "./componenets/Home/Home";
import Driver from "./componenets/Driver/Driver";
import Bus_view from "./componenets/Bus/Bus";
import Trip_all from "./componenets/Trip/Trip";
import Distance from "./componenets/Distance/Distance";
import Efficiency from "./componenets/Efficiency/Efficiency";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route index element={<Home />} />
          <Route path="/driver_view" element={<Driver />} />
          <Route path="/bus_view" element={<Bus_view />} />
          <Route path="/trip_view" element={<Trip_all />} />
          <Route path="/total_distance" element={<Distance />} />
          <Route path="/efficiency" element={<Efficiency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
