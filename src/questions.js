// process.stdout.write("World \n");
// process.stdout.write("Hello");

const questions = [
    "What is your name",
    "What is your Mother's name",
    "What is your dad's name"
];

function ask_questions(i){
    process.stdout.write(questions[i]);
}

ask_questions(0);

const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length){
        ask_questions(answers.length);
    }
    else{
        process.exit();
    }

});


process.on("exit", () => {
    const [ name, motherName, fatherName] = answers;
    console.log (`${name} ${fatherName} ${motherName}`);

});
