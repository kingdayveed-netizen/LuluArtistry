export default function ShippingPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<div className="bg-primary-gray text-white py-12">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<h1 className="text-3xl md:text-4xl font-bold text-primary-gold">
						Shipping Information Policy
					</h1>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-4xl mx-auto px-6 py-16">
				<div className="prose prose-lg max-w-none">
					{/* Shipping Information */}
					<section className="mb-12">
						<h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Shipping Information</h2>
						
						<div className="mb-6">
							<h3 className="text-lg font-semibold mb-3 text-gray-700">Shipping Times</h3>
							<p className="text-gray-600 mb-4">
								We process and ship orders within 1-2 business days. Once your order is shipped, you will receive a tracking number via email.
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
								<li><strong>Local Delivery:</strong> 3-5 business days</li>
								<li><strong>Express Shipping:</strong> 1-2 business days (additional fee applies)</li>
								<li><strong>International Shipping:</strong> 7-14 business days</li>
							</ul>
						</div>

						<div className="mb-6">
							<h3 className="text-lg font-semibold mb-3 text-gray-700">Shipping Costs</h3>
							<p className="text-gray-600 mb-4">
								Shipping costs are calculated at checkout based on your location and selected shipping method.
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
								<li><strong>Free Shipping:</strong> Available on orders over ₦50,000</li>
								<li><strong>Standard Shipping:</strong> ₦2,000 - ₦5,000 depending on location</li>
								<li><strong>Express Shipping:</strong> ₦5,000 - ₦10,000 depending on location</li>
								<li><strong>International Shipping:</strong> Calculated based on destination and weight</li>
							</ul>
						</div>

						<div className="mb-6">
							<h3 className="text-lg font-semibold mb-3 text-gray-700">Order Tracking</h3>
							<p className="text-gray-600 mb-4">
								Once your order ships, you'll receive an email with a tracking number. You can use this number to track your package on our website or the carrier's website.
							</p>
							<p className="text-gray-600">
								If you have any questions about your shipment, please contact us at <a href="mailto:info@lulustore.com" className="text-primary-gold hover:underline">info@lulustore.com</a> with your order number.
							</p>
						</div>
					</section>

					{/* Terms & Conditions */}
					<section className="mb-12">
						<h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Terms & Conditions</h2>
						
						<div className="mb-6">
							<h3 className="text-lg font-semibold mb-3 text-gray-700">Ordering</h3>
							<p className="text-gray-600 mb-4">
								By placing an order on our website, you agree to provide accurate and complete information. We reserve the right to refuse or cancel any order at our discretion.
							</p>
						</div>

						<div className="mb-6">
							<h3 className="text-lg font-semibold mb-3 text-gray-700">Website Usage</h3>
							<p className="text-gray-600 mb-4">
								This website is provided for your personal, non-commercial use. You may not reproduce, distribute, or transmit any content from this website without our prior written consent.
							</p>
						</div>

						<div className="mb-6">
							<h3 className="text-lg font-semibold mb-3 text-gray-700">Intellectual Property</h3>
							<p className="text-gray-600 mb-4">
								All content on this website, including text, graphics, logos, images, and software, is the property of Lulu Artistry and is protected by copyright and other intellectual property laws.
							</p>
						</div>

						<div className="mb-6">
							<h3 className="text-lg font-semibold mb-3 text-gray-700">Limitation of Liability</h3>
							<p className="text-gray-600 mb-4">
								Lulu Artistry shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or purchase of our products.
							</p>
						</div>

						<div className="mb-6">
							<h3 className="text-lg font-semibold mb-3 text-gray-700">Changes to Terms</h3>
							<p className="text-gray-600 mb-4">
								We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website constitutes acceptance of any changes.
							</p>
						</div>
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

