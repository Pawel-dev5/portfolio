import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// <!-- Vendor JS Files -->
// import "../src/vendor/jquery/jquery.min.js";

// import "../src/vendor/bootstrap/js/bootstrap.bundle.min.js";

// import "../src/vendor/jquery.easing/jquery.easing.min.js"
// import "../src/vendor/php-email-form/validate.js";
// import "../src/vendor/waypoints/jquery.waypoints.min.js";
// import "../src/vendor/counterup/counterup.min.js";
// import "../src/vendor/isotope-layout/isotope.pkgd.min.js";
// import "../src/vendor/venobox/venobox.min.js";
// import "../src/vendor/owl.carousel/owl.carousel.min.js";
// import "../src/vendor/typed.js/typed.min.js";
// import "../src/vendor/aos/aos.js";
  // <!-- Template Main JS File -->
// import "../src/js/main.js";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
