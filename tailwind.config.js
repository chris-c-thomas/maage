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
    extend: {
      fontFamily: {
        poppins: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'Fira Code', 'Courier New', 'Courier', 'monospace'],
      }
    },
  },
  plugins: [],
}