import React, { Component } from "react";

import Layout from './hoc/Layout/Layout';
import CatadorRoller from "./containers/CatadorRoller/CatadorRoller";
import Main from "./components/Authenticate/Main";
import NotFound from "./components/Authenticate/NotFound";
import Callback from "./components/Authenticate/Callback";
import Secret from "./components/Authenticate/Secret";

class App extends Component {
  render() {

    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? 
        
        <div>
          <div>
            <Secret {...this.props} />
          </div> 
          <div>
          <Layout>
            <CatadorRoller />
          </Layout>
        </div>
      </div>
          
        : <NotFound />;
        break;
      case "callback":
        mainComponent = <Callback />
        break;
      default:
        mainComponent = <NotFound />  
    }

    return (
      <div>
        {mainComponent}
      </div>
    );
  }
}

  export default App;
