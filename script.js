const yourPosition = async function () {
	try {
		const getCoords = function () {
			return new Promise(function (resolve, reject) {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});
		};

		const res = await getCoords();
		const { latitude: lat, longitude: log } = res.coords;
		// console.log(lat, log);
		const resGeo = await fetch(
			`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${log}&localityLanguage=en`
		);
		console.log(resGeo);
		if (!resGeo.ok)
			throw new Error("Something happened getting location data!!");
		const data = await resGeo.json();
		console.log(`You are in ${data.city}, ${data.countryName}`);
	} catch (err) {
		console.log(`⚠️ Something went wrong 💥`);
	}
};
yourPosition();
