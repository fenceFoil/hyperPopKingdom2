/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kde1ou2odwqznze",
    "created": "2024-03-16 19:09:28.505Z",
    "updated": "2024-03-16 19:09:28.505Z",
    "name": "players",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7vwialhr",
        "name": "symbol",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "v23aw4w2",
        "name": "elo",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kde1ou2odwqznze");

  return dao.deleteCollection(collection);
})
