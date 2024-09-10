/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/main.ts"],
  theme: {
    extend: {
      listStyleImage: {
        home: "url('./src/images/home.svg')",
        profile: "url('./src/images/face-man-profile.svg')",
        messages: "url('./src/images/message-reply.svg')",
        history: "url('./src/images/clock-time-three-outline.svg')",
        tasks: "url('./src/images/note-multiple.svg')",
        communities: "url('./src/images/account-group.svg')",
        settings: "url('./src/images/cog.svg')",
        support: "url('./src/images/help-box.svg')",
        privacy: "url('./src/images/shield-check.svg')",
      },
    },
  },
  plugins: [],
};
