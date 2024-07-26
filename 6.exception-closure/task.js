function parseCount(value){
    let result = Number.parseFloat(value);
    if(isNaN(result)){
      throw new Error("Невалидное значение");
    }
    return result;
  }
  function validateCount(value){
    try{
      return parseCount(value);
    }
    catch(error){
      return error;
    }
  }
  console.log(validateCount("123"));
  console.log(validateCount("123.456"));
  console.log(validateCount("123.456.789"));
  console.log(validateCount("123.456.789.123"));
  console.log(validateCount("123.456.789.123.456"));









  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
    }
    get perimeter() {
      return this.a + this.b + this.c;
    }
    get area() {
      const p = this.perimeter / 2;
      return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
  }
  function getTriangle(a, b, c){
    try {
      return new Triangle(a, b, c);
    } catch (e) {
        return  new Object({
            getPerimeter() {
                return `Ошибка! Такой треугольник не существует`;
            },
            getArea() {
                return `Ошибка! Такой треугольник не существует`;
            }
        });
  }
}