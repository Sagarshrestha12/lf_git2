var input = {
  1: {
    id: 1,
    name: "John",
    children: [
      { id: 2, name: "Sally" },
      { id: 3, name: "Mark", children: [{ id: 4, name: "Harry" }] },
    ],
  },
  5: {
    id: 5,
    name: "Mike",
    children: [{ id: 6, name: "Peter" }],
  },
};

function normalize(obj) {
  // let obj_norm={}
  obj_norm = JSON.parse(JSON.stringify(obj));
  for (let x in obj) {
    obj_norm[x]["children"] = [];
    for (let y of obj[x]["children"]) {
      obj_norm[x]["children"].push(y["id"]);
    }
  }
  return obj_norm;
}
console.log(normalize(input));
