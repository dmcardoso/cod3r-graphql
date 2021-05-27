const { nextId, users } = require("../data/db");

module.exports = {
  newUser(_, { name, email, age }) {
    const existingEmail = users.some((user) => {
      return user.email === email;
    });

    if (existingEmail) {
      throw new Error("E-mail registered");
    }

    const newUser = {
      id: nextId(),
      name,
      email,
      age,
      profile_id: 1,
      status: "ACTIVE",
    };

    users.push(newUser);

    return newUser;
  },
  deleteUser(_, { id }) {
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex < 0) return null;

    const deleted = users.splice(userIndex, 1);

    return deleted ? deleted[0] : null;
  },
};
