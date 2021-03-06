const orm = require("../config/orm");

function Burger(name) {
    this.name = name;
    this.devoured = false;
}

Burger.selectBurgers = function () {
    return new Promise((resolve, reject) => {
        orm.selectAll("burger").then(results => {
            resolve(results);
        }).catch(() => {
            reject("Could not retrieve burgers");
        });
    });
};

Burger.create = function (burger) {
    return new Promise((resolve, reject) => {
        orm.insertOne("burger", {
            burger_name: burger.name,
            devoured: 0
        }).then(results => {
            // Get db generated ID
            burger.id = results.insertId;
            resolve(burger.id);
        }).catch(err => {
            console.log("ERROR IN MODEL ", err)
            reject("Could not add burger");
        });
    });
};

Burger.updateDevoured = function (burgerId) {
    return new Promise((resolve, reject) => {
        orm.updateOne("burger", "devoured", 1, "ID", burgerId).then(results => {
            resolve(results);
        }).catch(() => {
            reject("Could not update burger");
        });
    })
};


module.exports = Burger;