const printDiamond = function(num, char) {
    
	if(num % 2 === 0)
		num += 1;
    
	for(let i = 1; i <= num; i += 2) {
      
      let x = ""; 
      let y = ""; 
      
		for(let j = 1; j <= i; j++)
			x += char;
      
		for(let z = (num - i) / 2; z >= 1; z--) {
			y += " "
		}
      
		console.log(y + x);
	}
    
	for(let a = 1; a <= num - 2; a += 2) {
      
		let b = "";
		let c = "";
      
		for(let n = 1;n <= num - a - 1; n++)
			b += char;
      
		for(let m = 1;m <= a; m += 2)
			c += " ";
      
		console.log(c + b);
	}
};
  
printDiamond(5, "#");