const { profiles, users } = require("../data/db");

module.exports = {
  hello() {
    return "Default string";
  },
  date() {
    return new Date();
  },
  loggedUser() {
    return {
      id: 1,
      name: "Daniel",
      email: "dmcardso.99@hotmail.com",
      age: 15,
      real_salary: 15.5,
      vip: true,
    };
  },
  numbersArray() {
    const order = (a, b) => a - b;

    return Array(6)
      .fill(0)
      .map(() => parseInt(Math.random() * 61))
      .sort(order);
  },
  users() {
    return users;
  },
  user(_, args) {
    const { id } = args;
    const selecteds = users.filter((user) => user.id === id);

    return selecteds ? selecteds[0] : null;
  },
  profiles() {
    return profiles;
  },
  profile(_, args) {
    const { id } = args;
    const selecteds = profiles.filter((profile) => profile.id === id);

    return selecteds ? selecteds[0] : null;
  },
};
