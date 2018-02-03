var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var inquirer = require('inquirer');

// make new card inquirer with questions for Basic and Cloze
function makeCard() {
    inquirer.prompt([{
            name: "introMessage",
            type: "list",
            message: "Which card would you like to make?",
            choices: ["Basic", "Cloze"]
        },
        {
            name: "basicFront",
            type: "input",
            message: "Write your message for the front of the card",
            // when the user answers Basic
            when: function(answers) {
			return answers.introMessage === "Basic"
            }
        },
        {
            name: "basicBack",
            type: "input",
            message: "Write the answer for the back of the card",
            when: function(answers) {
			return answers.basicFront
			}
        },
        {
            name: "fullText",
            type: "input",
            message: "What is the full question?",
            when: function(answers) {
			return answers.introMessage === "Cloze"
			}
        },
        {
            name: "clozeHidden",
            type: "input",
            message: "Which part of the message should be hidden?",
            when: function(answers) {
			return answers.fullText
			}

        }
// return the users responses
// this will create a new object with the answers provided within inquirer
// it will then run the view function to view the results placed on the cards placeholders
    ]).then(function(answers) {
    if (answers.introMessage === "Basic") {
        var newBasicCard = new BasicCard(answers.basicFront, answers.basicBack);
        newBasicCard.viewBasicCard();
    } else if (answers.introMessage === "Cloze") {
        var newClozeCard = new ClozeCard(answers.fullText, answers.clozeHidden);
        newClozeCard.viewClozeCard();
    }
    // asks the user if they would like to make another card
    restart();
});
}
// placed here so it will not start the app twice on restart function
makeCard();

function restart () {
	inquirer.prompt([
	{
		name:"restart",
		type:"list",
		message:"Would you like to make another card?",
		choices: ["Yes", "No"]
	}	
		]).then(function(answers){
			if (answers.restart === "Yes") {
				makeCard();
			}

			else {
				console.log("Exiting the application");
			}
		});
}