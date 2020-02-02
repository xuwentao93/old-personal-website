
// 通过 generator 函数让对象能通过 for of 循环遍历.
export function* forOfObj(obj) {
  const objKeys = Reflect.ownKeys(obj)
  // eslint-disable-next-line no-restricted-syntax
  for (let objKey of objKeys) {
    yield [objKey, obj[objKey]]
  }
}
