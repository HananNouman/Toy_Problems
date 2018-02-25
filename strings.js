// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		var alphabetarray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z"]
       var char=character.toLowerCase();
             if (alphabetarray.indexOf(char)+1 < 1){
         	     return " its not one of the alphabet letters "
                }
		 return  "Position of alphabet: "+(alphabetarray.indexOf(char)+1)
		}
	

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		var result="";
		for (var i=0;i<s;i++){
			result=result+n;

		}
		return result;
		
	}