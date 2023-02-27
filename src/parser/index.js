const fs = require('fs');
const nodePath = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { transformFromAstSync } = require('@babel/core');
const generator = require('@babel/generator').default;
const { cloneDeep } = require('lodash')

const getFileName = (fileName) => {
    if (fileName.endsWith('.js')) {
        return fileName
    } else {
        fileName + '.js'
    }
}

const resolvedDependencies = (entryFilePath) => {
    const code = fs.readFileSync(entryFilePath, 'utf8');
    const ast = parser.parse(code, {
        sourceType: 'module'
    });
    const dependencies = {}
    traverse(ast, {
        ImportDeclaration: (path) => {
            const { node } = path
            node.specifiers.forEach(specifier => {
                if (specifier.type == 'ImportSpecifier' || specifier.type == 'ImportDefaultSpecifier') {
                    const dependencyFilePath = nodePath.resolve(nodePath.dirname(entryFilePath), node.source.value);
                    if (dependencies[dependencyFilePath]) {
                        dependencies[dependencyFilePath].push({ type: specifier.type, name: specifier.local.name })
                    } else {
                        dependencies[dependencyFilePath] = []
                        dependencies[dependencyFilePath].push({ type: specifier.type, name: specifier.local.name })
                    }
                }
            })
        }
    });

    Object.keys(dependencies).forEach(filePath => {
        const identifiers = dependencies[filePath]
        identifiers.forEach(identifier => {
            const { type, name } = identifier
            const dependencyCode = fs.readFileSync(filePath, 'utf8');
            const dependencyAst = parser.parse(dependencyCode, {
                sourceType: 'module'
            })
            if (type == 'ImportSpecifier') {
                traverse(dependencyAst, {
                    ExportNamedDeclaration: ({ node }) => {
                        const declarations = node.declaration.declarations
                        const namedDeclarationNode = declarations.find(declaration => {
                            return declaration.id.name == name
                        }).init
                        if (namedDeclarationNode) {
                            traverse(ast, {
                                Property: ({ node }) => {
                                    if (node.key.name == name) {
                                        node.value = namedDeclarationNode
                                    }
                                }
                            })
                        }
                    }
                })

            } else if (type == 'ImportDefaultSpecifier') {
                traverse(dependencyAst, {
                    ExportDefaultDeclaration: ({ node }) => {
                        const defaultExportDeclaration = node.declaration
                        traverse(ast, {
                            Property: ({ node }) => {
                                if (node.key.name == name) {
                                    node.value = defaultExportDeclaration 
                                }
                            }

                        })
                    }
                })

            }
        })
    })
    traverse(ast, {
        ImportDeclaration: (path) => {
            path.remove()
        }
    })
    console.log('Generated code ->', generator(ast).code)

}
const entryFilePath = nodePath.resolve('./test/a.js');
const routeFile = resolvedDependencies(entryFilePath)
console.log('routeFile -> ', routeFile)