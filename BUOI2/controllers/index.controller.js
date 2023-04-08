const getHome = (req, res) => {
    res.send("index")
};

const getLogin = (req, res) => {
    res.render("login")
};

const getRegister = (req, res) => {
    res.render("register")
};

module.exports = {
    getHome,
    getLogin,
    getRegister
}