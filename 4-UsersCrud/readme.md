# To dos:

* Connect with db using sequelize, for this you'll need a repository file and a model for sequelize.
* Add CRUD for pokemons with the following schema:
```json
{
    "id": "int",
    "name": "string",
    "type": "Array with one or two strings that must match with valid pokemon types",
    "moveset": "Array with up to 4 strings"
}
```
* Use http-errors on exist middleware to send a 404 not found error.
* Send BadRequestError (400) when validation is incorrect.
