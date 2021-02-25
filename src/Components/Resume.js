import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

class Resume extends Component {
  render() {

    if (this.props.data) {
      // var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var certificates = this.props.data.certificates.map(function (certificates) {
        return <div key={certificates.company}><h3>{certificates.company}</h3>
          <p className="info">{certificates.title}<span>&bull;</span> <em className="date">{certificates.years}</em></p>
          <details className="newline">
            <summary >
              <FontAwesomeIcon className="icon-circle-down" icon={faChevronCircleDown} />
                Pokaż szczegóły
            </summary>
            <p className="newline">{certificates.description}</p>
          </details>
        </div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.years}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <details className="newline">
            <summary >
              <FontAwesomeIcon className="icon-circle-down" icon={faChevronCircleDown} />
                Pokaż szczegóły
            </summary>
            {/* <p className="newline">{certificates.description}</p> */}
          <p className="newline">{work.description}</p>
          </details>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var projectImage = 'images/tech/' + skills.image;
        return <div key={skills.name} className="columns feature-item">
          <img className='skill' alt={skills.name} src={projectImage} />
          <h5>{skills.name}</h5>
          <p>{skills.description}</p>
        </div>
      })
      var skills2 = this.props.data.skills2.map(function (skills2) {
        var projectImage = 'images/tech/' + skills2.image;
        return <div key={skills2.name} className="columns feature-item">
          <img className='skill' alt={skills2.name} src={projectImage} />
          <h5>{skills2.name}</h5>
          <p>{skills2.description}</p>
        </div>
      })
      var skills3 = this.props.data.skills3.map(function (skills3) {
        var projectImage = 'images/tech/' + skills3.image;
        return <div key={skills3.name} className="columns feature-item">
          <img className='skill' alt={skills3.name} src={projectImage} />
          <h5>{skills3.name}</h5>
          <p>{skills3.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Certyfikaty</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns certyficates">
                {certificates}
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Praca</span></h1>
          </div>
          <div className="nine columns main-col works">
            {work}
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Edukacja</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>
        <div className="tech">
          <div className="three columns header-col">
            <h1><span>Technologie</span></h1>
          </div>
          <div className="techBox">
            <div>
              <div className="">
                <ul className=" bgrid-quarters s-bgrid-thirds cf techul">
                  <li>
                    {skills}
                  </li>
                  <li>
                    {skills2}
                  </li>
                  <li>
                    {skills3}
                  </li>
                </ul>
                <ul className=" bgrid-quarters s-bgrid-thirds cf techul">
                </ul>
                <ul className=" bgrid-quarters s-bgrid-thirds cf techul">
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
