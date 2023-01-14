migrate((db) => {
  const collection = new Collection({
    "id": "k8gg373foxp70gq",
    "created": "2023-01-14 00:37:29.458Z",
    "updated": "2023-01-14 00:37:29.458Z",
    "name": "tracker",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jckcqv6v",
        "name": "playercount",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("k8gg373foxp70gq");

  return dao.deleteCollection(collection);
})
