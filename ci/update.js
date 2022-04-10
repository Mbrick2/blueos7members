/* RUNS IN NODEJS ONLY! */
const fetch = require("cross-fetch");
const fs = require("fs");
const id = 31229283; 
(async() => {
  let managers = [];
  let curators = [];
  const managerReq = await fetch("https://api.scratch.mit.edu/studios/" + id.toString() + "/managers");
  managers = await managerReq.json();
  const curatorReq = await fetch("https://api.scratch.mit.edu/studios/" + id.toString() + "/curators");
  curators = await curatorReq.json();
  
  console.log(`${managers.length} managers, ${curators.length} curators`);
  fs.writeFileSync("./managers.json", JSON.stringify(managers));
  fs.writeFileSync("./curators.json", JSON.stringify(curators));
  console.log("written");
})();
