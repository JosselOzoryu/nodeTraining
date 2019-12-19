const fs = require('fs');

const path= 'users.csv';

module.exports = function(data) {
    
    // Separate values by commas
    const stringifiedRows = data.map(element => Object.values(element).join(', '));
    
    // Add newline character
    const stringifiedData = stringifiedRows.join('\n');

    // Promisified function
    const writeFile = new Promise((resolve, reject) => {
        fs.writeFile(path, stringifiedData, (err) => { 
            if(err) {
                // This error can be caught.
                reject(err);
            }
            resolve('File successfully created');
        });
    });

    // Handling the promise.
    writeFile.then((result)=> {
        console.log('From Promisified:', result);
    }).catch(err => {
        console.log('err :', err);
        throw new Error('CSV could not be written');
    });
}