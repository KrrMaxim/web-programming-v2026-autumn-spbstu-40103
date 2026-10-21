export function convertBase(num, fromBase, toBase) {
  let decNumber = parseInt(num, fromBase);
  if (!Number.isSafeInteger(decNumber)) {
    throw new RangeError('Value is outside the safe integer range');
  }
  return decNumber.toString(toBase);
}
