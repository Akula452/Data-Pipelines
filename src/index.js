import chalk from "chalk";

export function run(args) {
  const command = args[2];

  switch (command) {
    case "hello":
      console.log(chalk.green("👋 Hello from your custom CLI!"));
      break;

    case "version":
      console.log("mycli version 1.0.0");
      break;

    default:
      console.log(`
${chalk.blue("mycli")} - Custom CLI Tool

Usage:
  mycli hello        Prints greeting
  mycli version      Prints version
`);
  }
}


