const NextAuth = require("next-auth");

module.exports = NextAuth({
  // Other configuration options...

  callbacks: {
    async session(session, user) {
      // Modify the session object to include user-specific data
      session.user = {
        id: user.id,
        firstName: user.first_name,
        lastName: user.name,
        email: user.email,
        address: user.address,
        zip: user.zip,
        role: user.role,
        token: user.token,
      };
      return session;
    },
  },
});
