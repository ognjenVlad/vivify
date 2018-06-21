

var id1 = "outsideAnonymousFunction";

var anonymousFunction = function(){
    var id2 = "anonymousFunction\n";
    console.log("\nOUTSIDE ANONYMOUSE: "+id1); 
    console.log("\nBEFORE: "+before);
    console.log("\nINSIDE: "+id2);
    console.log("\nOTHER SCRIPT: "+posebanScript); 
    //console.log("\nAFTER: "+after);
      
}

anonymousFunction();

var jsonObject = {"ime":"ognjen","prezime":"vladisavljevic"};

var jsonArray = [{"ime":"ognjen","prezime":"vladisavljevic"},
{"ime":"ime2","prezime":"prezime2"},{"ime":"ime3","prezime":"prezime3"}];

var Person = function(ime, prezime, pol) {
    this.first_name = ime;
    this.last_name = prezime;
    this.gender = pol; 
    alert(Person.staticVar);
}
Person.prototype.getFullName = function() {
    return this.first_name + " " + this.last_name;
};
Person.staticProperty = "static";


var p = new Person("ime1","prezime1","muski");

console.log(p.getFullName());
console.log(p.staticProperty);

function Student(studentId, firstName, lastName, gender) {
    this._super.call(this, firstName, lastName, gender);
    this.studentId = studentId;
  }

  Student.prototype = Object.create(Person.prototype);

  Student.prototype.constructor = Student;

  Student.prototype._super = Person;

  var s = new Student(5,"ime_studenta","prezime_student","muski");
 