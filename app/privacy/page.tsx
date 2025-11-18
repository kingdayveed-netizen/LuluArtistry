export default function PrivacyPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<div className="bg-primary-gray text-white py-12">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<h1 className="text-3xl md:text-4xl font-bold text-primary-gold">
						Privacy Policy
					</h1>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-4xl mx-auto px-6 py-16">
				<div className="prose prose-lg max-w-none">
					<section className="mb-8">
						<p className="text-gray-600 mb-6">
							At Lulu Artistry, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">Information We Collect</h2>
						<p className="text-gray-600 mb-4">
							We collect information that you provide directly to us when you:
						</p>
						<ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
							<li>Create an account or make a purchase</li>
							<li>Subscribe to our newsletter</li>
							<li>Contact us for customer support</li>
							<li>Participate in surveys or promotions</li>
							<li>Book a training session or appointment</li>
						</ul>
						<p className="text-gray-600 mb-4">
							The information we collect may include your name, email address, phone number, shipping address, billing address, payment information, and any other information you choose to provide.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">How We Use Your Information</h2>
						<p className="text-gray-600 mb-4">
							We use the information we collect to:
						</p>
						<ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
							<li>Process and fulfill your orders</li>
							<li>Send you order confirmations and shipping updates</li>
							<li>Respond to your inquiries and provide customer support</li>
							<li>Send you marketing communications (with your consent)</li>
							<li>Improve our website and services</li>
							<li>Detect and prevent fraud</li>
							<li>Comply with legal obligations</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">Information Sharing</h2>
						<p className="text-gray-600 mb-4">
							We do not sell, trade, or rent your personal information to third parties. We may share your information with:
						</p>
						<ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
							<li><strong>Service Providers:</strong> Third-party companies that help us operate our website, process payments, or deliver products</li>
							<li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
							<li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">Data Security</h2>
						<p className="text-gray-600 mb-4">
							We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">Your Rights</h2>
						<p className="text-gray-600 mb-4">
							You have the right to:
						</p>
						<ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
							<li>Access and receive a copy of your personal information</li>
							<li>Correct inaccurate or incomplete information</li>
							<li>Request deletion of your personal information</li>
							<li>Opt-out of marketing communications</li>
							<li>Object to processing of your personal information</li>
						</ul>
						<p className="text-gray-600">
							To exercise these rights, please contact us at <a href="mailto:info@lulustore.com" className="text-primary-gold hover:underline">info@lulustore.com</a>.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">Cookies</h2>
						<p className="text-gray-600 mb-4">
							We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">Changes to This Policy</h2>
						<p className="text-gray-600 mb-4">
							We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
						<p className="text-gray-600 mb-4">
							If you have any questions about this Privacy Policy or our data practices, please contact us:
						</p>
						<p className="text-gray-600">
							Email: <a href="mailto:info@lulustore.com" className="text-primary-gold hover:underline">info@lulustore.com</a>
						</p>
						<p className="text-gray-600">
							Phone: <a href="tel:+23490000000" className="text-primary-gold hover:underline">+234 90000000</a>
						</p>
					</section>

					{/* Newsletter */}
					<section className="mt-12 bg-[#fff9ef] p-8 rounded-lg">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
							Glam In Your Inbox
						</h2>
						<p className="text-gray-600 text-center mb-6">
							Be the first to hear about new arrivals, exclusive deals, and beauty tips made just for you.
						</p>
						<form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Your Email address"
								className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-primary-gold focus:border-transparent"
							/>
							<button
								type="submit"
								className="bg-primary-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors whitespace-nowrap"
							>
								Subscribe & Stay Beautiful
							</button>
						</form>
					</section>
				</div>
			</div>
		</div>
	);
}

