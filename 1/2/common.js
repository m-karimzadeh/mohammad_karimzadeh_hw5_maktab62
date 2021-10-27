const r = a.filter(({ id: idv }) => b.every(({ id: idc }) => idv !== idc));
const newArr = b.concat(r).map((v) => v.position ? v : { ...v, position: null });

console.log(JSON.stringify(newArr));