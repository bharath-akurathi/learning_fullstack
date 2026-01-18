
# Tailwind CSS Setup (Latest Version)
https://tailwindcss.com/docs/installation/tailwind-cli

This guide explains how to set up **Tailwind CSS v4+** in a simple HTML project.

> ✅ Tailwind CSS v4 introduces **zero-config by default**, meaning you no longer need a `tailwind.config.js` file for basic usage.

---

## Step 1: Install Tailwind CSS CLI

Install Tailwind CSS and its official CLI as development dependencies:

```bash
npm install -D tailwindcss @tailwindcss/cli
```

> ⚠️ `npx tailwindcss init` is **no longer required** in the latest version.

---

## Step 2: Create the CSS Input File

Create a file at `src/input.css` and add the following line:

```css
@import "tailwindcss";
```

This single import replaces the old `@tailwind base`, `components`, and `utilities` directives.

---

## Step 3: Create Your HTML File

Example `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="./src/output.css" rel="stylesheet">
  <title>Tailwind CSS v4</title>
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">
  <h1 class="text-3xl font-bold text-blue-600">
    Hello Tailwind CSS v4
  </h1>
</body>
</html>
```

---

## Step 4: Build Tailwind CSS

Run the following command to generate your CSS file:

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

* `-i` → input CSS file
* `-o` → output CSS file
* `--watch` → automatically rebuilds on changes

---

## Step 5: Start Building 🎉

Open your HTML file in the browser and start using Tailwind utility classes.

Tailwind will automatically detect your HTML files—no `content` configuration is needed.

---

## Optional: Using a Config File

If you need customization (themes, plugins, etc.), you can still create a config file:

```bash
npx tailwindcss init
```

But for most projects, this is **optional**.

---

## Summary of Differences from Older Versions

| Old Tailwind (v3)                     | New Tailwind (v4+)       |
| ------------------------------------- | ------------------------ |
| `tailwind.config.js` required         | Zero-config by default   |
| `@tailwind base/components/utilities` | `@import "tailwindcss";` |
| Manual `content` paths                | Automatic detection      |
| `tailwindcss` CLI only                | `@tailwindcss/cli`       |

---

✅ You’re now set up with the **latest Tailwind CSS**.

Happy styling! 💨
