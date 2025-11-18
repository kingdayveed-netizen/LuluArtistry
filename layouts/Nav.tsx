"use client";

import { useState } from "react";
import { headerLinks, NavItem } from "@/utils/data";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Nav = () => {
	const [open, setOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const handleDropdownToggle = (title: string) => {
		setActiveDropdown(activeDropdown === title ? null : title);
	};

	const NavItem = ({ item }: { item: NavItem }) => {
		if (item.dropdown) {
			return (
				<div className="relative group">
					<button
						onClick={() => handleDropdownToggle(item.title)}
						className="flex items-center gap-1 text-gray-700 hover:text-primary-gold font-semibold transition-colors"
					>
						{item.title}
						<ChevronDown 
							size={16} 
							className={`transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`}
						/>
					</button>
					
					{/* Dropdown Menu */}
					{activeDropdown === item.title && (
						<div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
							{item.dropdown.map((dropdownItem, index) => (
								<Link
									key={index}
									href={dropdownItem.link}
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-gold/10 hover:text-primary-gold transition-colors"
									onClick={() => setActiveDropdown(null)}
								>
									{dropdownItem.title}
								</Link>
							))}
						</div>
					)}
				</div>
			);
		}

		return (
			<Link
				href={item.link!}
				className="text-gray-700 hover:text-primary-gold font-semibold transition-colors"
			>
				{item.title}
			</Link>
		);
	};

	return (
		<nav className='relative mt-5 mb-5'>
			{/* Desktop Nav */}
			<div className='hidden md:flex justify-center items-center gap-10'>
				{headerLinks.map((item, i) => (
					<NavItem key={i} item={item} />
				))}
			</div>

			{/* Mobile Nav Toggle */}
			<div className='md:hidden flex items-center justify-end'>
				<button onClick={() => setOpen(!open)} className='p-2'>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Nav Menu */}
			{open && (
				<div className='absolute top-12 left-0 w-full bg-white shadow-md flex flex-col gap-6 p-6 md:hidden z-50'>
					{headerLinks.map((item, i) => (
						<div key={i}>
							{item.dropdown ? (
								<div>
									<button
										onClick={() => handleDropdownToggle(item.title)}
										className="flex items-center gap-2 text-gray-700 hover:text-primary-gold font-semibold w-full text-left"
									>
										{item.title}
										<ChevronDown 
											size={16} 
											className={`transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`}
										/>
									</button>
									{activeDropdown === item.title && (
										<div className="ml-4 mt-2 space-y-2">
											{item.dropdown.map((dropdownItem, index) => (
												<Link
													key={index}
													href={dropdownItem.link}
													className="block text-sm text-gray-600 hover:text-primary-gold transition-colors"
													onClick={() => setOpen(false)}
												>
													{dropdownItem.title}
												</Link>
											))}
										</div>
									)}
								</div>
							) : (
								<Link
									href={item.link!}
									className='text-gray-700 hover:text-primary-gold font-semibold'
									onClick={() => setOpen(false)}
								>
									{item.title}
								</Link>
							)}
						</div>
					))}
				</div>
			)}
		</nav>
	);
};

export default Nav;
