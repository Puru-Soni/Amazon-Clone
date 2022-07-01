/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.css";

function backToTop() {
	window.scrollTo(0, 0);
}

function Footer() {
	return (
		<div className="footer">
			<div className="footer1" onClick={backToTop}>
				<h4>Back to top</h4>
			</div>
			<div className="footer-middle">
				<div className="footer-row">
					<h3 class="hover-underline-animation">Get to Know Us</h3>
					<h5>About Us</h5>
					<h5>Careers</h5>
					<h5>Gift a Smile</h5>
				</div>
				<div className="footer-row">
					<h3 class="hover-underline-animation">Connect with Us</h3>
					<h5>
						<a
							class="socail"
							href="https://www.facebook.com/AmazonIN/"
							target="_blank"
						>
							<i class="fa fa-facebook-square"></i> Facebook
						</a>
					</h5>
					<h5>
						<a
							href="https://twitter.com/amazonIN?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
							target="_blank"
						>
							<i class="fa fa-twitter-square"></i> Twitter
						</a>
					</h5>
					<h5>
						<a
							class="socail"
							href="https://www.instagram.com/amazondotin/"
							target="_blank"
						>
							<i class="fa fa-instagram"></i> Instagram
						</a>
					</h5>
				</div>
				<div className="footer-row">
					<h3 class="hover-underline-animation">Make Money with Us</h3>
					<h5>Sell on Amazon</h5>
					<h5>Become an Affiliate</h5>
					<h5>Advertise Your Products</h5>
				</div>
				<div className="footer-row">
					<h3 class="hover-underline-animation">Let Us help You</h3>
					<h5>COVID-19 and Amazon</h5>
					<h5>Your Account</h5>
					<h5>Amazon App Download</h5>
				</div>
			</div>
			<div className="footer-bottom">
				<img src="./amazon-logo-main.png" className="footer-logo" />
				<div className="footer-bottom-two">
					<h6>Australia</h6>
					<h6>Brazil</h6>
					<h6>Canada</h6>
					<h6>China</h6>
					<h6>France</h6>
					<h6>Germany</h6>
					<h6>Italy</h6>
					<h6>Japan</h6>
					<h6>Mexico</h6>
					<h6>Netherlands</h6>
					<h6>Singapore</h6>
					<h6>Spain</h6>
					<h6>United Arab Emirates</h6>
					<h6>United Kingdom</h6>
					<h6>United States</h6>
				</div>
				<div class='copyright'>
					<i class="fa fa-copyright" aria-hidden="true"></i>CopyRight - Puru
					Soni
				</div>
			</div>
		</div>
	);
}

export default Footer;