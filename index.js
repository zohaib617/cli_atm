import inquirer from "inquirer";
let totalBlance = 10000;
const pinNum = 1234;
let pinnEnterd = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin?",
        type: "number"
    }]);
if (pinnEnterd.pin == pinNum) {
    let atmQuestions = await inquirer.prompt([
        {
            name: "acountType",
            message: "Select your acount Type?",
            type: "list",
            choices: ["Current Acount", "Savinng Acount"]
        },
        {
            name: "transmethod",
            message: "Select your transction method",
            type: "list",
            choices: ["cash widraw", "fast cash"]
        }
    ]);
    if (atmQuestions.transmethod == "cash widraw") {
        let cashWidrawAmounnt = await inquirer.prompt([
            {
                name: "widrawl",
                message: "Enter the amount you want to widraw",
                type: "number"
            }
        ]);
        if (totalBlance >= cashWidrawAmounnt.widrawl) {
            totalBlance -= cashWidrawAmounnt.widrawl;
            console.log(`your total blance is :${totalBlance}`);
        }
        else
            (console.log(`insufficint blance`));
    }
}
let fastCashAmount = await inquirer.prompt([
    {
        name: "fastCash",
        message: "select the amount you wannt to widraw?",
        type: "list",
        choices: ["1000", "3000", "5000"]
    }
]);
if (totalBlance >= fastCashAmount.fastCash) {
    totalBlance -= fastCashAmount.fastCash;
    console.log(`your total balcance is ${totalBlance}`);
}
else
    (console.log(`infficient balance`));
