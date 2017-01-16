var commands = require('./commands.js');

process.stdout.write('prompt > ');  //Output prompt


process.stdin.on('data', function(data){   //Data event is fired after the user types in a line
  var cmd = data.toString().split(' ');      //Trim removes whitespace from both sides of line

  var fileName = cmd[1].toString().trim();

  switch (cmd[0].toString().trim()) {
    case 'pwd':
      commands.pwd();
      break;
    case 'date':
      commands.date();
      break;
    case 'ls':
      commands.ls();
      break;
    case 'echo':
      var output = cmd.slice(1).join(' ');
      commands.echo(output);
      break;
    case 'cat':
      commands.cat(fileName);
      break;
    case 'head':
      commands.head(fileName);
      break;
    case 'tail':
      commands.tail(fileName);
      break;
    case 'sort':
      commands.sort(fileName);
      break;
    case 'wc':
      commands.wc(fileName);
      break;
    case 'uniq':
      commands.uniq(fileName);
      break;
    case 'curl':
    commands.curl(fileName);
    break;
    default:
      console.log('You typed: ' + data);
  }

  process.stdout.write('\nprompt > ');

});
