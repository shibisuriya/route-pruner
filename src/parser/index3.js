const fs = require('fs');
const nodePath = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { transformFromAstSync } = require('@babel/core');
const generator = require('@babel/generator').default;
const { cloneDeep } = require('lodash')


const routeFilePath = nodePath.resolve('./test/a.js');
const routeFileContent = fs.readFileSync(routeFilePath, 'utf8')
const ast = parser.parse(routeFileContent, {
    sourceType: 'module'
})

// Remove all the import statements...
traverse(ast, {
    ImportDeclaration: (path) => {
        path.remove()
    }
})

// 
traverse(ast, {
    ArrayExpression: (path) => {
        console.log('parent -> ', generator(path.node).code)
        
    }
})



// console.log(generator(ast).code)