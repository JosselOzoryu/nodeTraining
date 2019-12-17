const fs = require('fs');

module.exports = function(data) {

    // Separate values by commas
    const stringifiedRows = data.map(element => Object.values(element).join(', '));
    
    // Add newline character
    const stringifiedData = stringifiedRows.join('\n');

    fs.writeFileSync('users.csv', stringifiedData);
}