/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jqbhwztc3hdbjpv",
    "created": "2024-03-17 21:31:31.281Z",
    "updated": "2024-03-17 21:31:31.281Z",
    "name": "eloHistory",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xgwk9iby",
        "name": "player",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "kde1ou2odwqznze",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "dqr1xkne",
        "name": "eloChange",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jqbhwztc3hdbjpv");

  return dao.deleteCollection(collection);
})
