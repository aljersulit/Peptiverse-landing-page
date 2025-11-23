import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ProductDeepDive } from "./components/ProductDeepDive";
import { HowToVideoSection } from "./components/HowToVideoSection";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { GallerySection } from "./components/GallerySection";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";
import { FEEDBACK_ITEMS, TRANSACTION_ITEMS, DELIVERY_ITEMS } from "./constants";
import { Menu, X } from "lucide-react";

const App: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Handle scroll for navbar styling
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const NavLink = ({
		href,
		children,
	}: {
		href: string;
		children: React.ReactNode;
	}) => (
		<a
			href={href}
			onClick={() => setIsMobileMenuOpen(false)}
			className="text-slate-600 hover:text-brand-600 font-medium transition-colors"
		>
			{children}
		</a>
	);

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<nav
				className={`fixed w-full z-40 transition-all duration-300 ${
					scrolled
						? "bg-white/90 backdrop-blur-md shadow-sm py-4"
						: "bg-transparent py-6"
				}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<img
							src="/image/peptiverse.jpg"
							alt="Peptiverse"
							className="h-12 w-auto object-contain"
							onError={(e) => {
								// Fallback if image fails
								e.currentTarget.style.display = "none";
								e.currentTarget.nextElementSibling?.classList.remove(
									"hidden"
								);
							}}
						/>
						{/* Fallback Text if image missing */}
						<span className="text-2xl font-bold tracking-tight text-slate-900 hidden">
							Peptiverse
						</span>
					</div>

					{/* Desktop Nav */}
					<div className="hidden md:flex gap-8">
						<NavLink href="#about">Product</NavLink>
						<NavLink href="#feedbacks">Reviews</NavLink>
						<NavLink href="#proofs">Verification</NavLink>
						<NavLink href="#contact">Contact</NavLink>
						<NavLink href="#faq">FAQ</NavLink>
					</div>

					<div className="hidden md:block">
						<a
							href="#contact"
							className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors"
						>
							Get Started
						</a>
					</div>

					{/* Mobile Toggle */}
					<button
						className="md:hidden text-slate-900"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg p-4 flex flex-col gap-4">
						<NavLink href="#about">Product Info</NavLink>
						<NavLink href="#feedbacks">Feedbacks</NavLink>
						<NavLink href="#proofs">Proof of Legitimacy</NavLink>
						<NavLink href="#contact">Contact</NavLink>
						<NavLink href="#faq">FAQ</NavLink>
						<hr className="border-slate-100" />
						<a
							href="#contact"
							onClick={() => setIsMobileMenuOpen(false)}
							className="bg-brand-600 text-white text-center py-3 rounded-lg font-medium"
						>
							Order Now
						</a>
					</div>
				)}
			</nav>

			{/* Main Content */}
			<main>
				<Hero />
				<AboutSection />
				<ProductDeepDive />
				<HowToVideoSection />

				{/* Gallery Group */}
				<div id="feedbacks">
					<GallerySection
						title="Client Success Stories"
						subtitle="Real feedback from our valued community."
						items={FEEDBACK_ITEMS}
						id="feedbacks-gallery"
					/>
				</div>

				<div id="proofs">
					<GallerySection
						title="Verified Transactions"
						subtitle="Transparency is our priority. See our recent activity."
						items={TRANSACTION_ITEMS}
						id="transactions"
						bgColor="slate"
					/>

					<GallerySection
						title="Successful Deliveries"
						subtitle="Tracked, insured, and delivered on time."
						items={DELIVERY_ITEMS}
						id="deliveries"
					/>
				</div>

				<FAQSection />
				<ContactSection />
			</main>

			<Footer />
			<ChatWidget />
		</div>
	);
};

export default App;

