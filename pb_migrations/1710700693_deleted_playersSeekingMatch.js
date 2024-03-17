/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mdwv8ykfjh86agp");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "mdwv8ykfjh86agp",
    "created": "2024-03-17 18:37:25.097Z",
    "updated": "2024-03-17 18:37:25.097Z",
    "name": "playersSeekingMatch",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rcsjzgc2",
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
        "id": "9q6asf3z",
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
    "options": {
      "query": "SELECT id, playerSeeking, lastHeartbeatTime, created FROM matchmaking WHERE satisfied = False;"
    }
  });

  return Dao(db).saveCollection(collection);
})
