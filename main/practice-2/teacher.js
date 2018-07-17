const Person = require('./person');

module.exports = class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.classes = klass;
  }

  introduce() {
    let msg = super.introduce();
    let classes = this.classes.map(elem => elem.klass_num).join(",");
    msg += " I am a Teacher.";
    if(this.classes.length === 0){
      msg += " I teach No Class.";
    }
    else{
      msg += " I teach Class " + classes + ".";
    }
    return msg;
  }
}