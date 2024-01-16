var obj = {
    name : "Hansraj",
    age : 22,
    languages : ["Marathi","Hindi","English"]
}

console.log(obj.name+"  "+obj.age+" "+obj.languages);

//factory function
function factoryObj(name,age,languages)
{
    this.name = name;
    this.age = age ;
    this.languages = languages;
}
var obj1 = new factoryObj("Aditya",21,["Marathi","Hindi","English"]);

console.log(obj1.name+"  "+obj1.age+" "+obj1.languages);


//adding method in js object

function factoryObj(name,age,languages)
{
    this.name = name;
    this.age = age ;
    this.languages = languages;
    this.clean =function (){
        alert("cleaning process.....")
    }
}
var obj2 = new factoryObj("Aditya",21,["Marathi","Hindi","English"]);
obj2.clean();
