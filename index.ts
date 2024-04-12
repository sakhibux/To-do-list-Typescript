#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";



let todos: string[] = [];
let loop =true;


while(loop){
    const answers : {
        todo:string,
        addmore:boolean
    } = await inquirer.prompt([
    
        {
            name:"todo",
            type:"input",
            message:"what do you want to add your todo?"
        },
    
    
    

    

        {
            name:"addmore",
            type:"confirm",
            message:"Do you want to  add more todo?",
            default:"false",
        }
    ])
    const {todo, addmore} = answers;
    console.log(answers);
    loop = addmore;
    if(todo){
        todos.push(todo);
    }else{
        console.log(chalk.red("kindly add valid input"));
    }
}
if(todos.length>0){
    console.log(chalk.green("your todo list:"));
    todos.forEach(todo => {
        console.log(todo)
    });
} else {
    console.log(chalk.red("no todo found"));
}

    
