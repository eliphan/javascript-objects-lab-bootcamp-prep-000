var recipes = {
  key:'value'
}

function updateObjectWithKeyAndValue (object, key, value) {
  object.assign({},{key: value})
  return object
}