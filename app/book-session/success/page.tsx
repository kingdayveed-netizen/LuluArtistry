"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Calendar, Clock, MapPin, User, CreditCard, Download } from "lucide-react";

const BookingSuccessPage = () => {
	const searchParams = useSearchParams();
	const [bookingData, setBookingData] = useState({
		service: "",
		artist: "",
		date: "",
		time: "",
		location: "",
		price: "",
		paymentMethod: "",
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
		const firstName = searchParams.get("firstName");
		const lastName = searchParams.get("lastName");
		const email = searchParams.get("email");
		const phone = searchParams.get("phone");

		if (service && artist && date && time && location && price && paymentMethod && firstName && lastName && email && phone) {
			setBookingData({
				service: service,
				artist: artist,
				date: date,
				time: time,
				location: location,
				price: price,
				paymentMethod: paymentMethod,
				firstName: firstName,
				lastName: lastName,
				email: email,
				phone: phone
			});
		}
	}, [searchParams]);

	const handleDownloadBooking = () => {
		// Create a simple booking confirmation text
		const bookingText = `
BOOKING CONFIRMATION - LULU'S ACADEMY

Customer: ${bookingData.firstName} ${bookingData.lastName}
Email: ${bookingData.email}
Phone: ${bookingData.phone}

Service: ${bookingData.service}
Artist: ${bookingData.artist}
Date: ${new Date(bookingData.date).toLocaleDateString('en-US', { 
	weekday: 'long', 
	month: 'long', 
	day: 'numeric', 
	year: 'numeric' 
})}
Time: ${bookingData.time}
Location: ${bookingData.location}

Payment Method: ${bookingData.paymentMethod}
Total: $${bookingData.price}

Thank you for choosing Lulu's Academy!
		`;

		// Create and download the file
		const blob = new Blob([bookingText], { type: 'text/plain' });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `booking-confirmation-${bookingData.firstName}-${bookingData.lastName}.txt`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
			{/* Success Modal */}
			<div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
				{/* Success Icon */}
				<div className="text-center mb-8">
					<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<CheckCircle className="text-green-500" size={48} />
					</div>
					<h1 className="text-3xl font-bold text-dark-gray mb-2">
						Booking Confirmed!
					</h1>
					<p className="text-lg text-gray-600">
						Your booking has been confirmed. We look forward to seeing you!
					</p>
				</div>

				{/* Booking Details */}
				<div className="bg-gray-50 rounded-lg p-6 mb-8">
					<h2 className="text-xl font-bold text-dark-gray mb-4">Booking Details</h2>
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

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4">
					<button
						onClick={handleDownloadBooking}
						className="flex-1 bg-primary-gold hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
					>
						<Download size={18} />
						Download Booking
					</button>
					<Link
						href="/book-session"
						className="flex-1 border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
					>
						Book Another Session
					</Link>
				</div>

				{/* Additional Info */}
				<div className="mt-8 p-4 bg-blue-50 rounded-lg">
					<p className="text-sm text-blue-800 text-center">
						📧 A confirmation email has been sent to {bookingData.email} with all the details.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BookingSuccessPage;
