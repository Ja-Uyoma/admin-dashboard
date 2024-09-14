/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/main.ts"],
  theme: {
    extend: {
      backgroundImage: {
        dashboard: "url('/view-dashboard.svg')",
        notifications: "url('/bell-ring.svg')",
        search: "url('/magnify.svg')",
        profile: "url('/face-man-profile.svg')",

        home: "url('/home-filled.svg')",
        messages: "url('/mode-comment-filled.svg')",
        history: "url('/schedule-filled.svg')",
        tasks: "url('/format_list_bulleted_add.svg')",
        communities: "url('/group.svg')",
        settings: "url('/cog-filled.svg')",
        support: "url('/contact_support.svg')",
        privacy: "url('/verified_user.svg')",

        eye: "url('/eye-plus-outline.svg')",
        fork: "url('/source-fork.svg')",
        star: "url('/star-plus-outline.svg')",
      },
    },
  },
  plugins: [],
};
