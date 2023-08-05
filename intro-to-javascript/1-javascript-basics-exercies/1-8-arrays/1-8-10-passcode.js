let passcode = ["11", "jZ5", "hQ3f*", "8!7g3", "p3Fs"];

passcode.join("-");

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

let joinedPass = "";

for (let i = 0; i < passcode.length; i++) {
	if (i > 0) {
		joinedPass += "-";
	}
	joinedPass += passcode[i];
}

console.log(joinedPass);
