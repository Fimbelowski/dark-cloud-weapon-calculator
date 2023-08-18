import isSameClass from './isSameClass';

export default function setHasSameClass<T extends object>(set: Set<T>, obj: T) {
  let hasSameClass = false;

  set.forEach((value) => {
    if (isSameClass(obj, value)) {
      hasSameClass = true;
    }
  });

  return hasSameClass;
}
