import "./App.css"
// import Layout from "./layout/Layout";
import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footeer from "./components/Footer/Footer";

function App() {
  return (
    <div>
       <Header/>
      <main>
        <Outlet/>
      </main>
      <Footeer/>
    </div>
  );
}

export default App;
