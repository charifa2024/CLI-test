import chalk from 'chalk';
import gradient from 'gradient-string';
import readlineSync from 'readline-sync';
import ora from 'ora';
import cowsay from 'cowsay';
import cliSpinners from 'cli-spinners';

// Animated Cat Loader 🐱
const spinner = ora({
    text: chalk.cyan("🐱 Summoning the quiz master cat..."),
    spinner: cliSpinners.dots,
}).start();

setTimeout(() => {
    spinner.succeed(chalk.green("🐾 The cat is here! Let’s start the quiz!"));
    console.log(chalk.magentaBright(cowsay.say({ text: "Meow! Get ready!", f: "kitty" })));
    startQuiz();
}, 3000);

function startQuiz() {
    // Aesthetic Title
    console.log(gradient.pastel.multiline(`\n🎮 WELCOME TO THE ULTIMATE QUIZ GAME 🎮\n`));
    console.log(chalk.bold.cyan("💡 Test your knowledge! Answer the following questions: \n"));

    // Questions Array
    const questions = [
        {
            question: chalk.magentaBright("✨ What does ‘HTML’ stand for?"),
            options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
            answer: 1
        },
        {
            question: chalk.greenBright("🎮 Which programming language is often used for game development?"),
            options: ["Java", "Python", "C++", "Ruby"],
            answer: 2
        },
        {
            question: chalk.blueBright("💡 Who is known as the father of computers?"),
            options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "Steve Jobs"],
            answer: 1
        },
        {
            question: chalk.yellowBright("🔐 Which of these is NOT a database?"),
            options: ["MySQL", "MongoDB", "HTML", "PostgreSQL"],
            answer: 2
        },
        {
            question: chalk.redBright("🚀 What is the command to initialize a Git repository?"),
            options: ["git init", "git start", "git new", "git create"],
            answer: 0
        },
        {
            question: chalk.cyanBright("🕵️ What does ‘phishing’ refer to?"),
            options: ["A hacking technique to steal info", "A type of encryption", "A software bug", "A firewall setting"],
            answer: 0
        },
        {
            question: chalk.greenBright("🏴‍☠️ What does ‘DDoS’ stand for?"),
            options: ["Distributed Database of Services", "Dynamic Denial of Security", "Distributed Denial of Service", "Direct Data over Server"],
            answer: 2
        }
    ];

    // Quiz Logic
    let score = 0;
    questions.forEach((q, index) => {
        console.log(`\n${chalk.bold(`Question ${index + 1}:`)} ${q.question}`);
        
        // Show multiple choice options
        const userAnswer = readlineSync.keyInSelect(q.options, "Choose an answer:", { cancel: false });
        
        if (userAnswer === q.answer) {
            console.log(chalk.greenBright("✅ Correct!"));
            score++;
        } else {
            console.log(chalk.redBright("❌ Wrong!"));
        }
    });

    // Final Score
    console.log(gradient.pastel(`\n🎉 QUIZ FINISHED! 🎉`));
    console.log(chalk.bold(`Your final score: ${chalk.yellow(score)} / ${questions.length}`));
}
