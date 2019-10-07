console.log("Hello World from basic JavaScript")

function onButtonClicked() {
	console.log("I'm in the button click event");
}
function size() {
	
	
	let a = document.getElementById("textInput").value;
	let b = parseInt(a);
	console.log(b + 1);

	let ans = ""
	a < 10 ? ans = "small" : 9 < a && a < 20 ? ans = "med" : ans = "large";
	console.log (ans);
	document.getElementById('display here').innerHTML = ans;
}
function mouseOver() {
	  document.getElementById("mouse").innerHTML= "Hello from Alberta";
	}
function mouseOut(){
		document.getElementById("mouse").innerHTML= "Hello from HTML";
}
