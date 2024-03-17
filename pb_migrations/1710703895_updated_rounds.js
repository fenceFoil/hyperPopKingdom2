/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9a901cp0a2lcdnh")

  // remove
  collection.schema.removeField("kwekmnbh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5jgurbvm",
    "name": "winner",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9a901cp0a2lcdnh")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("5jgurbvm")

  return dao.saveCollection(collection)
})
