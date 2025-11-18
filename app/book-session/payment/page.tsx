"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, Calendar, Clock, MapPin, User } from "lucide-react";

const PaymentPage = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [bookingData, setBookingData] = useState({
		service: "",
		artist: "",
		date: "",
		time: "",
		location: ""
	});

	const [paymentData, setPaymentData] = useState({
		cardNumber: "",
		expiryDate: "",
		cvv: "",
		paymentMethod: "card"
	});

	useEffect(() => {
		const service = searchParams.get("service");
		const artist = searchParams.get("artist");
		const date = searchParams.get("date");
		const time = searchParams.get("time");
		const location = searchParams.get("location");

		if (service && artist && date && time && location) {
			setBookingData({
				service: service,
				artist: artist,
				date: date,
				time: time,
				location: location
			});
		}
	}, [searchParams]);

	const getServicePrice = (service: string) => {
		const prices: { [key: string]: number } = {
			"classic-lashes": 120,
			"hybrid-lashes": 140,
			"volume-lashes": 160,
			"lash-lift": 80,
			"lash-tint": 60,
			"lash-removal": 40,
			"classic-lash-training": 300,
			"volume-lash-training": 350,
			"lash-lift-training": 250
		};
		return prices[service] || 120;
	};

	const price = getServicePrice(bookingData.service);

	const handlePaymentMethodChange = (method: string) => {
		setPaymentData(prev => ({ ...prev, paymentMethod: method }));
	};

	const handleInputChange = (field: string, value: string) => {
		setPaymentData(prev => ({ ...prev, [field]: value }));
	};

	const handlePayNow = () => {
		// Validate payment form
		if (paymentData.paymentMethod === "card") {
			if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv) {
				alert("Please fill in all payment details");
				return;
			}
		}

		// Navigate to confirmation page
		const params = new URLSearchParams({
			...bookingData,
			price: price.toString(),
			paymentMethod: paymentData.paymentMethod
		});
		
		router.push(`/book-session/confirm?${params.toString()}`);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<div className="bg-white border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
					<div className="flex items-center gap-4 mb-4">
						<Link 
							href="/book-session/appointment"
							className="flex items-center gap-2 text-primary-gold hover:text-yellow-500"
						>
							<ArrowLeft size={20} />
							<span>Back</span>
						</Link>
					</div>
					<h1 className="text-3xl md:text-4xl font-bold text-dark-gray mb-2">
						Book a Session - Lulu's Academy
					</h1>
					<p className="text-lg text-gray-600">
						Payment Options.
					</p>
				</div>
			</div>

			<div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Payment Form */}
					<div className="lg:col-span-2">
						<div className="bg-white rounded-2xl shadow-lg p-8">
							<h2 className="text-2xl font-bold text-dark-gray mb-6">Payment Options</h2>
							
							{/* Booking Summary */}
							<div className="bg-gray-50 rounded-lg p-6 mb-8">
								<h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span className="text-gray-600">Service:</span>
										<span className="font-medium">{bookingData.service}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Date & Time:</span>
										<span className="font-medium">
											{new Date(bookingData.date).toLocaleDateString('en-US', { 
												weekday: 'short', 
												month: 'short', 
												day: 'numeric', 
												year: 'numeric' 
											})}, {bookingData.time}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Location:</span>
										<span className="font-medium">{bookingData.location}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Price:</span>
										<span className="font-medium">${price.toFixed(2)}</span>
									</div>
								</div>
							</div>

							{/* Payment Methods */}
							<div className="space-y-6">
								{/* Credit Card */}
								<div className="border border-gray-200 rounded-lg p-6">
									<div className="flex items-center gap-3 mb-4">
										<input
											type="radio"
											id="card"
											name="paymentMethod"
											value="card"
											checked={paymentData.paymentMethod === "card"}
											onChange={(e) => handlePaymentMethodChange(e.target.value)}
											className="text-primary-gold focus:ring-primary-gold"
										/>
										<CreditCard className="text-gray-600" size={20} />
										<label htmlFor="card" className="font-semibold">Credit Card</label>
									</div>
									
									{paymentData.paymentMethod === "card" && (
										<div className="space-y-4">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Card Number
												</label>
												<input
													type="text"
													value={paymentData.cardNumber}
													onChange={(e) => handleInputChange("cardNumber", e.target.value)}
													placeholder="1234 5678 9012 3456"
													className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent"
												/>
											</div>
											<div className="grid grid-cols-2 gap-4">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Expiry Date
													</label>
													<input
														type="text"
														value={paymentData.expiryDate}
														onChange={(e) => handleInputChange("expiryDate", e.target.value)}
														placeholder="MM/YY"
														className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent"
													/>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														CVV
													</label>
													<input
														type="text"
														value={paymentData.cvv}
														onChange={(e) => handleInputChange("cvv", e.target.value)}
														placeholder="123"
														className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent"
													/>
												</div>
											</div>
										</div>
									)}
								</div>

								{/* PayPal */}
								<div className="border border-gray-200 rounded-lg p-6">
									<div className="flex items-center gap-3">
										<input
											type="radio"
											id="paypal"
											name="paymentMethod"
											value="paypal"
											checked={paymentData.paymentMethod === "paypal"}
											onChange={(e) => handlePaymentMethodChange(e.target.value)}
											className="text-primary-gold focus:ring-primary-gold"
										/>
										<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
											<span className="text-white font-bold text-sm">P</span>
										</div>
										<label htmlFor="paypal" className="font-semibold">PayPal</label>
									</div>
								</div>

								{/* Apple Pay */}
								<div className="border border-gray-200 rounded-lg p-6">
									<div className="flex items-center gap-3">
										<input
											type="radio"
											id="apple"
											name="paymentMethod"
											value="apple"
											checked={paymentData.paymentMethod === "apple"}
											onChange={(e) => handlePaymentMethodChange(e.target.value)}
											className="text-primary-gold focus:ring-primary-gold"
										/>
										<div className="w-8 h-8 bg-black rounded flex items-center justify-center">
											<span className="text-white font-bold text-sm">🍎</span>
										</div>
										<label htmlFor="apple" className="font-semibold">Apple Pay</label>
									</div>
								</div>

								{/* Google Pay */}
								<div className="border border-gray-200 rounded-lg p-6">
									<div className="flex items-center gap-3">
										<input
											type="radio"
											id="google"
											name="paymentMethod"
											value="google"
											checked={paymentData.paymentMethod === "google"}
											onChange={(e) => handlePaymentMethodChange(e.target.value)}
											className="text-primary-gold focus:ring-primary-gold"
										/>
										<div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
											<span className="text-white font-bold text-sm">G</span>
										</div>
										<label htmlFor="google" className="font-semibold">Google Pay</label>
									</div>
								</div>
							</div>

							{/* Total */}
							<div className="border-t border-gray-200 pt-6 mt-8">
								<div className="flex justify-between items-center text-xl font-bold">
									<span>Total</span>
									<span>${price.toFixed(2)}</span>
								</div>
							</div>

							{/* Pay Now Button */}
							<div className="mt-8">
								<button
									onClick={handlePayNow}
									className="w-full bg-primary-gold hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
								>
									Pay Now
								</button>
							</div>
						</div>
					</div>

					{/* About Lulu Sidebar */}
					<div className="lg:col-span-1">
						<div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
							<h3 className="text-xl font-bold text-dark-gray mb-4">
								About Lulu - Beauty & Skills
							</h3>
							<div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
								<Image
									src="/api/placeholder/300/200"
									alt="About Lulu"
									fill
									className="object-cover"
								/>
							</div>
							<p className="text-gray-600 text-sm leading-relaxed">
								With over 5 years of experience in the beauty industry, Lulu has mastered the art of lash extensions and beauty enhancement. Her passion for perfection ensures you'll leave feeling confident and beautiful.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
