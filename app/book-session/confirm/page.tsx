"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin, User, CreditCard } from "lucide-react";

const ConfirmBookingPageContent = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [bookingData, setBookingData] = useState({
		service: "",
		artist: "",
		date: "",
		time: "",
		location: "",
		price: "",
		paymentMethod: ""
	});

	const [customerData, setCustomerData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: ""
	});

	useEffect(() => {
		const service = searchParams.get("service");
		const artist = searchParams.get("artist");
		const date = searchParams.get("date");
		const time = searchParams.get("time");
		const location = searchParams.get("location");
		const price = searchParams.get("price");
		const paymentMethod = searchParams.get("paymentMethod");

		if (service && artist && date && time && location && price && paymentMethod) {
			setBookingData({
				service: service,
				artist: artist,
				date: date,
				time: time,
				location: location,
				price: price,
				paymentMethod: paymentMethod
			});
		}
	}, [searchParams]);

	const handleInputChange = (field: string, value: string) => {
		setCustomerData(prev => ({ ...prev, [field]: value }));
	};

	const handleConfirmBooking = () => {
		// Validate customer information
		if (!customerData.firstName || !customerData.lastName || !customerData.email || !customerData.phone) {
			alert("Please fill in all required fields");
			return;
		}

		// Navigate to success page
		const params = new URLSearchParams({
			...bookingData,
			...customerData
		});
		
		router.push(`/book-session/success?${params.toString()}`);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<div className="bg-white border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
					<div className="flex items-center gap-4 mb-4">
						<Link 
							href="/book-session/payment"
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
						Confirm Your Booking.
					</p>
				</div>
			</div>

			<div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Confirmation Form */}
					<div className="lg:col-span-2">
						<div className="bg-white rounded-2xl shadow-lg p-8">
							<h2 className="text-2xl font-bold text-dark-gray mb-6">Confirm Your Booking</h2>
							
							{/* Booking Summary */}
							<div className="bg-gray-50 rounded-lg p-6 mb-8">
								<h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
								<div className="space-y-3 text-sm">
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
										<span className="text-gray-600">Artist:</span>
										<span className="font-medium">{bookingData.artist}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Price:</span>
										<span className="font-medium">${bookingData.price}</span>
									</div>
								</div>
							</div>

							{/* Customer Information */}
							<div className="space-y-6">
								<h3 className="text-xl font-semibold text-dark-gray">Customer Information</h3>
								
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											First Name *
										</label>
										<input
											type="text"
											value={customerData.firstName}
											onChange={(e) => handleInputChange("firstName", e.target.value)}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent"
											required
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Last Name *
										</label>
										<input
											type="text"
											value={customerData.lastName}
											onChange={(e) => handleInputChange("lastName", e.target.value)}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent"
											required
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Email *
									</label>
									<input
										type="email"
										value={customerData.email}
										onChange={(e) => handleInputChange("email", e.target.value)}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent"
										required
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Phone Number *
									</label>
									<input
										type="tel"
										value={customerData.phone}
										onChange={(e) => handleInputChange("phone", e.target.value)}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent"
										required
									/>
								</div>
							</div>

							{/* Confirm Booking Button */}
							<div className="mt-8">
								<button
									onClick={handleConfirmBooking}
									className="w-full bg-primary-gold hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
								>
									Confirm Booking
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

const ConfirmBookingPage = () => {
	return (
		<Suspense fallback={<div className="min-h-screen bg-white p-8">Loading confirmation details...</div>}>
			<ConfirmBookingPageContent />
		</Suspense>
	);
};

export default ConfirmBookingPage;
