const Person = require('./person');

module.exports = class Student extends Person{
  constructor(name, age, klass){
    super(name, age)
    this.klass = klass;
  }

  introduce(){
    let msg = super.introduce() + " I am a Student.";
    if(this.klass.leader === this){
      msg += " I am Leader of Class 2.";
    }
    else {
      msg += " I am at Class " + this.klass.klass_num + ".";
    }
    return msg;
  }



}