import MapSection from "@/components/common/MapSection";

export default function FAQPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<div className="bg-primary-gray text-white py-12">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<h1 className="text-3xl md:text-4xl font-bold text-primary-gold">
						Frequently Asked Questions (FAQ)
					</h1>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-4xl mx-auto px-6 py-16">
				{/* General Information */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">General Information</h2>
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">How do I place an order?</h3>
							<p className="text-gray-600">
								You can place an order directly through our website by adding products to your cart and proceeding to checkout. Follow the simple steps to complete your purchase.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">How can I track my order?</h3>
							<p className="text-gray-600">
								Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order status on our website or the shipping carrier's website.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">What are your delivery times?</h3>
							<p className="text-gray-600">
								Standard delivery times are 3-5 business days for local orders and 7-14 business days for international orders. Express shipping options are available at checkout.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">Can I cancel my order?</h3>
							<p className="text-gray-600">
								Orders can be cancelled within 24 hours of placement, provided they haven't been shipped. Please contact our customer service team immediately if you need to cancel.
							</p>
						</div>
					</div>
				</section>

				{/* Payment */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Payment</h2>
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">What payment methods do you accept?</h3>
							<p className="text-gray-600">
								We accept all major credit cards, debit cards, bank transfers, and mobile payment options. All transactions are secure and encrypted.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">I'm having payment issues. What should I do?</h3>
							<p className="text-gray-600">
								If you encounter any payment issues, please contact our support team at info@lulustore.com or call us at +234 90000000. We'll help resolve the issue promptly.
							</p>
						</div>
					</div>
				</section>

				{/* Product Info */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Product Information</h2>
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">What's the difference between your products?</h3>
							<p className="text-gray-600">
								Our products vary by category (lashes, brows, spa, tattoos) and are designed for different needs. Each product page includes detailed descriptions, specifications, and usage instructions.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">Do you have different sizes available?</h3>
							<p className="text-gray-600">
								Yes, many of our products come in various sizes. Size options are listed on each product page. If you need assistance choosing the right size, contact our team.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">How do I care for my products?</h3>
							<p className="text-gray-600">
								Care instructions are provided with each product. Generally, we recommend storing products in a cool, dry place and following the specific care guidelines included in your order.
							</p>
						</div>
					</div>
				</section>

				{/* Training */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Training</h2>
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">Do you offer training courses?</h3>
							<p className="text-gray-600">
								Yes, we offer comprehensive training courses for various beauty services including lash extensions, brow treatments, and more. Visit our Training page to learn more and book a session.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">Will I receive a certificate after training?</h3>
							<p className="text-gray-600">
								Yes, upon successful completion of our training courses, you will receive a certificate of completion that you can use to showcase your skills.
							</p>
						</div>
					</div>
				</section>

				{/* Returns & Support */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Returns & Support</h2>
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">What is your return policy?</h3>
							<p className="text-gray-600">
								We accept returns within 14 days of delivery for unused, unopened products in their original packaging. Please see our Return & Refund Policy page for full details.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">How do I request a refund?</h3>
							<p className="text-gray-600">
								To request a refund, please contact us at info@lulustore.com with your order number and reason for return. Our team will process your request within 5-7 business days.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2 text-gray-700">My order is missing items. What should I do?</h3>
							<p className="text-gray-600">
								If your order is missing items, please contact our support team immediately at info@lulustore.com or +234 90000000. We'll investigate and resolve the issue as quickly as possible.
							</p>
						</div>
					</div>
				</section>

				{/* Still Have Questions */}
				<section className="mb-12 bg-gray-50 p-8 rounded-lg">
					<h2 className="text-2xl font-bold mb-4 text-gray-800">Still Have Questions?</h2>
					<p className="text-gray-600 mb-4">
						If you couldn't find the answer you're looking for, feel free to reach out to us. We're here to help!
					</p>
					<p className="text-gray-700">
						Email us at: <a href="mailto:info@lulustore.com" className="text-primary-gold hover:underline">info@lulustore.com</a>
					</p>
				</section>

				{/* Newsletter */}
				<section className="mb-12 bg-[#fff9ef] p-8 rounded-lg">
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

			{/* Map Section */}
			<MapSection />
		</div>
	);
}

