var express = require('express');
var router = express.Router();
const { getTasks, createTask } = require("../controllers/controllerTasks");

/* GET home page. */

router.get("/", getTasks);
router.post("/tasks", createTask);

module.exports = router;
