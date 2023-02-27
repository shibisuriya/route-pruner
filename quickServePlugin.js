const { server, getRoutes } = require('./server/app.js')
const path = require('path')
class QuickServePlugin {
    apply(compiler) {
        compiler.hooks.normalModuleFactory.tap('QuickServePlugin', (nmf) => {
            nmf.hooks.beforeResolve.tap('QuickServePlugin', (data) => {
                const fullPath = path.resolve(data.context, data.request);
                if (fullPath.endsWith('src/router/routes.js')) {


                    console.log('gotten routes ->', getRoutes())
                    

                    // Modify the passed object directly
                    // data.request = 'some-other-file.js';

                }
                // Do not return the passed object, but modify it instead
                // Returning false will ignore the request and no module will be created
                return undefined;
            });
        });
    }
}

module.exports = QuickServePlugin;
