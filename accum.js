// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
    	var inputL=input.toLowerCase();
    	var arr=[];
    	for (var i=0;i<inputL.length;i++){
    		str="";
    		str=str+inputL[i].toUpperCase();
    		for (var j=1;j<=i;j++){
    			str=str+inputL[i];
    		}
    		arr.push(str)

    	}
       return arr.join("-")
    }