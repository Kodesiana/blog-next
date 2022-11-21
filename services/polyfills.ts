export {};

declare global {
  interface Array<T> {
    valueCounts(): Record<string, number>;
    unique(): Array<T>;
  }
}

// https://stackoverflow.com/a/64936339
Array.prototype.valueCounts = function (): Record<string, number> {
  return this.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
};

// https://stackoverflow.com/a/14438954
Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};
