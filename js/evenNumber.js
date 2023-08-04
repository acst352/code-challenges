function evenNumber(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 != 0) {
      document.write(+i + ", ");
    }
  }
}

evenNumber(100);