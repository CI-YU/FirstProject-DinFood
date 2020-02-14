module.exports = {
  plus: function (a, b) {
    return a + b;
  },
  //箭頭函式
  less: (a, b) => {
    return a - b;
  },
  //函數參數預設
  add: (a = 1, b = 2) => {
    return a * b;
  },
  //解構賦值設
  except: ({ a = 1, b = 1 }) => {
    return a / b;
  },

  //其餘參數
  sum: (...nums) => {
    let temp=0;
    for (let i = 0; i < nums.length; i++) {
      temp += nums[i]
    }
    return temp;
  }
}

