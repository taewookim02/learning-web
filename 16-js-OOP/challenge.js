"use strict";

///////////////////////////////////////////////////
// Challenge 1
/*
// 1. Constructor function
const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

// 2. Prototype function
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.maker} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.maker} is going at ${this.speed} km/h`);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.brake();
console.log(car1);

car2.brake();
console.log(car2);

console.dir(car2);
console.log(car2.__proto__.__proto__);
///////////////////////////////////////////////////
// Challenge 2

class CarCl {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.maker} is going at ${this.speed} km/h`);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.maker} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    // return (this.speed = speed);
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

///////////////////////////////////////////////////
// Challenge 3

const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.maker} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.maker} is going at ${this.speed} km/h`);
};

const EV = function (maker, speed, charge) {
  Car.call(this, maker, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

///////////////////////////////////////////////////

const EV = function (maker, speed, charge) {
  Car.call(this, maker, speed);
  this.charge = charge;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.maker} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

const ford = new Car("Ford", 99);
ford.accelerate();
console.log(ford);

const tesla = new EV("Tesla", 50, 30);
tesla.accelerate();
tesla.brake();
// tesla.chargeBattery(60);
console.log(tesla);

///////////////////////////////////////////////////
// Challenge 4

class CarCl {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// EVCl
class EVCl extends CarCl {
  #charge;
  constructor(maker, speed, charge) {
    super(maker, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const car1 = new EVCl("Tesla", 120, 23);
car1.accelerate();
car1.chargeBattery(56);
car1.brake();

const car2 = new EVCl("Rivian", 120, 23);
car2.brake();
console.log(car2);
car2
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(car2.speedUS);
 */
