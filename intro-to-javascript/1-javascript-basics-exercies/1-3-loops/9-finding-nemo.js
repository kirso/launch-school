let fish = ["Dory", "Marlin", "Gill", "Nemo", "Bruce"];

for (i = 0; i < fish.length; i++) {
	currentFish = fish[i];
	console.log(currentFish);
	if (currentFish === "Nemo") break;
}
