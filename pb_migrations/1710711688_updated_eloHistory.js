/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jqbhwztc3hdbjpv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b5v2jpy0",
    "name": "eloValue",
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
  const collection = dao.findCollectionByNameOrId("jqbhwztc3hdbjpv")

  // remove
  collection.schema.removeField("b5v2jpy0")

  return dao.saveCollection(collection)
})
