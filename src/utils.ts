export function isTouchDevice() {
  return "ontouchstart" in document.documentElement;
}

// https://stackoverflow.com/a/2117523/8706204
// tslint:disable: no-bitwise
export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c: string) => {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
// tslint:enable: no-bitwise
