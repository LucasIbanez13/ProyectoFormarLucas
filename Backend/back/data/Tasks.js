const Tasks = function({ id, name, description }) {
    this.id = id;
    this.name = name.trim();
    this.description = description.trim();
}

module.exports = Tasks;
