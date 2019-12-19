const fsp = require('fs').promises;

const path= 'users.csv';

module.exports = function(data) {
    
    // Separate values by commas
    const stringifiedRows = data.map(element => Object.values(element).join(', '));
    
    // Add newline character
    const stringifiedData = stringifiedRows.join('\n');

    // Using node fs.promises library
    fsp.writeFile(path, stringifiedData).then(()=> {
        console.log('From FSPromises', 'File successfully created');
    }).catch(err => {
        console.log('err :', err);
        throw new Error('CSV could not be written');
    });
}