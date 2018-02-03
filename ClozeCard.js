var BasicCard = require("./BasicCard.js");

var clozeCard = function (text,cloze) {
	this.text=text;
	this.cloze=cloze;
	this.hiddenText=hiddenText;
	this.partialText=partialText;
	this.errorMessage=function () {
		console.log("Error");
}
	this.viewClozeCard = function () {
	console.log("Cloze Card created!"
		"Partial text:" + partialText
		"Hidden text:" + hiddenText
		"Full text:" + hiddenText +partialText
		)
	};

}
















module.exports = ClozeCard;