const p1 = {
    xp1: " I am inside p1",
};

const p2 = {
    xp2: "I am inside p2",
    __proto__: p1, // Set p1 as the prototype of p2
}
const p3 = {
    xp3: "I am inside p3",
    __proto__: p2, // Set p2 as the prototype of p3
}