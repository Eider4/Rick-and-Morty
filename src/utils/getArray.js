export default function getArray(num, text = "") {
  let array = [];
  for (let index = 0; index < num; index++) {
    array.push(`${text}${index}`);
  }
  return array;
}
