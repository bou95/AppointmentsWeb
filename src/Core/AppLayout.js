import React from "react";
import AppRoutes from "./AppRoutes";
import NavHeader from "../Views/NavHeader";
import Footer from "../Views/Footer";

class AppLayout extends React.Component {

    render() {
        return (
            <div>
                <NavHeader/>
                <AppRoutes/>
                <Footer/>
            </div>
        );
    }
}

export default AppLayout;
