Below is a **concise but comprehensive Tailwind CSS development cheatsheet / mini-documentation** for the **latest Tailwind CSS (v4+)**.
You can use this as a **developer guide**, quick reference, or drop it directly into a `TAILWIND_CHEATSHEET.md` or `README.md`.

---

# Tailwind CSS – Developer Cheatsheet (v4+)

A practical reference for **commands, configuration, utilities, and workflow** when developing with Tailwind CSS.

---

## 1. Installation & Setup

### Install Tailwind CSS CLI

```bash
npm install -D tailwindcss @tailwindcss/cli
```

### Create input CSS

```css
/* src/input.css */
@import "tailwindcss";
```

### Build CSS (watch mode)

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### Build once (production)

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css
```

---

## 2. Project Structure (Recommended)

```
project/
├─ src/
│  ├─ input.css
│  └─ output.css
├─ index.html
├─ package.json
└─ node_modules/
```

---

## 3. Core Concepts

### Utility-First CSS

Instead of writing custom CSS:

```html
<div class="p-4 bg-blue-500 text-white rounded-lg">
  Button
</div>
```

---

## 4. Layout Utilities

### Display

```
block inline inline-block flex grid hidden
```

### Flexbox

```
flex
flex-row flex-col
items-start items-center items-end
justify-start justify-center justify-between
gap-1 gap-2 gap-4 gap-8
```

### Grid

```
grid
grid-cols-1 grid-cols-2 grid-cols-12
col-span-1 col-span-6
gap-4
```

---

## 5. Spacing

### Padding

```
p-1 p-2 p-4 p-8
px-4 py-2
pt-4 pr-4 pb-4 pl-4
```

### Margin

```
m-1 m-4
mx-auto
mt-4 mb-4
```

---

## 6. Sizing

### Width

```
w-4 w-8 w-16
w-1/2 w-full
max-w-sm max-w-lg max-w-screen-lg
```

### Height

```
h-4 h-16
h-screen
min-h-screen
```

---

## 7. Typography

### Font Size

```
text-xs text-sm text-base
text-lg text-xl text-2xl text-4xl
```

### Font Weight

```
font-light font-normal font-medium
font-semibold font-bold
```

### Text Alignment & Style

```
text-left text-center text-right
italic not-italic
uppercase lowercase capitalize
```

---

## 8. Colors

### Text

```
text-black text-white
text-gray-500
text-blue-600
```

### Background

```
bg-white bg-black
bg-gray-100
bg-red-500 bg-green-500
```

### Border

```
border
border-gray-300
border-2
rounded rounded-md rounded-lg rounded-full
```

---

## 9. Positioning

```
relative absolute fixed sticky
top-0 right-0 bottom-0 left-0
z-10 z-20 z-50
```

---

## 10. Effects

### Shadows

```
shadow
shadow-md
shadow-lg
shadow-xl
```

### Opacity

```
opacity-0 opacity-50 opacity-100
```

---

## 11. Transitions & Animations

### Transitions

```
transition
transition-all
duration-150 duration-300 duration-500
ease-in ease-out ease-in-out
```

### Hover / Focus

```html
<button class="bg-blue-500 hover:bg-blue-600 transition">
```

---

## 12. Responsive Design

### Breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Example

```html
<div class="text-sm md:text-lg lg:text-xl">
```

---

## 13. State Variants

```
hover:
focus:
active:
disabled:
group-hover:
```

### Example

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2">
```

---

## 14. Dark Mode

### Enable (HTML-based)

```html
<html class="dark">
```

### Usage

```html
<div class="bg-white dark:bg-black text-black dark:text-white">
```

---

## 15. Forms

```
appearance-none
outline-none
focus:ring
focus:border-blue-500
```

Example:

```html
<input class="border p-2 rounded focus:ring-2 focus:ring-blue-500" />
```

---

## 16. Customization (Optional)

### Create Config File

```bash
npx tailwindcss init
```

### Extend Theme

```js
export default {
  theme: {
    extend: {
      colors: {
        brand: "#1da1f2",
      },
    },
  },
}
```

---

## 17. Best Practices

✅ Use utility classes first
✅ Extract reusable components only when needed
✅ Use `flex` & `grid` for layouts
✅ Avoid writing custom CSS unless necessary
✅ Let Tailwind handle responsiveness

---

## 18. Common Mistakes

❌ Forgetting to run the build command
❌ Editing `output.css` directly
❌ Overusing custom CSS
❌ Not using responsive prefixes

---

## 19. Useful Commands Summary

```bash
npm install -D tailwindcss @tailwindcss/cli
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
npx tailwindcss init
```

---

## 20. Official Docs

📘 [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---