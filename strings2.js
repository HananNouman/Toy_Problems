//  Given a sequence of items and a specific item in that sequence, return the item
// 	immediately following the item specified. If the item occurs more than once in a sequence,
// 	return the item after the first occurence. This should work for a sequence of any type.
// 	When the item isn't present or nothing follows it, the function should return null
//  nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
//  nextItem("testing", "t") # "e"

	function nextItem(items, elem){
		// if (typeof elem =="object"){
	 //    for (var i = 0; i < items.length; i++) {

  //        if (items[i] == elem) {
  //          return items[i+1];
  //         }
  //           }
  //       return null;
  //      }

      
		if (items.indexOf(elem)<0 || items.indexOf(elem)==items.length-1){
			return null;
		}
		return items[items.indexOf(elem)+1]
		
	}

//  We need a function that can transform a number into a string.
// 	What ways of achieving this do you know?
// 	numberToString(123); // returns '123';`   
// 	numberToString(999); // returns '999';`

	function numberToString(num) {
	  var arr=[];
	  arr.push(num)
	  return arr.join("");
	}