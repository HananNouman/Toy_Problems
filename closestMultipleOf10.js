 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	if (num%10>=5){
 	return Math.ceil(num/10)*10}
 	return Math.floor(num/10)*10
 	//your code is here
 }