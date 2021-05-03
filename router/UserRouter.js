const express = require("express");
const router = express.Router();

const users = require("../models/data")

router.get("/", (req, res)=>{
    res.render("user", { users: users.userList, id:"" })
})
router.get("/:id", (req, res)=>{
    res.render("user", {users: users.userList, id:req.params.id})
    console.log(req.params.id)
})

module.exports = router