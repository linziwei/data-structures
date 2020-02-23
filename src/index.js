var restoreIpAddresses = function (s) {
  let res = []
  const DF = (level, str, last) => {
    if (level === 3) {
      if (str.length <= 3 && parseInt(str) <= 255) {
        if (str.length >= 2 && str[0] == 0) return
        let item = last.concat(str)
        res.push(item)
      }
      return
    }
    if (level < 3) {
      let item = str.slice(0, 1).concat(".")
      DF(level + 1, str.slice(1), last.concat(item))
      if (str[0] != 0) {
        item = str.slice(0, 2).concat(".")
        DF(level + 1, str.slice(2), last.concat(item))
        if (parseInt(str.slice(0, 3)) <= 255) {
          item = str.slice(0, 3).concat(".")
          DF(level + 1, str.slice(3), last.concat(item))
        }
      }
    }
  }
  DF(0, s, "")
  return res
};
const s = "25525511135"
console.log(restoreIpAddresses(s))