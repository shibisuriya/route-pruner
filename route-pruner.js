function routePruner(source) {
    console.log(source)
    return source.replace(/hello/g, 'goodbye');
}
module.exports = routePruner
