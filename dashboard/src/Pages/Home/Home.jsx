import React from 'react'
import "./Home.css"
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import Table from "../../Components/Main/SecondarySection/Table/Table"
import Footer from "../../Components/Footer/Footer";

function Home(props) {
    return (
        <div className={props.content === undefined ? "home" : "home home-table"}>
            <Sidebar />
            {
                props.content !== undefined &&
                props.content === "products" &&
                <div className="container">
                    <Header />
                    <Table />
                    <Footer />
                </div>
            }
            {
                props.content !== undefined &&
                props.content === "users" &&
                <div className="container">
                    <Header />
                    <Table />
                    <Footer />
                </div>
            }
            {
                props.content === undefined &&
                <div className="container">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            }
        </div>
    )
}

export default Home