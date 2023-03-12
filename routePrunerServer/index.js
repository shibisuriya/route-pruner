
const fs = require('fs');
const parser = require('@babel/parser');
const axios = require('axios');
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const traverse = require('@babel/traverse').default;
const { execSync } = require('child_process');

const generator = require('@babel/generator').default;

const routesFilePath = 'src/router/routes.js'
let selectedRoutes = []
let routesFile = ''

const app = express();

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')))

const getAst = () => {
    const code = fs.readFileSync(routesFilePath).toString();
    const ast = parser.parse(code, {
        sourceType: 'module'
    });
    return ast
}
app.get('/api/get-all-valid-routes', (req, res) => {
    try {
        const ast = getAst()
        const objects = [];
        traverse(ast, {
            ExportDefaultDeclaration(path) {
                const node = path.node.declaration;
                if (node.type === 'ArrayExpression') {
                    node.elements.forEach(object => {
                        objects.push(generator(object).code)
                    })

                }
            },
        });
        res.json(objects)
    } catch (err) {
        console.error(err);
    }
});
function triggerHMR() {
    // For now I will read the content of the routes.js file and write 
    // it back again into routes.js without doing any modification.
    const command = `touch ${routesFilePath}`
    console.log(command)
    execSync(command);
}

app.get('/api/get-routes-file', (req, res) => {
    // Added delay for demonstration purposes.
    setTimeout(() => {
        console.log('Routes file update!')
        const code = 'export default []'
        const ast = parser.parse(code, {
            sourceType: 'module'
        });
        traverse(ast, {
            ExportDefaultDeclaration(path) {
                const node = path.node.declaration
                if (node.type === 'ArrayExpression') {
                    selectedRoutes.forEach(route => {
                        console.log('route code -> ', route)
                        const routeAst = parser.parse(`const obj = ${route}`, {
                            sourceType: 'module'
                        });
                        // console.log('obj -> ', generator(routeAst.program.body[0].declarations[0].init).code)
                        node.elements.push(routeAst.program.body[0].declarations[0].init)
                    })
                }
            }
        })
        routesFile = generator(ast).code
        res.send({
            selectedRoutes,
            routesFile
        })
    }, 1000)
})

app.post('/api/update', async (req, res) => {
    selectedRoutes = req.body
    // // console.log(req.body)
    triggerHMR()
    console.log('routes updated')
    res.send('Routes updated, wait for HMR!');
})


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
