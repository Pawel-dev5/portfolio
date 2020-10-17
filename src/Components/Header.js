import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var jobDescription = this.props.data.jobDescription;
         var employer = this.props.data.employer;
         var email = this.props.data.email;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">O mnie</a></li>
                  <li><a className="smoothscroll" href="#resume">Praca i edukacja</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Projekty</a></li>
                  {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                  {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <h3>Jestem <span></span> <span>{occupation}</span>,
            {description}<span>{employer}</span> gdzie pracuje jako
            <span> {jobDescription}</span> przy zarządzaniu projektami IT, głównie aplikacji webowych.</h3>
                  <h3>Prowadzę działalność gospodarczą i poszukuję nowych projektów IT.</h3>
                  <hr />
                  <ul className="social">
                     <li>
                        <a href={`mailto:${email}`}><i className="fa fa-envelope"></i></a>
                     </li>
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
