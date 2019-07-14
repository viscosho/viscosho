import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default class Sidebar extends Component {
	render() {
		return (
			<div id="app-sidebar">
				<aside id="colorlib-aside" className="border js-fullheight text-center">
					<div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}>
						<h1 id="colorlib-logo">
							<a href="index.html">Virginia García</a>
						</h1>
						<span className="email"><i className="icon-mail"></i> ve.garcia.ortiz@gmail.com</span>
					</div>
					<nav id="colorlib-main-menu" role="navigation" className="navbar">
						<div id="navbar" className="collapse">
							<ul>
								<li className="active">
									<a href="#home" data-nav-section="home">Introduction</a>
								</li>
								<li>
									<a href="#about" data-nav-section="about">About</a>
								</li>
								<li>
									<a href="#timeline" data-nav-section="timeline">Timeline</a>
								</li>
							</ul>
						</div>
					</nav>
					<nav id="colorlib-main-menu">
						<ul>
							<li>
								<FontAwesomeIcon icon={faLinkedin} />
							</li>
							<li>
								<FontAwesomeIcon icon={faGithub} />
							</li>
							<li>
							<FontAwesomeIcon icon={faTwitter} />
							</li>
							<li>
								<a href="https://dev.to/viscosho">
									<img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Virginia Garcia Ortiz's DEV Profile" height="30" width="30" />
								</a>
							</li>
						</ul>
					</nav>
				</aside>
			</div>
		)
	}
}