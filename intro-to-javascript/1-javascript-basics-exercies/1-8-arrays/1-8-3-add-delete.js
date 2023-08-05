function addDelete(energy) {
	energy.shift();
	energy.push("geothermal");
	return energy;
}

addDelete(["fossil", "solar", "wind", "tidal", "fusion"]);
