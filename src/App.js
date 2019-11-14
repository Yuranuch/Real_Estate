import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {connect} from "react-redux";
import Navigation from "./components/Navigation/Navigation";

function App(props) {
    return (
        <div className="main_wrap">
            <Header headerPhone={props.headerPhone}/>
            <Navigation/>

        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        headerPhone: state.headerPhone,
    }
}

export default connect (mapStateToProps, null)(App)
