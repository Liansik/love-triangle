/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(p = []) {
  // your implementation
  var r = new Set()
  p.forEach((item, i, arr) =>{
    var FS = arr[item-1];
    var SS = arr[FS-1];
    var TS = arr[SS-1];
    if (TS==item){
      [item,FS,SS].map(item =>r.add(item));
    }
  });
    return Math.floor (r.size / 3);
  };
