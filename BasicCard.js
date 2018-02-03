// basic card constuctor to be filled with users inputs

var BasicCard = function(front, back) {
 this.front = front;
 this.back = back;
 this.viewBasicCard = function(){
		console.log("You made a basic card!");
		console.log("Front: "+ this.front);
		console.log("Back: "+ this.back);
}
};


module.exports = BasicCard;