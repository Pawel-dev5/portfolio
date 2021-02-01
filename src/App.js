import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
// import Portfolio from './Components/Portfolio';
import Portfolio2 from './Components/Portfolio2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData() {
    // const load = document.getElementById('siteLoading')
    $.ajax({
      url: './resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
        // setTimeout(()=>{
        //   load.outerHTML='';
        // },500)
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    if (this.state.resumeData) {
      return (
        <div className="App">
          <Header data={this.state.resumeData.main} />
          <About data={this.state.resumeData.main} />
          <Resume data={this.state.resumeData.resume} />
          <Portfolio2 data={this.state.resumeData.portfolio} />
          <Footer data={this.state.resumeData.main} />
        </div>
      );
    } else return <h1>Ładowanie</h1>
  }
}
export default App;
