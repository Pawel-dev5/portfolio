import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var country = this.props.data.address.country
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Pawel Nowecki Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>O mnie</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Dane kontaktowe</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city}, {country}<br />
                   </span>
						   <span>{phone}</span><br />
                     <span><a href={email}>{email}</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Pobierz CV</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
