const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { transformFromAstSync } = require('@babel/core');

function resolveImports(code, filePath) {
    const ast = parser.parse(code, {
        sourceType: 'module'
    });

    const dependencies = [];

    traverse(ast, {
        ImportDeclaration: ({ node }) => {
            dependencies.push(node.source.value);
        }
    });

    const transformed = transformFromAstSync(ast, code);

    const transformedCode = transformed.code;

    const resolvedDependencies = dependencies.map(dependency => {
        const dependencyPath = path.resolve(path.dirname(filePath), dependency);
        const dependencyCode = fs.readFileSync(dependencyPath, 'utf8');

        return resolveImports(dependencyCode, dependencyPath);
    });

    return `
    ${resolvedDependencies.join('\n')}
    ${transformedCode}
  `;
}

const filePath = path.resolve('./routes/index.js');
const fileContent = fs.readFileSync(filePath, 'utf8');

const resolvedCode = resolveImports(fileContent, filePath);

fs.writeFileSync('./output.js', resolvedCode);
