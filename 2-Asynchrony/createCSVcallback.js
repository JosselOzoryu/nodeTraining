const fs = require('fs');

const path= 'users.csv';

module.exports = function(data) {
    
    // Separate values by commas
    const stringifiedRows = data.map(element => Object.values(element).join(', '));
    
    // Add newline character
    const stringifiedData = stringifiedRows.join('\n');

    // Using callbacks
    fs.writeFile(path, stringifiedData, (err) => { 
        if(err) {
            console.log('There was an error', err);
            // Do something else with the error.

            /**
             * IMPORTANT NOTE
             * Errors should not be thrown inside callbacks as 
             * javascript try..catch mechanism is unable to intercept them.
             * This will be an uncaughtException
             */
            throw new Error('CSV could not be written');
        }
        console.log('From Callback','File successfully created');
    }); 
}