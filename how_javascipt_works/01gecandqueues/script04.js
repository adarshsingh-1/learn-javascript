console.log("Start of Script 04");
Promise.resolve().then(() => {
    console.log("A");
    Promise.resolve().then(() => {
        console.log("B");
        Promise.resolve().then(() => {
            console.log("C");
        });
    });
});

setTimeout(() => {
    console.log("From Timeout");
})

console.log("End of Script 04");
