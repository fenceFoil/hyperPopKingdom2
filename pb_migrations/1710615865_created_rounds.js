/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9a901cp0a2lcdnh",
    "created": "2024-03-16 19:04:25.419Z",
    "updated": "2024-03-16 19:04:25.419Z",
    "name": "rounds",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zjhjqtxq",
        "name": "ended",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "kwekmnbh",
        "name": "duration",
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
  const collection = dao.findCollectionByNameOrId("9a901cp0a2lcdnh");

  return dao.deleteCollection(collection);
})
