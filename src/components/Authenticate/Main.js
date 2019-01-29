import React, { Component } from "react";
import classes from "./Auth.css"


export default class Main extends Component {
    render(){
        return(
            <div>
                <div className={classes.AppIntro}>
                    <p className="App-intro" >
                        Welcome {this.props.name}! To get started, login. <a href="secret#/">Click here</a>
                    </p>
                </div>
                {!this.props.auth.isAuthenticated() &&
                <div className={classes.LoginButton}>
                    <hr/>
                        Please login first
                    <hr/>
                    <button onClick={this.props.auth.login}>login</button>
                </div>
                }
            </div>
        )
    }
}