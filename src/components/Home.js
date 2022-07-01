/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Home.css";
import Product from "./Product";
import bannerimg from "../images/banner3.jpg";
import headset_img from "../images/headset_logtiech.jpg";
import mouse_img from "../images/mouse_razer.jpg";
import keybrd from '../images/keybrd.jpg';
import lap from '../images/laptop.jpg';
import phone from '../images/phone.jpg';
import watch from '../images/watch.jpeg';
import television from "../images/TV.jpg";
import shoe from '../images/shoe.jpg';
import chair from '../images/chair.jpg';

function Home() {
	return (
		<div className="home">
			<div className="home-container">
				<img src={bannerimg} className="home-image" />

				<div className="home-row">
					<Product
						id={122323}
						title="Acer Predator Helios 300 12th Gen Intel Core i7-12700H"
						price={154990}
						image={lap}
						rating={4}
						author="by Acer"
						subtitle="15.6 inches QHD IPS Display, 16GB/1TB SSD/Windows 11 Home/6GB Graphics/NVIDIA GeForce RTX 3060/165Hz, Black, 2.6Kg"
					/>
					<Product
						id={122320}
						title="OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)"
						price={1350}
						image={phone}
						rating={5}
						author="by OnePlus Store"
						subtitle="65W SUPERVOOC, 6.43 inch, 90Hz FHD+ AMOLED Display, AI-infused Triple Camera, 7.8mm thick, weighing 173g"
					/>
				</div>

				<div className="home-row">
					<Product
						id={122325}
						title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV (Glossy Black)"
						price={16000}
						image={television}
						rating={4}
						author="by Samsung Store"
						subtitle="Crystal 4K Ultra HD (3840 x 2160) | Refresh Rate : 50 Hertz, 3 HDMI ports "
					/>
					<Product
						id={122321}
						title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
						price={22999}
						image={watch}
						rating={3}
						author="by Samsung Electronics Store"
						subtitle="elegant Super AMOLED Always On Display is surrounded with a bezel which you can turn to listen to music and much more.    "
					/>
				</div>

				<div className="home-row">
					<Product
						id={122327}
						title="East Star Sports Paul Spikeless ESS Golf Shoes"
						price={3499}
						image={shoe}
						rating={3}
						author="By East Star Sports Store"
						subtitle="100% Waterproof Golf Shoes, Lightweight and Durable Golf Shoes, Stylish Golf Shoes"
					/>
					<Product
						id={122326}
						title="CELLBELL ® GC03 Transformer Series Gaming/Racing Style Ergonomic Faux Leather High Back Chair"
						price={16000}
						image={chair}
						rating={5}
						author="By CELLBELL Store"
						subtitle="GAMIFIED Experience,  ERGONOMICALLY Outstanding, Strong and Sturdy Metal Base"
					/>
				</div>
				<div className="home-row">
					<Product
						id={122330}
						title="HyperX Alloy Origins - HyperX Aqua Switch"
						price={8990}
						image={keybrd}
						rating={4}
						author="by HyperX Store"
						subtitle="A 65% form factor makes it more compact than a tenkeyless keyboard, while still offering arrow keys."
					/>
					<Product
						id={122329}
						title="Razer DeathAdder Essential Gaming Mouse - Black"
						price={1359}
						image={mouse_img}
						rating={5}
						author="By Razer Store"
						subtitle="Proven history of performance, True 6,400 dpi optical sensor, Distinctive shape designed for extended hours of gaming"
					/>
					<Product
						id={122328}
						title="Logitech G733 Lightspeed Wireless Headphones"
						price={12795}
						image={headset_img}
						rating={4}
						author="By Logitech G Store"
						subtitle=" Mic with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE Technology and PRO-G Audio Drivers"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
