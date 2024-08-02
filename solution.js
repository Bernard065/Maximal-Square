const maximalSquare = (matrix) => {
  // If the matrix is empty, return 0 since there cannot be any squares

  if (matrix.length === 0) return 0;

  // Initialize maxSide to store the length of the largest square side found
  let maxSide = 0;

  // Get the number of rows and columns in the matrix
  const rows = matrix.length;
  const cols = matrix[0].length; // matrix[0] refers to the first row of the matrix. Thus, matrix[0].length returns the number of elements in the first row.

  // Create a 2D dp array with dimensions (rows+1) x (cols+1) filled with 0s
  // The extra row and column (index 0) serve as boundaries to simplify boundary checks.
  const dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

  // Iterate over each cell in the matrix starting from (1, 1)
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      // Check if the current cell in the matrix is '1'
      if (matrix[1 - 1][j - 1] === "1") {
        // Calculate the size of the largest square ending at this cell
        // Th value is the minimum of the three adjacent cell plus one
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;

        // Update maxSide if the current dp[i][j] is greater than maxSide
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }

  // The area of the largest square is the square of the maxSide
  return maxSide * maxSide;
};
