// import React from 'react';


// function Portfolio2() {
//     filterSelection("all") // Execute the function and show all columns
//     function filterSelection(c) {
//         var x, i;
//         x = document.getElementsByClassName("column");
//         if (c === "all") c = "";
//         // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//         for (i = 0; i < x.length; i++) {
//             w3RemoveClass(x[i], "show");
//             if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//         }
//     }

//     // Show filtered elements
//     function w3AddClass(element, name) {
//         var i, arr1, arr2;
//         arr1 = element.className.split(" ");
//         arr2 = name.split(" ");
//         for (i = 0; i < arr2.length; i++) {
//             if (arr1.indexOf(arr2[i]) === -1) {
//                 element.className += " " + arr2[i];
//             }
//         }
//     }

//     // Hide elements that are not selected
//     function w3RemoveClass(element, name) {
//         var i, arr1, arr2;
//         arr1 = element.className.split(" ");
//         arr2 = name.split(" ");
//         for (i = 0; i < arr2.length; i++) {
//             while (arr1.indexOf(arr2[i]) > -1) {
//                 arr1.splice(arr1.indexOf(arr2[i]), 1);
//             }
//         }
//         element.className = arr1.join(" ");
//     }

//     // Add active class to the current button (highlight it)
//     // var btnContainer = document.getElementById("myBtnContainer");
//     // console.log(btnContainer)
//     // var btns = btnContainer.getElementsByClassName("btn");
//     // for (var i = 0; i < btns.length; i++) {
//     //     btns[i].addEventListener("click", function () {
//     //         var current = document.getElementsByClassName("active");
//     //         current[0].className = current[0].className.replace(" active", "");
//     //         this.className += " active";
//     //     });
//     // }

//     return (
//         <>
//             <h2>PORTFOLIO</h2>
//             <div id="myBtnContainer">
//                 <button className="btn active" onClick={filterSelection}> Show all</button>
//                 <button className="btn" onClick={filterSelection}> Nature</button>
//                 <button className="btn" onClick={filterSelection}> Cars</button>
//                 <button className="btn" onClick={filterSelection}> People</button>
//             </div>
//         {/* // <!-- Portfolio Gallery Grid --> */}
//             <div className="row">
//                 <div className="column nature">
//                     <div className="content">
//                         <img src="/" alt="Mountains" ></img>
//                         <h4>Mountains</h4>
//                         <p>Lorem ipsum dolor..</p>
//                     </div>
//                     <div className="column nature">
//                         <div className="content">
//                             <img src="/w3images/lights.jpg" alt="Lights"  />
//                             <h4>Lights</h4>
//                             <p>Lorem ipsum dolor..</p>
//                         </div>
//                     </div>
//                     <div className="column nature">
//                         <div className="content">
//                             <img src="/w3images/nature.jpg" alt="Nature" />
//                             <h4>Forest</h4>
//                             <p>Lorem ipsum dolor..</p>
//                         </div>
//                     </div>
//                     <div className="column cars">
//                         <div className="content">
//                             <img src="/w3images/cars1.jpg" alt="Car"  />
//                             <h4>Retro</h4>
//                             <p>Lorem ipsum dolor..</p>
//                         </div>
//                     </div>
//                     <div className="column cars">
//                         <div className="content">
//                             <img src="/w3images/cars2.jpg" alt="Car"  />
//                             <h4>Fast</h4>
//                             <p>Lorem ipsum dolor..</p>
//                         </div>
//                     </div>
//                     <div className="column cars">
//                         <div className="content">
//                             <img src="/w3images/cars3.jpg" alt="Car"  />
//                             <h4>Classic</h4>
//                             <p>Lorem ipsum dolor..</p>
//                         </div>
//                     </div>

//                     <div className="column people">
//                         <div className="content">
//                             <img src="/w3images/people1.jpg" alt="People"  />
//                             <h4>Girl</h4>
//                             <p>Lorem ipsum dolor..</p>
//                         </div>
//                     </div>
//                     <div className="column people">
//                         <div className="content">
//                             <img src="/w3images/people2.jpg" alt="People" />
//                             <h4>Man</h4>
//                             <p>Lorem ipsum dolor..</p>
//                         </div>
//                     </div>
//                     <div className="column people">
//                         <div className="content">
//                             <img src="/w3images/people3.jpg" alt="People" />
//                             <h4>Woman</h4>
//                             <p>Lorem ipsum dolor..</p>
//                         </div>
//                     </div>
//                     {/* <!-- END GRID --> */}
//                 </div>
//             </div>
//             </>
//     );
// }
// export default Portfolio2;

import React, { useState, useEffect, Component } from "react";

// import "./styles.css";

// const portfolio = [
//   {
//     name: "My best client",
//     category: ["all", "frontend", "ux-ui"]
//   },
//   {
//     name: "My favorite case",
//     category: ["all", "mobile", "ux-ui"]
//   },
//   {
//     name: "A old job",
//     category: ["all", "frontend"]
//   },
//   {
//     name: "It is a really cool website",
//     category: ["all", "frontend", "ux-ui"]
//   },
//   {
//     name: "Something more",
//     category: ["all", "others"]
//   }
// ];

// function App(props) {
//     console.log(props)
//   const [filter, setFilter] = useState("all");
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     setProjects(portfolio);
//   }, []);

//   useEffect(() => {
//     setProjects([]);

//     const filtered = portfolio.map(p => ({
//       ...p,
//       filtered: p.category.includes(filter)
//     }));
//     setProjects(filtered);
//   }, [filter]);
//   return (
//     <>
//       <div className="portfolio__labels">
//         <div active={filter === "all"} onClick={() => setFilter("all")}>
//           All
//         </div>
//         <div
//           active={filter === "frontend"}
//           onClick={() => setFilter("frontend")}
//         >
//           Frontend
//         </div>
//         <div
//           active={filter === "mobile"}
//           onClick={() => setFilter("mobile")}
//         >
//           Mobile
//         </div>
//         <div
//           active={filter === "ux-ui"}
//           onClick={() => setFilter("ux-ui")}
//         >
//           UX/UI
//         </div>
//         <div
//           active={filter === "others"}
//           onClick={() => setFilter("others")}
//         >
//           Others
//         </div>
//       </div>
//       <div className="portfolio__container">
//         {projects.map(item =>
//           item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
//         )}
//       </div>
//     </>
//   );
// }

// export default App;




// const imgs = [{author:"The Lazy Artist Gallery", tag:"People", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/1.jpg?raw=true"},
//               {author:"Daria Shevtsova", tag:"Food", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true"},
//               {author:"Kasuma", tag:"Animals", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true"},
//               {author:"Dominika Roseclay", tag:"Plants", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true"},
//               {author:"Scott Webb", tag:"Plants", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true"},
//                {author:"Jeffrey Czum", tag:"People", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true"},
//               {author:"Dominika Roseclay", tag:"Food", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true"},
//               {author:"Valeria Boltneva", tag:"Animals", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true"}
// ];

// const filters = [
//   {name:"People", status: false},
//   {name:"Animals", status: false},
//   {name:"Plants", status: false},
//   {name:"Food", status: false}
// ];

// const Filters = ({onClickAll, all, onClick, filters}) =>
//   <form>
//     <ul>
//       <li onClick={onClickAll}>
//         <input 
//           type="checkbox"
//           checked={all}
//         />
//         <label htmlFor="all">All</label>
//       </li>
//        {filters.map(
//         (filter, i)=>
//           <li  key={i} data-index={i} onClick={onClick} >
//             <input 
//               id={filter.name} 
//               type="checkbox" 
//               checked={filter.status}
//             />
//             <label htmlFor={filter.name}>{filter.name}</label>
//           </li>)}
//     </ul>
//   </form>

// const Cards = ({imgs}) =>
//   <ul>
//     {imgs.map(
//       (img, i)=>
//       <li  key={i}>
//         <figure>
//           <img src={img.src} alt={img.author}/>
//           <figcaption> 
//             <div>{img.author} </div>
//             <span>{img.tag}</span>
//           </figcaption>
//         </figure>
//       </li>)}
//   </ul>

// class App extends React.Component{
//   state ={
//     imgs, 
//     filters,
//     all: true
//   };

//   setFilter = (e) =>{
//     e.preventDefault();
//     const { filters, all } = this.state;
//     const { index } = e.currentTarget.dataset;

//     filters[index].status = !filters[index].status;
//     this.setState({
//       filters
//     });

//     this.updateFilters();
//     this.updateImgs();
//   }

//   setAll = () =>{
//     const {filters} = this.state;

//     filters.forEach( 
//       filter => {
//         filter.status = false;
//       }
//     );

//     this.setState({
//       all: true,
//       filters
//     });
//   }

//   updateFilters(){
//     const allFiltersTrue = filters.every( filter => filter.status === true);
//     const allFiltersFalse = filters.every( filter => filter.status === false);

//     if(allFiltersTrue||allFiltersFalse){
//       this.setAll();
//     }else{
//       this.setState({
//         all: false
//       });
//     } 
//   }

//   updateImgs() {
//     const { filters, all } = this.state;
//     let newImgs = [];
//     let a = 0;

//     imgs.forEach((img, imgKey) => { 
//       filters.forEach((filter, filterKey)=> {  
//         if((img.tag==filter.name)&&(filter.status==true)){
//           newImgs[a] = img;
//           a++;
//         }
//       })
//     });

//     this.setState({
//       imgs: newImgs
//     });
//   }

//   render(){
//     const {filters, all} = this.state;  
//     return(
//       <div>
//         <Filters 
//           onClickAll={this.setAll}
//           all={all}
//           onClick={this.setFilter}
//           filters={filters} />
//         {(all)?(
//             <Cards imgs = {imgs}/>
//           ):(
//             <Cards imgs = {this.state.imgs}/>
//         )}
//       </div>
//     );
//   }
// }
// // ReactDOM.render(<App/>, document.getElementById('root'));
// export default App;


// function Portfolio2(props) {


//     const projekty = props.data;
//     console.log(projekty)

//     if (props.data) {

//         var projects = props.data.projects.map(function (projects) {
//             var projectImage = 'images/portfolio/' + projects.image;

//             return (
//                 <>
//                     <div id="portfolio-item" key={projects.title} className="columns portfolio-item">
//                         <div className="item-wrap">
//                             <a href={projects.url} title={projects.title} target="_blank" rel="noopener noreferrer">
//                                 <img alt={projects.title} src={projectImage} />
//                                 <div className="overlay">
//                                     <div className="portfolio-item-meta">
//                                         <h5>{projects.title}</h5>
//                                         <p className="newline">{projects.description}</p>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="overlay">
//                             <div className="download-portfolio">
//                                 <a href={projects.git} title={projects.title} target="_blank" rel="noopener noreferrer" >
//                                     <button className="button-portfolio" href={projects.git}>Code</button>
//                                 </a>
//                                 <a href={projects.url} title={projects.title} target="_blank" rel="noopener noreferrer" >
//                                     <button className="button-portfolio" href={projects.url} >Live</button>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )
//         })
//     }

//     return (
//         <section id="portfolio">
//             <div className="row">
//                 <div className="twelve columns collapsed">
//                     <h1>Sprawdź moje projekty</h1>
//                     <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
//                         {projects}
//                     </div>
//                 </div>
//             </div>
//         </section>)
// }

// export default Portfolio2;


// import React, { useState, useEffect } from "react";

// import "./styles.css";

const portfolio = [
  {
    name: "My best client",
    category: ["all", "frontend", "ux-ui"]
  },
  {
    name: "My favorite case",
    category: ["all", "mobile", "ux-ui"]
  },
  {
    name: "A old job",
    category: ["all", "frontend"]
  },
  {
    name: "It is a really cool website",
    category: ["all", "frontend", "ux-ui"]
  },
  {
    name: "Something more",
    category: ["all", "others"]
  }
];
console.log(portfolio)

function Portfolio2(props) {
    var portfolio2 = props.data
    console.log(portfolio2)
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="portfolio__labels">
        <a  active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        <a
        //   href="/#"
          active={filter === "frontend"}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </a>
        <a
        //   href="/#"
          active={filter === "mobile"}
          onClick={() => setFilter("mobile")}
        >
          Mobile
        </a>
        <a
        //   href="/#"
          active={filter === "ux-ui"}
          onClick={() => setFilter("ux-ui")}
        >
          UX/UI
        </a>
        <a
        //   href="/#"
          active={filter === "others"}
          onClick={() => setFilter("others")}
        >
          Others
        </a>
      </div>
      <div className="portfolio__container">
        {projects.map(item =>
          item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
        )}
      </div>
    </>
  );
}


export default Portfolio2;


