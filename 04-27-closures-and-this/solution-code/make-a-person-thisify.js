

function makePerson(name, age) {

	return {

		kids: [],

		name: name,

		age: age,

		getKids: function() {
			return this.kids;
		},

		haveAKid: function(kidName) {
			this.kids.push(kidName);
		},

		getName: function() {
			return this.name;
		},

		getAge: function() {
			return this.age;
		},

		celebrateBirthday: function() {
			this.age += 1;
		}
	};
}

var johnny = new makePerson('johnny', 32);

johnny.celebrateBirthday();

console.log(johnny.getAge()) // 33

console.log(johnny.getKids()) // []

johnny.haveAKid('judah');

console.log(johnny.getKids()) // ['judah']
