/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fw7a91wv7fhalay",
    "created": "2024-03-17 07:53:39.260Z",
    "updated": "2024-03-17 07:53:39.260Z",
    "name": "matchmaking",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3kzdx2ep",
        "name": "playerSeeking",
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
        "id": "vuiv749y",
        "name": "satisfied",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "vurahkbp",
        "name": "lastHeartbeatTime",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("fw7a91wv7fhalay");

  return dao.deleteCollection(collection);
})
