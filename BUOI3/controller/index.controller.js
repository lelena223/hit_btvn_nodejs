const data = require("../data/data");

const getHeader = (req, res)=>{
    res.render(header);
}

const getHome = (request, response) => {
    console.log(data);
    response.json({
      msg: "success",
    });
};

const getFooter = (req, res)=>{
    res.render(footer);
}

module.exports = {
    getHeader,
    getHome,
    getFooter
}

