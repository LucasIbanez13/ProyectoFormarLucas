var express = require('express');
var router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/controllerTasks");

/* GET home page. */

router.get("/", getTasks);
router.post("/tasks", createTask);
router.put("/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
