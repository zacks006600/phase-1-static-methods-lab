class Formatter {
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, "");
  }

  static titleize (string) {
    const strArr = string.split(' ');
    const wordExceptions = ['a','an','and','at','but','by','for','from','of','the'];
    let capArr = [];
    for(let i = 1; i< strArr.length; i++){
      if((wordExceptions.find(element=>element === strArr[i])) !== strArr[i]){
      capArr.push(this.capitalize(strArr[i]));
    } else {
      capArr.push(strArr[i]);
    } }
    capArr.unshift(this.capitalize(strArr[0]));
    return capArr.join(' ')
  }
}