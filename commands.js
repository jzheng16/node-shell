var fs = require('fs');
var path = require('path');
let request = require('request');
module.exports = {
    pwd: function(file){
      console.log(__dirname);
    },

    date: function(file){
      console.log(Date());
    },

    ls: function(file){
      var fs = require('fs');
      fs.readdir('.', function(err, files){
        if (err) throw err;
        files.forEach(function(directory){
          process.stdout.write(directory.toString() + '\n');
        });
      });
    },

    echo: function(file){
      console.log(file);
    },

    cat: function(file){

      fs.readFile(file, 'utf-8', function(err, data){
        if (err) throw err;
        console.log(data);
      });
    },

    head: function(file){
      fs.readFile(file, 'utf-8', function(err, data){
        if (err) {
          throw err;
        } else {
          var line = data.split('\n');
          console.log(line.slice(0, 5).join('\n'));
        }
      })
    },

    tail: function(file){
      fs.readFile(file, 'utf-8', function(err, data){
        if (err) {
          throw err;
        } else {
          var line = data.split('\n');
          console.log(line.slice(line.length-5).join('\n'));
        }
      })
    },

    sort: function(file){
      fs.readFile(file, 'utf-8', function(err, data){
        if (err){
         throw err;
        }else{
        var line = data.split('\n');
        console.log(line.sort().join('\n'));
        }
      })
    },

    wc: function(file){
      fs.readFile(file, 'utf-8', function(err, data){
        if (err){
         throw err;
        } else {
          console.log(data.split('\n').length);
        }
      });
    },

    uniq: function(file){
      fs.readFile(file, 'utf-8', function(err, data){
        var uniqArr = [];
        if(err){
          throw err;
        } else {
          var lines  = data.split('\n').sort();

          for (var i = 0; i < lines.length; i++){
            if (lines[i] !== lines[i+1]){
              uniqArr.push(lines[i]);
            }
          }
          console.log(uniqArr.join('\n'));
        }

      })
    },

    curl: function(file) {
      request.get(file, function(err, response, body) {
        if(err) throw err;
        else if (response.statusCode === 200) console.log(response);
      })
    }

  };
