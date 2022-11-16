function rgbToYuv(array, rowLength, subarrayRowLength){
  let red = []
  let row = []
  let gb = []
  const arrLength = array.length
  const subArrayQuantity = rowLength / subarrayRowLength

  function isNewRow(length){
    return length % 2 === 0
  }

  for(let i = 0; i < arrLength; i += 3){
    red.push(array[i]);
    if(i % rowLength === 0){ //Each row has 12 numbers
      if(isNewRow(row.length + 1)){ //If new row is even, add the previous 2
        gb.push(array[i+1] - subArrayQuantity)
        gb.push(array[i+2] - subArrayQuantity)
      } 
      else{
        gb.push(array[i+1])
        gb.push(array[i+2])
      }
      row.push(i) //Keep track of each row
    }
  }
  return [...red,...gb]
}

const frames = [
  1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
 44, 45, 46, 47, 48
]

const YUV = rgbToYuv(frames, 12, 6)
console.log(YUV)