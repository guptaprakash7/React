const a = [1, 2, 3, 5, 3, 2];

const b = [];
const c = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) == -1) {
    c.push(a[i]);
  }

  b.push(a[i]);
}
console.log(c);