//import { Tab } from "bootstrap";
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import ProgressBar from "./components/ProgressBar";
import Table from "./components/Table";
import Last_hour from './NavBar/Last_hour';
import Today from './NavBar/Today';
import Yesterday from './NavBar/Yesterday';

 class Headers extends Component {
  render() {

    <div className="content">
             <Route path="Last_hour" component={Last_hour}/>
           <Route path="/Today" component={Today}/>
          <Route path="/Yesterday" component={Yesterday}/>
         <NavLink to="/" />
       </div>
    return (
     
     <HashRouter>

        <div>
        <div className="nav justify-content-center">
        <div className="shadow p-3 mb-5 bg-body rounded">
        <h4 className='text-left'>Main Metric</h4>
        <div className="card text-center w-30">        
      <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
     
        <a className="nav-link " href="#">Last hour</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Today</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#" >Yesterday</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Last 3 days</a>
      </li>
    </ul>
  </div> 

  <div className="card-body">
    
     <ProgressBar/> 
    <Table />

  </div>
</div>
</div>
</div>
</HashRouter>
    );
  }
}
 
export default Headers;

