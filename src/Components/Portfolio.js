import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return (

          <>
            <div id="portfolio-item" key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects.url} title={projects.title}>
                  <img alt={projects.title} src={projectImage} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{projects.title}</h5>
                      <p className="newline">{projects.description}</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="overlay">
                <div className="download-portfolio">
                  <a href={projects.git} title={projects.title}>
                    <button className="button-portfolio" href={projects.git}>Git</button>
                  </a>
                  <a href={projects.url} title={projects.title}>
                    <button className="button-portfolio" href={projects.url}>Live prewiev</button>
                  </a>
                </div>
              </div>
            </div>
          </>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Sprawdź moje projekty</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
