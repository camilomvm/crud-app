import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/protected-routes";
import FormRequest from "./components/form-request";
import FormEmployee from "./components/form-employee";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute isPublic={true} />}>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route element={<ProtectedRoute isPublic={false} />}>
            <Route exact path="/home" element={<Home />}>
              <Route exact path="register-employee" element={<FormEmployee/>} />
              <Route exact path="register-request" element={<FormRequest/>} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
