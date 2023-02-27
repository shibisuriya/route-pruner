const fs = require('fs');
const nodePath = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { transformFromAstSync } = require('@babel/core');
const generator = require('@babel/generator').default;
const { cloneDeep } = require('lodash')

const exportsList = [{
    type: 'ExportNamedDeclaration',
    name: 'a'

}, {
    type: 'ExportDefaultDeclaration'
}]
const dummy = (exportsList, filePath) => {
    console.log(exportsList, filePath)

}

console.log(dummy(exportsList, 'src/parser/test/a.js'))