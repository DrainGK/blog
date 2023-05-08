import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/singlepost/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/setting" element={user ? <Setting /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
