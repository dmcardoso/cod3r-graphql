const profiles = [
  {
    id: 1,
    name: "Common",
  },
  {
    id: 2,
    name: "Administrator",
  },
];
const users = [
  {
    id: 1,
    name: "Daniel",
    email: "daniel@mail.com",
    age: 22,
    profile_id: 1,
  },
  {
    id: 2,
    name: "Pedro",
    email: "pedro@mail.com",
    age: 26,
    profile_id: 1,
  },
  {
    id: 3,
    name: "Smith",
    email: "smith@mail.com",
    age: 29,
    profile_id: 2,
  },
];

module.exports = { users, profiles };
