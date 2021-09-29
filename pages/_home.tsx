import React from "react";
import Header from "../components/header";
import AboutUs from "../components/about-us";
import Footer from "../components/footer";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <AboutUs />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;