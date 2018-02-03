var clozeCard = function (text,cloze, partial) {
	this.text=text;
	this.cloze=cloze;
	this.partial=partial;
	this.errorMessage=function () {
		console.log("Error");
}
	this.viewClozeCard = function () {
	console.log("Cloze Card created!")
	console.log("Hidden text:" + this.partial)
	console.log("Full text:" + cloze + partial)
		
	};

}
module.exports = clozeCard;