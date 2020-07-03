const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const T = [
  [0, 1, 0],
  [-1, 0, 2],
  [0, 0, 1],
];
const n = A.length;
var B = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function rotateMatrix(n) {
  // n is odd
  for (let ix = 0; ix < n; ix++) {
    for (let jy = 0; jy < n; jy++) {
      for (let ik = 0; ik < n; ik++) {
        newx = jy;
        newy = -ix + 2;
        B[newy][newx] = A[jy][ix];
      }
    }
  }
}
rotateMatrix(3);
console.log(JSON.stringify(B));
