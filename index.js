var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, Object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
