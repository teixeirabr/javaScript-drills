//Helper Function
function arrayIncludes(arr, values){
	let allGood = true;
	for(let i = 0; i < values.length; i++){
		if(!arr.includes(values[i])){
			allGood = false
			break
		}
	}
	return allGood
}

//Test Suite
describe('for-loops', function () {

	describe('Problem 1 - addNumbers', function () {
		it('should return an array', function () {
			expect(Array.isArray(addNumbers(3))).toBe(true);
		})
		it('should fill the returning array with numbers up to (but not including) the value passed in', function () {
			var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
			var newArr = addNumbers(10)
			expect(arrayIncludes(newArr, arr) && newArr.length === 10).toEqual(true);
		})
		it('should fill the returning array with numbers up to (but not including) the value passed in', function () {
			var arr = [0, 1, 2, 3, 4, 5, 6, 7]
			var newArr = addNumbers(8)
			let correct = arrayIncludes(newArr, arr) && newArr.length === 8
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 2 -', function() {
		it('should return an array', function() {
			expect(Array.isArray(backwardsGreeting([1, 2, 3]))).toBe(true);
		})
		it('should NOT use the Array.reverse method', function () {
			let str = backwardsGreeting.toString();
			let correct = !str.includes('reverse()');
			expect(correct).toEqual(true);
		})
		it('should return ["Hello, Mary", "Hello, Bob", "Hello, George"] when passed ["George", "Bob", "Mary"]', function() {
			expect(backwardsGreeting(["George", "Bob", "Mary"])).toEqual(["Hello, Mary", "Hello, Bob", "Hello, George"])
		})
		it('should return a reversed array with the correct greeting string when passed any array', function() {
			let correct = backwardsGreeting(['a', 'b', 'c']).toString() === "Hello, c,Hello, b,Hello, a";
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 3 -', function() {
		it('should return an array', function() {
			expect(Array.isArray(leapFrog([1, 2, 3]))).toBe(true);
		})
		it('should use a for loop that increments by two', function() {
			let str = leapFrog.toString();
			let correct = str.includes('+=2') || str.includes('+= 2') || str.includes('i+2') || str.includes('i+ 2') || str.includes('i +2') || str.includes('i + 2')
			expect(correct).toEqual(true);
		})
		it('should return ["Tree frog", "Dog", "Bull frog" , "Cat"] when passed ["Tree", "Dog", "Bull", "Cat"]', function() {
			expect(leapFrog(["Tree", "Dog", "Bull", "Cat"])).toEqual(["Tree frog", "Dog", "Bull frog" , "Cat"]);
		})
		it('should return the correct array when passed any array of strings', function() {
			let correct = leapFrog([1, 2, 3, 4]).toString()	=== "1 frog,2,3 frog,4";
			expect(correct).toEqual(true);
		})
	})
	
	
})