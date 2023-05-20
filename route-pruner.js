const axios = require('axios');
const fs = require('fs');


// const routePrunerServer = require('./routePrunerServer')
async function routePruner(source) {
    // return source;
    const response = await axios.get('http://localhost:3000/api/get-routes-file');
    await fs.writeFile('./result.js', response.data.routesFile, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    return response.data.routesFile
}
module.exports = routePruner
