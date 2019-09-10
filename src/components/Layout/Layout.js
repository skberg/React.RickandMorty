import React from 'react';
import './Layout.css';
import Aux from '../../hoc/Aux';
import {NavLink} from 'react-router-dom';
const layout = props => (
	<Aux>
		<nav className="navbar navbar-light ">
			<a className="navbar-brand" href="/">Rick & Morty</a>

			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink to="/" className="nav-link">Characters</NavLink>
				</li>
			</ul>
		</nav>
		<header>
			<img src="https://i2.wp.com/www.pixelcrumb.com/wp-content/uploads/2016/10/RICK-AND-MORTY-BANNER.jpg?fit=1920%2C720
" style={{margin:'0px auto', display:'block', width:'100%' }}/>


		</header>
		
		<div className="container">
			{props.children}
		</div>
	</Aux>
)


export default layout;