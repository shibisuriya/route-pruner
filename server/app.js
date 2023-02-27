
let routes1 = []
const getRoutes = () => {
    return routes1
}
const server = () => {
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const path = require('path')
    app.use('/', express.static(path.join(__dirname, 'public')))
    app.use(bodyParser.json());
    const routes = [
        {
            path: '/1',
            component: () => import('1.vue'),
        },
        {
            path: '/2',
            component: () => import('2.vue'),
        }].map(route => {
            route.component = String(route.component)
            return route
        })


    // Endpoint to return user info as JSON
    app.get('/api/routes', (req, res) => {
        res.json(routes);
    });

    app.post('/api/update', (req, res) => {
        const selectedRoutes = req.body;
        routes1 = selectedRoutes
        console.log('routes -> ', routes)
        res.send('Routes updated, wait for HMR!');

    })

    console.log('Start quick-serve server!')

    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
}
module.exports = {
    server,
    getRoutes

};