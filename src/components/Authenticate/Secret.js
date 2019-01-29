/* eslint no-restricted-globals: 0 */
import React, { Component } from "react";

export default class Secret extends Component {
    
    render() {
        
        return(
                <div>
                    <button onClick={logoutButton}>Logout</button>
                    
                </div>
        )
    }
}

function logoutButton() {
    localStorage.clear();
    window.location.href = '/';
};
