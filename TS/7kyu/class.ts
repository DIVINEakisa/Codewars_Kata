// Learning TypeScript. Classes & Interfaces. Getters
// N.B.: To solve this kata you need to choose "2.4/ES6" target.

// Task
// Define the following classes:

// I. Cuboid
// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

// II. Cube
// Class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

// Hint: Make a call to super, passing in the correct arguments, to make life easier ;)


export class Cuboid {
 
  length:number;
  width:number;
  height:number;
  constructor(length:number,width:number,height:number){
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea(){
    return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
  }
  get volume(){
    return this.length * this.width * this.height;
  }
  
}

export class Cube extends Cuboid {
  constructor(length:number){
  
    super(length,length,length)
  }
  
}
