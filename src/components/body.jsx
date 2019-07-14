import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Body extends Component {
	render() {
		return (
			<div id="app-body">
				<header className="App-header"></header>
				<section className="colorlib-about" data-section="about">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-12">
								<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
									<div className="col-md-12">
										<div className="about-desc">
											<img src={logo} className="App-logo" alt="logo" />
											<span className="heading-meta">About Me</span>
											<h2 className="colorlib-heading">Who Am I?</h2>
											<p>I am a computer grad student from DAIICT-Gandhinagar with ICT as my major.I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!)</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="colorlib-about">
				
				</section>
			</div>
		)
	}
}