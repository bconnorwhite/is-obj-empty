
export type AnyObject = {
  [key: string | number | symbol]: any;
};

export type Options = {
  /**
   * Ignore symbols. Default: false
   */
   ignoreSymbolKeys?: boolean;
};

export default function isEmpty(object: AnyObject, options: Options = {}): boolean {
  for(const property in object) {
    if(Object.prototype.hasOwnProperty.call(object, property)) {
      return false;
    }
  }
  if(options.ignoreSymbolKeys !== true) {
    const symbols = Object.getOwnPropertySymbols(object);
    if(symbols.length > 0) {
      return false;
    }
  }
  return true;
}
