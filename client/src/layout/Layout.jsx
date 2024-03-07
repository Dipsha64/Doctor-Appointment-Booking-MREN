import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Router from "../components/routes/Router";
import "../layout/Layout.css";

function Layout() {
    return ( 
        <>
        <Header/>
        <main>
            <Router/>
        </main>
        <Footer/>
        </>
    );
}

export default Layout;