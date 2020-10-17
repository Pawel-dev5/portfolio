import React from 'react';
import logo from './logo.svg';
// import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../src/components/Nav";
// import Nav from 'react-bootstrap/Nav';
import {Button} from 'react-bootstrap';
import ProfileImg from "../src/assets/img/profile-img.jpg"
import Portfolio1 from "../src/assets/img/portfolio/portfolio-1.jpg";
// import "../src/js/main";



function App() {
  return (
    <>

<button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

<header id="header">
  <div className="d-flex flex-column">

    <div className="profile">
      <img src={ProfileImg} alt="" className="img-fluid rounded-circle"/>
      <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
      <div className="social-links mt-3 text-center">
        <a className="twitter"><i className="bx bxl-twitter"></i></a>
        <a className="facebook"><i className="bx bxl-facebook"></i></a>
        <a className="instagram"><i className="bx bxl-instagram"></i></a>
        <a className="google-plus"><i className="bx bxl-skype"></i></a>
        <a className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>

    <nav className="nav-menu">
      <ul>
        <li className="active"><a href="index.html"><i className="bx bx-home"></i> <span>Home</span></a></li>
        <li><a ><i className="bx bx-user"></i> <span>O mnie</span></a></li>
        <li><a ><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a ><i className="bx bx-book-content"></i> Portfolio</a></li>
        <li><a ><i className="bx bx-server"></i> Services</a></li>
        <li><a ><i className="bx bx-envelope"></i> Contact</a></li>

      </ul>
    </nav>
    <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

  </div>
</header>

<section id="hero" className="d-flex flex-column justify-content-center align-items-center">
  <div className="hero-container" data-aos="fade-in">
    <h1>Alex Smith</h1>
    <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
  </div>
</section>

<main id="main">

  <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>About</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src={ProfileImg} className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>UI/UX Designer &amp; Web Developer.</h3>
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
                <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                <li><i className="icofont-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 30</li>
                <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
                <li><i className="icofont-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
                <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
              </ul>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>

    </div>
  </section>

  <section id="facts" className="facts">
    <div className="container">

      <div className="section-title">
        <h2>Facts</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row no-gutters">

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
          <div className="count-box">
            <i className="icofont-simple-smile"></i>
            <span data-toggle="counter-up">232</span>
            <p><strong>Happy Clients</strong> consequuntur quae</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
          <div className="count-box">
            <i className="icofont-document-folder"></i>
            <span data-toggle="counter-up">521</span>
            <p><strong>Projects</strong> adipisci atque cum quia aut</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
          <div className="count-box">
            <i className="icofont-live-support"></i>
            <span data-toggle="counter-up">1,463</span>
            <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
          <div className="count-box">
            <i className="icofont-users-alt-5"></i>
            <span data-toggle="counter-up">15</span>
            <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
          </div>
        </div>

      </div>

    </div>
  </section>

  <section id="skills" className="skills section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Skills</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row skills-content">

        <div className="col-lg-6" data-aos="fade-up">

          <div className="progress">
            <span className="skill">HTML <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">CSS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">JavaScript <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <div className="progress">
            <span className="skill">PHP <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">WordPress/CMS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Photoshop <i className="val">55%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>

  <section id="resume" className="resume">
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>Alex Smith</h4>
            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Master of Fine Arts &amp; Graphic Design</h4>
            <h5>2015 - 2016</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
          </div>
          <div className="resume-item">
            <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
            <h5>2010 - 2014</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Senior graphic design specialist</h4>
            <h5>2019 - Present</h5>
            <p><em>Experion, New York, NY </em></p>
            <ul>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section id="portfolio" className="portfolio section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row" data-aos="fade-up">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={Portfolio1} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="../src/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="../src/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="../src/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="../src/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="../src/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="../src/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="../src/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="../src/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <section id="services" className="services">
    <div className="container">

      <div className="section-title">
        <h2>Services</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <div className="icon"><i className="icofont-computer"></i></div>
          <h4 className="title"><a href="">Lorem Ipsum</a></h4>
          <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
          <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
          <h4 className="title"><a href="">Dolor Sitema</a></h4>
          <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
          <div className="icon"><i className="icofont-earth"></i></div>
          <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
          <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
          <div className="icon"><i className="icofont-image"></i></div>
          <h4 className="title"><a href="">Magni Dolores</a></h4>
          <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
          <div className="icon"><i className="icofont-settings"></i></div>
          <h4 className="title"><a href="">Nemo Enim</a></h4>
          <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
          <div className="icon"><i className="icofont-tasks-alt"></i></div>
          <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
          <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div>

    </div>
  </section>

  <section id="testimonials" className="testimonials section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Testimonials</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="owl-carousel testimonials-carousel">

        <div className="testimonial-item" data-aos="fade-up">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src="../src/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
          <h3>Saul Goodman</h3>
          <h4>Ceo &amp; Founder</h4>
        </div>

        <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src="../src/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
        </div>

        <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src="../src/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
          <h3>Jena Karlis</h3>
          <h4>Store Owner</h4>
        </div>

        <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src="../src/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
          <h3>Matt Brandon</h3>
          <h4>Freelancer</h4>
        </div>

        <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src="../src/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
          <h3>John Larson</h3>
          <h4>Entrepreneur</h4>
        </div>

      </div>

    </div>
  </section>

  <section id="contact" className="contact">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row" data-aos="fade-in">

        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="icofont-google-map"></i>
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>

            <div className="email">
              <i className="icofont-envelope"></i>
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>

            <div className="phone">
              <i className="icofont-phone"></i>
              <h4>Call:</h4>
              <p>+1 5589 55488 55s</p>
            </div>

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
          </div>

        </div>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label for="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="form-group col-md-6">
                <label for="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <label for="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <label for="name">Message</label>
              <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>

</main>

<footer id="footer">
  <div className="container">
    <div className="copyright">
      &copy; Copyright <strong><span>iPortfolio</span></strong>
    </div>
    <div className="credits">
     
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>

<a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
    </>
  );
}
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
export default App;
