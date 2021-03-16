const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("profile-database.json");
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ data_entries_point: [] }).write();

// Get the data from entries and push & write
function putEntry(data) {
  db.get("data_entries_point").push(data).write();
}

// get the store entries
function getEntries() {
  return db.get("data_entries_point").value();
}

module.exports = {
  putEntry,
  getEntries,
};
