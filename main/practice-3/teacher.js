const Person = require('./person');

module.exports = class Teacher extends Person{
  // assignSubject(clazzes){
  // }
  
  constructor(name, age, klass) {
    super(name, age);
    this.clazzes = klass;
    this.clazzes.forEach(x=>x.appendObserver(this));
    // assignSubject(this.clazzes);
    this.notifyStudentAppended = '';
  }

  introduce() {
    let msg = super.introduce();
    let classes = this.clazzes.map(elem => elem.klass_num).join(",");
    msg += " I am a Teacher.";
    if(this.clazzes.length === 0){
      msg += " I teach No Class.";
    }
    else{
      msg += " I teach Class " + classes + ".";
    }
    return msg;
  }

  notifyStudentAppended(){
    state_on = this.clazzes.filter(x=>x.get_state()===1);
    console.log(state_on.get_message());
  }

  isTeaching(student){
    return this.clazzes.findIndex(x=>x.hasStudent(student)) !== -1;
  }
}