import { sweep } from "./db.js";

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
main();

async function main() {
    for (;;) {
        sweep()
        await delay(10000);
    }
}