/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9a901cp0a2lcdnh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jlcflkn3",
    "name": "winnerSeconds",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ytshs4zd",
    "name": "notWinnerSeconds",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9a901cp0a2lcdnh")

  // remove
  collection.schema.removeField("jlcflkn3")

  // remove
  collection.schema.removeField("ytshs4zd")

  return dao.saveCollection(collection)
})
