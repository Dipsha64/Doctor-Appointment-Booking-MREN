import "./App.css"
// import Layout from "./layout/Layout";
import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footeer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import { isAuthenticated } from "./features/auth/authSlice";

function App() {
  const user = useSelector(isAuthenticated);
  return (
    <div>
      {Object.keys(user).length > 0 ? <Header/> : ''}
      <main className="min-h-[calc(100vh)]">
        <Outlet/>
      </main>
      <Footeer/>
    </div>
  );
}

export default App;
