const fs = require("fs");

const content = "some content!";

const path = "./Output.txt";

//lets see how to creat a function that will write the file
function* writeToTextFile() {
    fs.writeFile('./Output.txt', content, (err) => {
        // if an error occurs 
        if (err) {

            return err;

        }
        else {
            // if no error
           return "file written successfully"
        }

    })
}

function readFromTextFile() {
    // read from file
    fs.readFile('./Output.txt', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    });

}

//writeToTextFile(content, path);
module.exports = { writeToTextFile, readFromTextFile }