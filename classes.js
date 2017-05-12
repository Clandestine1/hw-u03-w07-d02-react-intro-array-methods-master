//ES5
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fish = function () {
	function fish(name, length, color) {
		_classCallCheck(this, fish);

		this.name = name;
		this.length = length;
		this.color = color;
	}

	_createClass(fish, [{
		key: 'water',
		value: function water() {
			console.log('My name is' + ' ' + ('' + this.name) + ' ' + 'and I glub you!');
		}
	}]);

	return fish;
}();

var nuBilly = new fish('Billy', '25 feet', 'Hot Pink');
var nufishy = new fish('Boring fish', '5 cm', 'orange');

nuBilly.water();
nufishy.water();

var Goldfish = function (_fish) {
	_inherits(Goldfish, _fish);

	function Goldfish(name, length, color, diet) {
		_classCallCheck(this, Goldfish);

		var _this = _possibleConstructorReturn(this, (Goldfish.__proto__ || Object.getPrototypeOf(Goldfish)).call(this, name, length, color));

		_this.diet = diet;
		return _this;
	}

	return Goldfish;
}(fish);

var nuGoldfish = new Goldfish('Gustave', '10 cm', 'black', 'blood worms');

console.log(nuGoldfish);

var Cichild = function (_fish2) {
	_inherits(Cichild, _fish2);

	function Cichild(name, length, color, mean) {
		_classCallCheck(this, Cichild);

		var _this2 = _possibleConstructorReturn(this, (Cichild.__proto__ || Object.getPrototypeOf(Cichild)).call(this, name, length, color));

		_this2.mean = mean;
		return _this2;
	}

	return Cichild;
}(fish);

//ES6

class fish {
	constructor(name,length,color) {
		this.name = name;
		this.length = length;
		this.color = color;
	}
	water() {
		console.log(`My name is ${this.name} and I glub you!`);
	}
}

let nuBilly = new fish('Billy', '25 feet', 'Hot Pink');
let nufishy = new fish('Boring fish', '5 cm', 'orange');

nuBilly.water();
nufishy.water();


class Goldfish extends fish {
	constructor(name, length, color, diet) {
		super(name, length, color)
		this.diet = diet;
	}
}

let nuGoldfish = new Goldfish('Gustave', '10 cm', 'black', 'blood worms');

console.log(nuGoldfish);

class Cichild extends fish {
	constructor(name, length, color, mean) {
		super(name, length, color)
		this.mean = mean;
	}
}

let nuCichild = new Cichild('Prince', '5 cm', 'purple', 'false');
console.log(nuCichild);

