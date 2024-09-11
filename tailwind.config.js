/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/main.ts"],
  theme: {
    extend: {
      backgroundImage: {
        dashboard: "url('/view-dashboard.svg')",
        notifications: "url('/notifications_active.svg')",
      },
      listStyleImage: {
        home: "url('/home.svg')",
        profile: "url('/face-man-profile.svg')",
        messages: "url('/message-reply.svg')",
        history: "url('/clock-time-three-outline.svg')",
        tasks: "url('/note-multiple.svg')",
        communities: "url('/account-group.svg')",
        settings: "url('/cog.svg')",
        support: "url('/help-box.svg')",
        privacy: "url('/shield-check.svg')",
      },
    },
  },
  plugins: [],
};
