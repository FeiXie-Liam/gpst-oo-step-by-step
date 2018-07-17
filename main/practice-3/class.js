// Write your code here
module.exports = class Class {
  constructor(klass_num) {
    this.klass_num = klass_num;
    this.members = [];
    this.observers = [];
    this.state = 0;
  }

  set_message(message) {
    this.state = 1;
    this.message = message;
    this.observers.forEach(x => x.notifyStudentAppended());
  }

  get_message() {
    return this.message;
  }

  get_state() {
    return this.state;
  }

  set_state(state) {
    this.state = state;
  }

  appendMember(student) {
    this.members.push(student);
    let message = student.name + " has joined Class " + this.klass_num + ".";
    this.set_message(message);
  }

  appendObserver(observer) {
    this.observers.push(observer);
  }

  hasStudent(student) {
    return this.members.includes(student);
  }

  assignLeader(student) {
    if (this.hasStudent(student)) {
      this.leader = student;
      let message = student.name + " become Leader of Class " + this.klass_num + ".";
      this.set_message(message);
      return 'Assign team leader successfully.';
    }
    else {
      return 'It is not one of us.';
    }
  }


}