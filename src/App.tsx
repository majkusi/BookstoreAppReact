import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Layout from "./layout/layout.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

function App() {
    return (
        <Router>
            <div>
                <Layout>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/About" element={<About/>}/>
                            <Route path="/Contact" element={<Contact/>}/>
                            <Route path="/Login" element={<Login/>}/>
                            <Route path="/Register" element={<Register/>}/>
                        </Routes>
                    </div>
                </Layout>
            </div>
        </Router>
    )
}

export default App;

