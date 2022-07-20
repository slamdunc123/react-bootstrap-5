import React, { useState } from 'react';

const Navbar = () => {
	const [showCollapsedNav, setShowCollapsedNav] = useState(false);
	const [activeNavLink, setActiveNavLink] = useState('Home');

	const handleNavButton = () => {
		setShowCollapsedNav((prevShowCollapsedNav) => !prevShowCollapsedNav);
	};

	const handleNavLink = (e) => {
		e.preventDefault();
		setShowCollapsedNav(false);
		setActiveNavLink(e.target.innerHTML);
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary '>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					Navbar
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded={showCollapsedNav ? 'true' : 'false'}
					aria-label='Toggle navigation'
					onClick={handleNavButton}
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className={
						showCollapsedNav
							? 'collapse navbar-collapse show'
							: 'collapse navbar-collapse'
					}
					id='navbarNavAltMarkup'
				>
					<div className='navbar-nav'>
						<a
							className={
								activeNavLink === 'Home'
									? 'nav-link active'
									: 'nav-link'
							}
							aria-current='page'
							href='#'
							onClick={handleNavLink}
						>
							Home
						</a>

						<a
							className={
								activeNavLink === 'Features'
									? 'nav-link active'
									: 'nav-link'
							}
							href='#'
							onClick={handleNavLink}
						>
							Features
						</a>
						<a
							className={
								activeNavLink === 'Pricing'
									? 'nav-link active'
									: 'nav-link'
							}
							href='#'
							onClick={handleNavLink}
						>
							Pricing
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
