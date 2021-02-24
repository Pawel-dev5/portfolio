import React, {useState} from "react";
import PortfolioGrid from "./PortfolioGrid";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio2(props) {
  const {
    data
  } = props;
  // const portfolio = data;
  const all = "all";
  const [filters, setFilters] = useState(all);
  const filterAll = () => { setFilters("all") }
  const filterReact = () => { setFilters("react") }
  const filterOther = () => { setFilters("others") }
  const filterWord = () => { setFilters("wordpress") }


  if (data) {
    return (
      <div className="App">
        <section id="portfolio">
          {/* <div className="">
            <div className=""> */}
              <h1>Sprawdź moje projekty</h1>
              <div>
                {/* <Filters
              onClickAll={this.setAll}
              all={all}
              onClick={this.setFilter}
              filters={filters} />
            {(all) ? (
              <Cards imgs={imgs} />
            ) : (
                <Cards imgs={this.state.imgs} /> */}
                {/* )} */}
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={filterAll}>All</button>
                    <button type="button" className="btn btn-secondary" onClick={filterReact}>React</button>
                    <button type="button" className="btn btn-secondary" onClick={filterWord}>Wordpress</button>
                    <button type="button" className="btn btn-secondary" onClick={filterOther}>Inne</button>
                </div>
              </div>
              <div id="portfolio-wrapper" className="container-box col-sm">
                <PortfolioGrid filters={filters} portfolio={data}/>
              {/* </div>
            </div> */}
          </div>
        </section>
        {/* <Hello portfolio={portfolio}/> */}
      </div>
    );
  } else return <h1>Ładuję</h1>
}