import React from 'react'
import "./Home.css"
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";

function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home