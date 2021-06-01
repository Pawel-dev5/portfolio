import React, { Component } from 'react';
import Scroll from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {ContactForm} from './ContactForm'

const ScrollLink = Scroll.Link;
class Footer extends Component {
  render() {

    if (this.props.data) {
      var email = this.props.data.email;
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href={`mailto:${email}`}><i className="fa fa-envelope"></i></a>
              </li>
              {networks}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 <a title="Paweł Nowecki" href="https://pawel-dev5.github.io/">Paweł Nowecki</a></li>
            </ul>

          </div>
          <div id="go-top">
            <ScrollLink
              className="smoothscroll"
              smooth={true}
              duration={500}
              to="home"
            >
              <FontAwesomeIcon className="icon-up-open" icon={faChevronUp} />
            </ScrollLink>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </footer>
    );
  }
}

export default Footer;
