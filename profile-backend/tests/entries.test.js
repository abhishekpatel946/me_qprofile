const entries = require("../data_entries_point");

test("check whether entries are being stored", () => {
  entry = {
    name: "Abhishek Patel",
    email: "abhishekpatel946@gmail.com",
    message: "I would love to work with you",
  };
  entries.putEntry(data);
  fetchedEntries = data_entries_point.getEntries();
  expect(fetchedEntries.pop()).toBe(data);
});
