var uniquePathsV1 = function(m, n) {
    if (m === 1 || n ===1) return 1
    return uniquePaths(m-1, n) + uniquePaths(m, n-1)
};

var uniquePaths = function(m, n) {
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(m)
    }
   for(let j = 0; j < m; j++) {
       dp[0][j] = 1
   }
   for(let g = 0; g < n; g++) {
       dp[g][0] = 1
   }
   for (let i = 1; i < n; i++) {
       for (let j = 1; j <m; j++) {
           dp[i][j] = dp[i-1][j] + dp[i][j-1]
       }
   }
   return dp[n-1][m-1]
};

console.log(uniquePaths(2,3))

