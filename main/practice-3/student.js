const Person = require('./person');

module.exports = class Student extends Person {
  constructor(name, age, clazz) {
    super(name, age)
    this.clazz = clazz;
  }

  introduce() {
    let msg = super.introduce() + " I am a Student.";
    if (this.clazz.leader === this) {
      msg += " I am Leader of Class 2.";
    }
    else {
      if (this.clazz.hasStudent(this)) {
        msg += " I am at Class " + this.clazz.klass_num + ".";
      }
      else {
        msg +=  ' I haven\'t been allowed to join Class.';
      }
    }
    return msg;
  }
}