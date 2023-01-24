const {
  insertBookHandler,
  viewAllBookHandler,
  viewBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: insertBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: viewAllBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: viewBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;