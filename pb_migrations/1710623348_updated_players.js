/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kde1ou2odwqznze")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0fs5vzjt",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kde1ou2odwqznze")

  // remove
  collection.schema.removeField("0fs5vzjt")

  return dao.saveCollection(collection)
})
