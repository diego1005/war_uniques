import React from 'react'
import "./ContentWraper.css"
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function ContentWraper() {
    return (
        <div className='contentWraper'>
            <Sidebar />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default ContentWraper