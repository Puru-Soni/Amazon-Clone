/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className="header">
			<Link to="/">
				<img src="./amazon-logo-main.png" className="header-logo" />
			</Link>

			<div className="header-search">
				<input className="header-searchInput" type="text" />
				<SearchIcon className="header-search-icon" />
			</div>

			<div className="header-nav">
				<Link to="/login" className='link'>
					<div className="header__nav_option">
						<span className="header__nav_option_line1">Hello Guest</span>
						<span className="header__nav_option_line2">Sign In</span>
					</div>
				</Link>

				<div className="header-option">
					<span className="header-option-one">Returns</span>
					<span className="header-option-two">& Orders</span>
				</div>

				<div className="header-option">
					<span className="header-option-one">Your</span>
					<span className="header-option-two">Prime</span>
				</div>
			</div>

			<Link to="/checkout" className="link">
				<div className="header-option-basket">
					<ShoppingCartOutlinedIcon className="header-basket-icon" />
					<span className="header-option-two header-basket-count">
						{basket?.length}
					</span>
				</div>
			</Link>
		</div>
	);
}

export default Header;