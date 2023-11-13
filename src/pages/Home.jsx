import React from 'react'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <>
            <Header />
                <div className="homeContent">
                    <h2>Hi from home</h2>
                </div>
            <Footer />
        </>
    )
}
export default Home
