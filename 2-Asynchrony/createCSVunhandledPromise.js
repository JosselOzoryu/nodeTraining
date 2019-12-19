const fs = require('fs');

const path= 'users.csv';

module.exports = function(data) {
    
    // Separate values by commas
    const stringifiedRows = data.map(element => Object.values(element).join(', '));
    
    // Add newline character
    const stringifiedData = stringifiedRows.join('\n');

    // Promisified function
    const result = new Promise((resolve, reject) => {
        fs.writeFile(path, stringifiedData, (err) => { 
            if(err) {
                // This error can be caught.
                reject(err);
            }
            resolve('File successfully created');
        });
    });

    // The promise is returned and should be handled on the upper scope.
    return result;
}