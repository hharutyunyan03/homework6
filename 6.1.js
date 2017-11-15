const printDiamond = function(num, char){
	const printChar = function(n, char){
		if(n<1)
			return '';
		return char + printChar(n-1, char);
	};
	const helper = function(n, spaces, chars){
		if(n<0)
			return "";
		console.log(printChar(spaces, ' ') + printChar(chars, char));
		if(n > Math.ceil((x)/2) + 1)
			helper(n - 1, spaces - 1, chars + 2);
		else if(n<Math.ceil((x)/2))
			helper(n-1, spaces+1, chars-2);
		else if(n===Math.ceil(x/2) + 1)
			helper(n-2, 0, x);
	};
	const x = 2 * Math.floor(num/2) + 1;
	helper(x, Math.floor(x/2), 1);
};
printDiamond(5, "#");
