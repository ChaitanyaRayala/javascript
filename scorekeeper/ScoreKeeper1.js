var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p span");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var isGameOver = false;
var winningScore = 5;

console.log(p1Display);

p1Button.addEventListener("click", function(){
	if(!isGameOver){
		p1Score ++;
		if(p1Score === winningScore){
			isGameOver = true;
			p1Display.classList.add("greenColor");
		}
		p1Display.textContent = p1Score;
	}
})

p2Button.addEventListener("click", function(){
	if(!isGameOver){
		p2Score ++;
		if(p2Score === winningScore){
			isGameOver = true;
			p2Display.classList.add("greenColor");
		}
		p2Display.textContent = p2Score;
	}
})

resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	isGameOver = false;
	p1Display.textContent = 0;
	p1Display.classList.remove("greenColor");
	p1Score = 0;

	p2Display.textContent = 0;
	p2Display.classList.remove("greenColor");
	p2Score = 0;
}

numInput.addEventListener("change", function(){
	p.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})