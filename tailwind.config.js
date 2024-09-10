/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/main.ts"],
  theme: {
    extend: {
      listStyleImage: {
        home: "url('./public/home.svg')",
        profile: "url('./public/face-man-profile.svg')",
        messages: "url('./public/message-reply.svg')",
        history: "url('./public/clock-time-three-outline.svg')",
        tasks: "url('./public/note-multiple.svg')",
        communities: "url('./public/account-group.svg')",
        settings: "url('./public/cog.svg')",
        support: "url('./public/help-box.svg')",
        privacy: "url('./public/shield-check.svg')",
      },
    },
  },
  plugins: [],
};
