window.onload = function () {
	var keys = document.getElementsByClassName ('number');
	for(var i=0; i<keys.length; i++){
		keys[i].addEventListener('click', saveNumber);
		// keys[i].addEventListener('click', function(){
		// 	numbers.push(this.innerHTML);
		 	displayAnswer(this.innerHTML);
		// });
	}
	var operations = document.getElementsByClassName ('math');
	for(var i=0; i < operations.length; i++) {
		operations[i].addEventListener('click',saveOps);
        // operations[i].addEventListener('click', function(){
        //     op.push(this.innerHTML);
        // });
    }

    var display=document.getElementById('screen');
    	display.innerHTML=''; //ensures that the page does not have undefined on screen when loading
    var clear=document.getElementById('clear');
    clear.addEventListener('click',function(){
    	display.innerHTML='';
    	document.location.reload(true); //this clears the entire page and starts over
    	
    });
    var decimal=document.getElementById('point');
    decimal.addEventListener('click', function(){
    	console.log("I'm a decimal");
    });
     var equals = document.getElementById('equals');
     equals.addEventListener('click', function(){
     	performMath(ops);
     });
}

var num1= '';
var num2= '';
var ops= '';
var display = document.getElementById('screen');
// var numbers = [];
// var op = [];

//function that calls back to numbers
var saveNumber = function(){
	if(ops === ''){
		num1 += this.innerText;
		display.innerText = num1;

	}else{
		num2 += this.innerText;
		display.innerText= num1 + ' ' + ops + ' ' + num2;

	}
	

}
var saveOps = function(){
	if (this.innerText === '='){
		performMath(ops);
	}else{
		ops=this.innerText;
		display.innerText = num1 + ' ' + ops;
		console.log(ops);
	}
	

}
 var displayAnswer = function(answer){
 	 var display = document.getElementById('screen');
 	 display.innerHTML = answer;
 }

var performMath = function(ops){	
	
	if( ops == "+"){
		add();
	}else if( ops == "-"){
		 subtract();
	
	}else if ( ops == "/"){
			divide();
	}else if ( ops == "X"){
			multiply();
	}

	// if( op[0] == "+"){
	// 	add();
	// }else if( op[0] == "-"){
	// 	 subtract();
	
	// }else if ( op[0] == "/"){
	// 		divide();
	// }else if ( op[0] == "X"){
	// 		multiply();
	// } else{
	// 	console.log('No Operation')
	// }

}
var add= function(){
	console.log('adding');
	var answer=parseFloat(num1)+parseFloat(num2);
	
	// var answer = Math.floor(nums[0]) + Math.floor(nums[1]);
	 displayAnswer(answer);
}
var subtract= function(){
	console.log('subtracting');
	var answer=parseFloat(num1)-parseFloat(num2);
	
	// var answer = Math.floor(nums[0]) - Math.floor(nums[1]);
	 displayAnswer(answer);
	
}
var divide=function() {
	console.log('dividing');
	var answer=parseFloat(num1) / parseFloat(num2);
	
	// var answer = Math.floor(nums[0]) / Math.floor(nums[1]);
	 displayAnswer(answer);
}
var multiply=function(){
	console.log('multiplying');
	var answer=parseFloat(num1) * parseFloat(num2);
	
	// var answer = Math.floor(nums[0]) * Math.floor(nums[1]);
	 displayAnswer(answer);
}


