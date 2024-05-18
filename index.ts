#!/usr/bin/env node

import inquirer from "inquirer";

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }

}

class Person{
    students:Student[]=[]

    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()


const progStart = async(persons:Person)=>{
   do{
    console.log("Welcome Guest!!!!")
    const ans = await inquirer.prompt({
        type:"list",
        name:"select",
        message:"Who would you like to talk?",
        choices:["Self","Student"]
    });

    if(ans.select == "Self"){
        console.log("Hello, I'm talking to myself!!")
        console.log("I'm Feeling good today")
    }
    if(ans.select == "Student"){
        const ans = await inquirer.prompt({
            type:"input",
            message:"Which student would you like to talk?",
            name:"student"
        });

        const student = persons.students.find(val => val.name == ans.student)

        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)

            console.log(`Hello I'm ${name.name}, and I'm fine!`);
            console.log(persons.students);
           
        }

        if (student){
            console.log(`Hello I'm ${student.name}, and I'm fine!........`);
            console.log(persons.students);
        }
    }
   } while (true)

};

progStart(persons)
