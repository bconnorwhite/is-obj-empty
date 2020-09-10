
export type AnyObject = {
  [index in string | number]: any;
}

export default function isEmpty(object: AnyObject) {
  for(let _ in object) {
    return false;
  }
  return true;
}
