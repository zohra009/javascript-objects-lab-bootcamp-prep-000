var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, Object, {[key]: value})
}
destructivelyUpdateObjectWithKeyAndValue(object, key, value)