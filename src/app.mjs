import { route } from "./api/router.mjs";

const response = route({ path: process.argv[2] || "/report" });
console.log(JSON.stringify(response, null, 2));
