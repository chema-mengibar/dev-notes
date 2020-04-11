
const TaskBuilder = require('./lib/creational-builder')

let task = new TaskBuilder()

task.setName('Task A')
  .setDescription('finish book')
  .setDueDate(new Date(2019, 5, 12));

console.log(task);


/**
 * Usage (in root path):
 * >> node ./patterns/examples/creational-builder.usage
 * 
 * Source:
 * http://zetcode.com/javascript/builderpattern/
 */