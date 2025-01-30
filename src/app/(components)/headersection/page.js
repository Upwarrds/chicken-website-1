'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';


export default function Header(params) {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
	const pathname = usePathname(); // Use usePathname from next/navigation to get the current path


	const menuItems = [
		{ label: 'Home', path: '/' },
		{ label: 'About Us', path: '/aboutus' },
		{ label: 'Guide', path: '/guide'},
		{ label: 'Contact Us', path: '/contactus' }
	];

	const closeMenu = () => {w
		setIsMenuOpen(false);
	};

    
    return(
        <>
<nav className=" py-1 bg-[#fff] sticky top-0 z-50 border-b-2 border-[#fff] shadow-sm">
			<div className="container mx-auto flex justify-between items-center h-16 my-4">
				{/* Logo Section */}
				<div className="flex-shrink-0">
					<Link href="/">
						{/* <Image src="/pic1.jpg" width={30} height={30} alt="Logo" /> */}
						<span className='text-[32px] font-bold'>Citrus</span>
					</Link>
				</div>

				{/* Hamburger Menu Button for Mobile */}
				<div className="sm:hidden">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-[#fff] hover:text-[#353535] hover:bg-[#555] rounded-[2px] focus:outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
							/>
						</svg>
					</button>
				</div>

				{/* Menu Section */}
				<div
					className={`${isMenuOpen
						? 'block'
						: 'hidden'}  sm:my-2 sm:flex lg:px-0 px-4 py-2 sm:space-x-2 sm:items-center bg-[#212121]  sm:bg-transparent absolute sm:relative w-full sm:w-auto left-0 top-[90px] sm:top-0 z-40`}
				>
					{menuItems.map((item) => (
						<Link
							key={item.label}
							href={item.path}
							onClick={closeMenu}
							className={`block my-3 px-4 lg:px-6 py-2 text-[14px] font-medium text-left text-[#353535] hover:bg-[#353535] hover:text-[#fff] sm:hover:bg-[#353535] ${pathname ===
							item.path
								? 'bg-[#353535] text-[#fff]'
								: ''}`}
						>
							{item.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
        </>
    )
};
