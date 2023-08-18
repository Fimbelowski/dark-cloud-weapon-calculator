export default function isSameClass<A extends object, B extends object>(
  a: A,
  b: B
) {
  return a.constructor === b.constructor;
}
