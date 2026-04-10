import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './component/Login';
import Dashboard from './component/Dashboard';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/" element={<Dashboard></Dashboard>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
