
var johnny = (function(name, age) {

	var kids = [];

	return {
		getKids: function() {
			return kids;
		},

		haveAKid: function(kidName) {
			kids.push(kidName);
		},

		getName: function() {
			return name;
		},

		getAge: function() {
			return age;
		},

		celebrateBirthday: function() {
			age += 1;
		}
	};
})('johnny', 32);

johnny.celebrateBirthday();

console.log(johnny.getAge()) // 33

console.log(johnny.getKids()) // []

johnny.haveAKid('judah');

console.log(johnny.getKids()) // ['judah']
