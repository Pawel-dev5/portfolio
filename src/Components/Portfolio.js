import React, { Component } from 'react';

const imgs = [
  {
    title: "Sklep internetowy Choinki z dowozem",
    description: "Sklep internetowy oparty na Worpress i WooCommerce\nWykorzystane technologie:\nWordpress\nWooCommerce\nGoogle Analytics\nRWD\nHTML5\nCSS3",
    image: "%PUBLIC_URL%/images/portfolio/choinki.jpg",
    url: "https://choinkizdowozem.pl/",
    git: "https://github.com/Pawel-dev5/",
    tag: ["all", "Food", "wordpress"]
  },
  {
    title: "Oddam w Dobre ręce",
    description: "Strona do oddawania rzeczy potrzebującym z możliwością utworzenia konta i zalogowania. Na stronie dostępne są dwa formularze, jeden kontaktowy, a drugi dostępny dopiero po zalogowaniu do oddawania rzeczy.\nWykorzystane technologie:\nReact\nJavaScipt\nHTML5\nScss\nFirebase\nWebpack\nReact Hooks",
    image: "oddamwdobrerece.png",
    url: "https://pawel-dev5.github.io/oddamwdoberece/",
    git: "https://github.com/Pawel-dev5/oddamwdoberece/",
    tag: ["all", "Food", "react"]
  },
  {
    title: "Finlux Biuro rachunkowe",
    description: "Strona biura rachunkowego z blogiem zarządzanym z poziomu CMSa, przygotowana na postawie szablonu Wordpress.\nWykorzystane technologie:\nHTML5\nCSS3\nWordpress plugins\nElementor\nGoogle Analytics\nRWD",
    image: "finlux1.png",
    url: "https://finlux.com.pl/",
    git: "https://github.com/Pawel-dev5/",
    tag: ["all", "Food", "wordpress"]
  },
  {
    title: "Wyszukiwarka książek API Google",
    description: "Wyszukiwarka książek połączona z API Google Wykorzystane technologie:\nReact\nJavaScript\nHTML\nCSS3\nFetch API\nWebpack\nReact Modal\nJSON",
    image: "wyszukiwarka.jpg",
    url: "https://wyszukiwarka-ksiazek.netlify.app/",
    git: "https://github.com/Pawel-dev5/devdeliver",
    tag: ["all", "Food", "wordpress"]
  },
  {
    title: "Portfolio",
    description: "Strona na której właśnie się znajdujesz. Wykorzystane technologie:\nReact\nJavaScript\nHTML\nCSS3\nRWD\nWebpack\nReact Scroll\nJSON",
    image: "Portfolio.png",
    url: "https://pawel-nowecki-portfolio.netlify.app/",
    git: "https://github.com/Pawel-dev5/portfolio/",
    tag: ["all", "Plants"]
  },
  {
    title: "BestShop",
    description: "Desktopowy layout sklepu internetowego\nWykorzystane technologie:\nHTML\nCSS3",
    image: "BestShop.png",
    url: "https://best-shop-layout-desktop.netlify.app/",
    git: "https://github.com/Pawel-dev5/BestShop",
    tag: ["all", "Plants"]
  },
  {
    title: "Newsletter HOS",
    description: "Newsletter przygotowywany na potrzeby cotygodniowych mailingów dla firmy House of Skills\nWykorzystane technologie:\nHTML\nCSS",
    image: "hos.jpg",
    url: "https://mailing-hos.netlify.app/",
    git: "https://github.com/Pawel-dev5/Mailing-HOS",
    tag: ["all", "Animals"]
  },
  {
    title: "Newsletter wykończenia mieszkań",
    description: "Wykorzystane technologie:\nHTML\nCSS",
    image: "mailingMieszkania.png",
    url: "https://newsletter-wykonczenia-mieszkan.netlify.app/",
    git: "https://github.com/Pawel-dev5/Mailing-wykonczenia-mieszkan",
    tag: ["all", "People"]
  }
];

const filters = [
  { name: "People", status: false },
  { name: "Animals", status: false },
  { name: "Plants", status: false },
  { name: "Food", status: false }
];

const Filters = ({ onClickAll, all, onClick, filters }) =>
  <form>
    <ul>
      <li onClick={onClickAll}>
        <input
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">All</label>
      </li>
      {filters.map(
        (filter, i) =>
          <li key={i} data-index={i} onClick={onClick} >
            <input
              id={filter.name}
              type="checkbox"
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>

const Cards = ({ imgs }) =>
  <ul>
    {imgs.map(
      (img, i) =>
        <li key={i}>
          <figure>
            <img src={img.url} alt={img.title} />
            <figcaption>
              <div>{img.title} </div>
              <span>{img.tag}</span>
            </figcaption>
          </figure>
        </li>)}
  </ul>

class Portfolio extends Component {
  state = {
    imgs,
    filters,
    all: true
  };


  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });

    this.updateFilters();
    this.updateImgs();
  }

  setAll = () => {
    const { filters } = this.state;

    filters.forEach(
      filter => {
        filter.status = false;
      }
    );

    this.setState({
      all: true,
      filters
    });
  }

  updateFilters() {
    const allFiltersTrue = filters.every(filter => filter.status === true);
    const allFiltersFalse = filters.every(filter => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if ((img.tag == filter.name) && (filter.status == true)) {
          newImgs[a] = img;
          a++;
        }
      })
    });

    this.setState({
      imgs: newImgs
    });
  }
  render() {
    const { filters, all } = this.state;

    if (this.props.data) {
      const prop = this.props.data
      console.log(prop)
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        // console.log(projects)
        // console.log(imgs)
        return (
          <>
            <div id="portfolio-item" key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects.url} title={projects.title} target="_blank" rel="noopener noreferrer">
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
                  <a href={projects.git} title={projects.title} target="_blank" rel="noopener noreferrer" >
                    <button className="button-portfolio" href={projects.git}>Code</button>
                  </a>
                  <a href={projects.url} title={projects.title} target="_blank" rel="noopener noreferrer" >
                    <button className="button-portfolio" href={projects.url} >Live</button>
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
            <div>
            <Filters
              onClickAll={this.setAll}
              all={all}
              onClick={this.setFilter}
              filters={filters} />
            {(all) ? (
              <Cards imgs={imgs} />
            ) : (
                <Cards imgs={this.state.imgs} />
              )}
          </div>
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
