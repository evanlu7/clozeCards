// cloze card constructor to be filled with users input

var clozeCard = function (text,cloze, partial) {
	this.text=text;
	this.cloze=cloze;
	// this will take the full text, the replace the cloze text with an underline
	this.partial=this.text.replace(cloze, "_____");
	this.errorMessage=function () {
		console.log("Error");
}
	this.viewClozeCard = function () {
	console.log("Cloze Card created!");
	console.log("partial text:" + this.partial);
	console.log("hidden Cloze text:" + this.cloze);
	console.log("Full text:" + this.text)
		
	};

}
module.exports = clozeCard;