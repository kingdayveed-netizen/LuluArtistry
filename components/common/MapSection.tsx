const MapSection = () => {
	// To get the correct embed URL for your exact location:
	// 1. Go to https://www.google.com/maps and search for "Unogwu plaza, Marian road, Calabar"
	// 2. Click the "Share" button
	// 3. Select "Embed a map"
	// 4. Copy the iframe src URL and replace the mapEmbedUrl below
	// For now, using a basic embed - replace with your actual embed URL from Google Maps
	const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127190.52409893827!2d8.25179715340147!3d4.988779739248927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUnogwu%20plaza%2C%20Marian%20road%2C%20opposite%20Trans-Calabar%20(TCC)%2C%20Cross%20River!5e0!3m2!1sen!2sng!4v1762098412021!5m2!1sen!2sng`;

	return (
		<div className='bg-white py-12'>
			<div className='max-w-6xl mx-auto px-6'>
				<h2 className='text-2xl md:text-3xl font-bold mb-6 text-dark-gray text-center'>
					Visit Us
				</h2>
				<p className='text-gray-700 mb-8 text-center'>
					Unogwu plaza, Marian road, opposite Trans-Calabar (TCC), Cross River
				</p>
				<div className='rounded-lg overflow-hidden h-96 shadow-lg'>
					<iframe
						src={mapEmbedUrl}
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="w-full h-full"
						title="Lulu Artistry Location Map"
					/>
				</div>
			</div>
		</div>
	);
};

export default MapSection;
