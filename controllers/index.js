const awesomeFunction = (req, res) => {
    res.send("Hello World!");
};
const showTTECH = (req, res) => {
    res.send("Tooele Tech is Awesome!");
};

module.exports = { 
    awesomeFunction,
    showTTECH 
};