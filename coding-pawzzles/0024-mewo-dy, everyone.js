let message = "Moew-dy";

function makeBanner(message) {
	let banner = {
		[message]: `${message} everyone!`,
	};
	return banner;
}

let banner1 = makeBanner(message);

console.log(banner1["message"]);
console.log(banner1["[message]"]);
