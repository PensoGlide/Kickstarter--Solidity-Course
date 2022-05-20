const routes = require('next-routes')(); // os 2ºs parentesis dizem que estamos a importar uma função

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show') // isto ":address" é uma wildcard em que address é atribuído a qualquer URL. Ex: /campaigns/new; o :address = new, neste caso
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;