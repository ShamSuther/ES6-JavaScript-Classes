//async & await
async function Nothing(){
    console.log("1");
    await console.log("2");
    //the await doesn't effect the line on the code but after the line on code is complete
    console.log(`Awaited >> 3`);
}

console.log("4");
Nothing();
console.log("5");