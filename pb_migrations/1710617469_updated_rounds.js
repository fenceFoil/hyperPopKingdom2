/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9a901cp0a2lcdnh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wxebkcxn",
    "name": "players",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kde1ou2odwqznze",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9a901cp0a2lcdnh")

  // remove
  collection.schema.removeField("wxebkcxn")

  return dao.saveCollection(collection)
})
