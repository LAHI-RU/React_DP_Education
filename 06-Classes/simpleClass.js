class Reactangle {
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
    console.log("A new Reactangle Created.");
  }

  getArea() {
    return this.width * this.height;
  }

  aboutMe()
}

const newRectangle = new Reactangle(10, 8, "red");

console.log(newRectangle.getArea());
