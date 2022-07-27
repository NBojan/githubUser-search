import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Dashboard, Login, Error, PrivateRoute} from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
