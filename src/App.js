import React, { Component } from 'react';
import logo from './logo.svg';
import 'gentelella';


import 'gentelella/vendors/bootstrap/dist/css/bootstrap.min.css';
import 'gentelella/vendors/font-awesome/css/font-awesome.min.css';
import 'gentelella/vendors/nprogress/nprogress.css';
import 'gentelella/vendors/iCheck/skins/flat/green.css';
import 'gentelella/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css';
import 'gentelella/vendors/jqvmap/dist/jqvmap.min.css';
import 'gentelella/vendors/bootstrap-daterangepicker/daterangepicker.css';
//import 'gentelella/build/css/custom.min.css';


import 'gentelella/vendors/jquery/dist/jquery.min.js';
import 'gentelella/vendors/bootstrap/dist/js/bootstrap.min.js';
import 'gentelella/vendors/fastclick/lib/fastclick.js';
import 'gentelella/vendors/nprogress/nprogress.js';
import 'gentelella/vendors/Chart.js/dist/Chart.min.js';
import 'gentelella/vendors/gauge.js/dist/gauge.min.js';
import 'gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js';
import 'gentelella/vendors/iCheck/icheck.min.js';
import 'gentelella/vendors/skycons/skycons.js';
import 'gentelella/vendors/Flot/jquery.flot.js';
import 'gentelella/vendors/Flot/jquery.flot.pie.js';
import 'gentelella/vendors/Flot/jquery.flot.time.js';
import 'gentelella/vendors/Flot/jquery.flot.stack.js';
import 'gentelella/vendors/Flot/jquery.flot.resize.js';
import 'gentelella/vendors/flot.orderbars/js/jquery.flot.orderBars.js';
import 'gentelella/vendors/flot-spline/js/jquery.flot.spline.min.js';
import 'gentelella/vendors/flot.curvedlines/curvedLines.js';
import 'gentelella/vendors/DateJS/build/date.js';
import 'gentelella/vendors/jqvmap/dist/jquery.vmap.js';
import 'gentelella/vendors/jqvmap/dist/maps/jquery.vmap.world.js';
import 'gentelella/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js';
import 'gentelella/vendors/moment/min/moment.min.js';
//import 'gentelella/vendors/bootstrap-daterangepicker/daterangepicker.js';
//import 'gentelella/build/js/custom.min.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="nav-md container body">
            <div className="main_container">
              <div className="col-md-3 left_col">
                  <div className="left_col scroll-view">
                    <div className="navbar nav_title" style="border: 0;">
                      <a href="index.html" className="site_title"><i className="fa fa-paw"></i>
                          <span>Gentelella Alela!</span></a>
                    </div>
                    <div className="clearfix"></div>
                    <div className="profile clearfix">
                      <div className="profile_pic">
                        <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                      </div>
                      <div className="profile_info">
                        <span>Welcome,</span>
                        <h2>John Doe</h2>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
