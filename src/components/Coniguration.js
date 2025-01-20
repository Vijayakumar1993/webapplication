import React from "react";
import { CONFIGURATION_QUESTIONS } from '../data/static.js';
import {FormComponent} from './util/FromGroup'
import CommonNavbar from "./util/NavigationBar.js";
import Footer from "./util/Footer.js";
import Panel from "./util/Panel.js";

class Configuration extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { fields: CONFIGURATION_QUESTIONS };
  }

  render() {
    return (
        <>
        <CommonNavbar />
      <div className="container-fluid center">
        {this.state.fields.map((element, index) => {
          return (
            <FormComponent 
              key={index} 
              name={element.name} 
              help={element.help} 
              id={element.type}
              type={element.type} 
              placeholder={element.placeholder} 
            />
          );
        })}
      </div>
      <Footer />
      </>
    );
  }
}

export default Configuration;