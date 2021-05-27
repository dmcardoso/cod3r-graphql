const { profiles } = require("../data/db");

module.exports = {
  salary(user) {
    return user.real_salary;
  },
  profile(user) {
    const profile = profiles.filter(
      (profile) => profile.id === user.profile_id
    );
    return profile ? profile[0] : null;
  },
};
