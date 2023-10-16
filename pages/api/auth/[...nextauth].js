import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({

    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith", value: "ehmed@compar.edu.az" },
                password: { label: "Password", type: "password", value: "Ehmed@123" }
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch("https://localhost:7037/api/v1/User/Login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials?.username,
                            password: credentials?.password,
                        }),
                    });
                    if (res.ok) {
                        const user = await res.json();
                        console.log("token: " + user);

                        // Return the user data and the JWT token
                        return user ;
                    } else {
                        console.error("Fetch request failed with status:", res.status);

                        // Return null to indicate authentication failure
                        return null;
                    }
                } catch (error) {
                    console.error("An error occurred:", error);

                    // Return null to indicate authentication failure
                    return null;
                }
            },
        })

    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
          },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    }
})