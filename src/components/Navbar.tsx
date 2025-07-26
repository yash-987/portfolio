import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon } from '../icons/MenuIcon';
import { CrossIcon } from '../icons/CrossIcon';
export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Skills', path: '/skills' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Contact', path: '/contact' },
	];

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="bg-white shadow-lg sticky top-0 z-50">
			<div className="container mx-auto px-6 py-4">
				<div className="flex justify-between items-center">
					<Link to="/" className="text-2xl font-bold text-gray-800">
						Portfolio
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`text-gray-600 hover:text-blue-600 transition-colors ${
									location.pathname === item.path
										? 'text-blue-600 font-semibold'
										: ''
								}`}
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={toggleMobileMenu}
							className="text-gray-600 hover:text-gray-800"
						>
							{isMobileMenuOpen ? <CrossIcon /> : <MenuIcon />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden mt-4 pb-4">
						<div className="flex flex-col space-y-2">
							{navItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									onClick={closeMobileMenu}
									className={`text-gray-600 hover:text-blue-600 transition-colors py-2 ${
										location.pathname === item.path
											? 'text-blue-600 font-semibold'
											: ''
									}`}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};
