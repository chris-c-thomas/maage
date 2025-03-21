module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/js/**/*.js",
    "!./public/js/**/node_modules/**/*",
    "!./public/js/**/.git/**/*",
    "./public/**/*.html",
    "!./public/**/node_modules/**/*",
    "!./public/**/.git/**/*",
    "./routes/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}