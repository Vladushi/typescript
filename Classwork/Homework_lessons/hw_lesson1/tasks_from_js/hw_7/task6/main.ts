// function Car(mode, producer, year, maxSpeed, engineVolume) {
//
//     this.mode = mode
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineVolume = engineVolume
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function (speedToAdd) {
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//     };
//     this.changeYear = function (year) {
//         if (year > 1815) this.year = year;
//     };
//
//     this.addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
// }
//
// const car = new Car('asd', 'qwe', 1234, 122, 4);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({});
// console.log(car);
