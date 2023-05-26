function First() {}

First.prototype.hello =  () => {
  console.log("Привет, я метод родителя!");
};

function Second() {}

Second.prototype = Object.create(First.prototype);

Second.prototype.hello = () => {
  First.prototype.hello.call(this);

  console.log("А я наследуемый метод!");
};

const obj = new Second();


obj.hello();
