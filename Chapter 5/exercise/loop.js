function loop(seedValue, testFn, updateFn, body) {
  while (testFn(seedValue)) {
    body(seedValue)
    seedValue = updateFn(seedValue)
  }
}
loop(3, n => n > 0, n => n - 1, console.log)
