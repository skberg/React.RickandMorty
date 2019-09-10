import React from 'react';
import './Layout.css';
import Aux from '../../hoc/Aux';

const layout = props => (
	<Aux>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/">Rick & Morty</a>
			<ul className="navbar-nav">
				<li className="nav-item">
					<a href="/" className="nav-link">Characters</a>
				</li>
			</ul>
		</nav>
		<div className="container">
			{props.children}
		</div>
	</Aux>
)


export default layout;