
export default function isEmpty(object: { [index in string | number]: any }) {
  for(let _ in object) {
    return false;
  }
  return true;
}
