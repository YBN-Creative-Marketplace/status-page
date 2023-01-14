migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8gg373foxp70gq")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8gg373foxp70gq")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
