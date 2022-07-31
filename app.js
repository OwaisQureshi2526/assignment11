// var result = 1;
// function power(a, b) {
//     for (i = 1; i <= b; i++) {
//         console.log(i)
//         result = a * result;
//     }
//     console.log(result)
// }

// power(2, 3)

//2

// function checkYear(year) {

//     if (year % 400 == 0)
//         return true;

//     if (year % 100 == 0)
//         return false;

//     if (year % 4 == 0)
//         return true;
//     return false;
// }
//     document.write(checkYear(2000) ? "Leap Year" : "Not a Leap Year");

//3

// var a = 3.0;
// var b = 4.0;
// var c = 5.0;

// function findArea( a,  b,  c){

//     if (a < 0 || b < 0 || c < 0 || (a + b <= c) || a + c <= b || b + c <= a) {
//         document.write( "Not a valid triangle");
//         return;
//     }
//     var s = (a + b + c) / 2;
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
 
//   document.write( "Area is " + findArea(a, b, c));

//4

// var x = +prompt("Enter the obtained marks in first subject") 
//   var y = +prompt("Enter the obtained marks in second subject") 
//   var z = +prompt("Enter the obtained marks in third subject") 
  
//   function main() { 
//       var j = avg(x,y,z); 
//       var h = perc(x,y,z); 
//       document.write( j + " is the average") 
//       document.write( h + " is the percentage") 
  
//   } 
//   function avg(a,b,c) { 
//       var f = (a+b+c) / 3 ; 
//       return f; 
//   } 
//   function perc(a,b,c) { 
//       var g = (a+b+c) / 300 * 100 ; 
//       return g ; 
//   } 
//   main()

//5

// flag = false

// function indexof(user,find){

//     for(var i=0; i < user.length; i++){
//         if(user[i] === find){
//             alert([i])
//             flag=true
//         }
       
//     }

//     if(flag === false){
//         alert(-1)
//     }
// }

// indexof("owais","w")

//6

// function disemvowel(str) {
//     var strArr = str.split('');
//     for (var x = 0; x < str.length; x++) {
//       var char = str[x].toLowerCase();
//       if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//         strArr[x] = '';
//       }
//     }
//     return strArr.join('');
//   }

//7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var res = str.match(/[aeiou]{2}/g);
//     return res ? res.length : 0;
//   }
  
//   var found = findOccurrences();
  
//   console.log(found);

//8

// function distance(){

// b = a * 1000;

// c = b * 3.28;

// d = c * 12;

// f = d * 30;

// document.write ("Distance in meters ",b);

// document.write ("Distance in feets ",c);

// document.write ("Distance in inches ",d);

// document.write ("Distance in centimeters ",f);
// }
// distance()

//9

// function overtime(i,hr, bonus){
// 	for(i = 1 ; i <= 10 ; i++) 
// 	{
// 		hr = +prompt("Enter the working hour of the employ : ");
		
// 		if(hr>40)
// 		{
// 			bonus = (hr - 40)*12;
// 			document.write("Rs. is the bonus of the employ.", + bonus);
// 		}
// 		else
// 			document.write("This employ has not done overtime.");
// 	}
// 	return 0
// }
// overtime()

//10

// function cash(){ 
//        var currency=prompt("Enter Cash"); 
//         
//        console.log(currency[0]+" "+"100 notes") 
//        if(currency[1]<5){ 
//          console.log(currency[1]+"10 notes") 
//           
//        } 
//        else  { 
//           
//          console.log("1"+" "+"50 note" ) 
//          document.write("<br>") 
//          console.log((currency[1]-5)+" "+"10 note") 
//         
//        } 
//        
//      } 
//      cash();