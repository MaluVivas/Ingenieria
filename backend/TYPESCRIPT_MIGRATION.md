# TypeScript Migration Guide

**Date:** May 17, 2026  
**Project:** Backend Express Template  
**Migration:** JavaScript → TypeScript

---

## What is TypeScript?

TypeScript is a **superset of JavaScript** that adds **static typing**. This means:
- You can specify what type of data a variable holds (string, number, etc.)
- Errors are caught **before** you run your code (at compile time)
- Better IDE support with autocomplete and intelligent suggestions
- Your code becomes more self-documenting and easier to understand

---

## Step 1: New Dependencies Installed

### Command Run:
```bash
npm install --save-dev typescript ts-node @types/node @types/express @types/cors
```

### What Each Package Does:

| Package | Purpose | Why We Need It |
|---------|---------|----------------|
| `typescript` | The TypeScript compiler (tsc) | Converts TypeScript (.ts) files to JavaScript (.js) files |
| `ts-node` | Runs TypeScript directly without compiling | Useful for development - no need to compile every time |
| `@types/node` | Type definitions for Node.js | Tells TypeScript about Node.js built-in modules like `path`, `fs`, etc. |
| `@types/express` | Type definitions for Express | Tells TypeScript about Express types like `Request`, `Response`, `Application` |
| `@types/cors` | Type definitions for CORS | Tells TypeScript about the CORS middleware types |

> **Student Note:** Type definitions (packages starting with `@types/`) are like instruction manuals that teach TypeScript how to work with JavaScript libraries.

---

## Step 2: Create tsconfig.json

This is the **configuration file** for TypeScript. It tells the compiler how to behave.

### File Location: `tsconfig.json` (root directory)

```json
{
  "compilerOptions": {
    "target": "ES2020",              // Convert TS to modern JavaScript (ES2020)
    "module": "commonjs",            // Use Node.js module system (require/module.exports style)
    "outDir": "./dist",              // Put compiled JavaScript files in the 'dist' folder
    "rootDir": "./",                 // Source files are in the root directory
    "strict": true,                  // Enable all strict type-checking options (catch more errors!)
    "esModuleInterop": true,         // Allow default imports from CommonJS modules
    "skipLibCheck": true,            // Skip type checking of declaration files (faster compilation)
    "forceConsistentCasingInFileNames": true,  // Enforce case-sensitive file names
    "resolveJsonModule": true        // Allow importing JSON files
  },
  "include": ["src/**/*", "server.ts"],  // Which files to compile
  "exclude": ["node_modules", "dist"]    // Which folders to ignore
}
```

### Student Explanation:
- **target**: Like choosing which JavaScript version your browser/Node.js understands
- **module**: How files import/export things (CommonJS is the Node.js way)
- **outDir**: Where the compiled JavaScript goes (keep it separate from source code!)
- **strict**: Like turning on "hard mode" - catches more potential bugs
- **esModuleInterop**: Makes `import express from 'express'` work smoothly

---

## Step 3: File Renaming

All `.js` files become `.ts` files:

| Old File (JavaScript) | New File (TypeScript) |
|-----------------------|-----------------------|
| `server.js` | `server.ts` |
| `src/app.js` | `src/app.ts` |
| `src/routes/userRoutes.js` | `src/routes/userRoutes.ts` |

> **Why?** The `.ts` extension tells tools "this is TypeScript code, please type-check it!"

---

## Step 4: Code Changes

### 4.1 **server.ts** (Main Server File)

#### BEFORE (JavaScript):
```javascript
const app = require('./src/app');
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Express JS');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

#### AFTER (TypeScript):
```typescript
import app from './src/app';  // ES6 import instead of require

const PORT: number = 3000;    // Type annotation: PORT must be a number

app.get('/', (req, res) => {
    res.send('Express JS');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

#### What Changed:
1. **`require()` → `import`**: Modern ES6 syntax for importing modules
2. **`const PORT: number`**: Type annotation - TypeScript will yell if you try to assign a string to PORT
3. Route handlers can optionally be typed as `(req: Request, res: Response)` for better autocomplete

---

### 4.2 **src/app.ts** (Express App Configuration)

#### BEFORE (JavaScript):
```javascript
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
```

#### AFTER (TypeScript):
```typescript
import cors from 'cors';                           // ES6 import
import express, { Application } from 'express';    // Import with type
import path from 'path';

const app: Application = express();  // Type: app is an Express Application

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

export default app;  // ES6 export instead of module.exports
```

#### What Changed:
1. **All `require()` → `import`**: Cleaner, modern syntax
2. **`Application` type imported**: Tells TypeScript that `app` is an Express Application
3. **`const app: Application`**: Type annotation for better IDE support
4. **`module.exports` → `export default`**: ES6 module syntax

> **Student Tip:** When you type `app.` in your editor, you'll now see all available Express methods with descriptions!

---

### 4.3 **src/routes/userRoutes.ts** (Route Handlers)

If you create routes, here's the pattern:

#### TypeScript Version:
```typescript
import { Router, Request, Response } from 'express';

const router: Router = Router();

// With full type annotations (recommended for learning)
router.get('/users', (req: Request, res: Response) => {
    res.json({ message: 'Get all users' });
});

// TypeScript can also infer types automatically
router.post('/users', (req, res) => {
    res.json({ message: 'Create user' });
});

export default router;
```

#### Type Explanations:
- **`Router`**: The type for an Express router object
- **`Request`**: The type for incoming HTTP requests (has properties like `body`, `params`, `query`)
- **`Response`**: The type for HTTP responses (has methods like `send()`, `json()`, `status()`)

---

## Step 5: package.json Updates

### Scripts Section Changes:

#### BEFORE:
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

#### AFTER:
```json
"scripts": {
  "build": "tsc",                                  // Compile TypeScript to JavaScript
  "start": "node dist/server.js",                  // Run the compiled JavaScript
  "dev": "nodemon --exec ts-node server.ts",       // Run TypeScript directly (development)
  "dev:watch": "nodemon --watch src --exec ts-node server.ts"  // Watch for changes
}
```

### Main Entry Point Change:
```json
"main": "dist/server.js"  // Point to compiled output
```

---

## Step 6: New Workflow

### Development Mode (While Coding):
```bash
npm run dev
```
- Uses `ts-node` to run TypeScript **directly**
- No compilation step needed
- Faster for development
- Nodemon automatically restarts when files change

### Production Mode (Deploy to Server):
```bash
# Step 1: Compile TypeScript to JavaScript
npm run build

# Step 2: Run the compiled JavaScript
npm start
```

> **Why two steps?** TypeScript is not natively supported by Node.js. We must compile it to JavaScript first!

---

## Benefits You Get with TypeScript

### 1. **Catch Errors Early**
```typescript
const PORT: number = 3000;
PORT = "hello";  // ERROR: Type 'string' is not assignable to type 'number'
```

### 2. **Better Autocomplete**
When you type `req.` or `res.`, your editor shows all available properties and methods with documentation.

### 3. **Self-Documenting Code**
```typescript
function createUser(name: string, age: number): User {
  // Just by reading the signature, you know:
  // - name must be a string
  // - age must be a number
  // - function returns a User object
}
```

### 4. **Refactoring Confidence**
If you rename a function, TypeScript finds all usages and helps update them. No silent bugs!

---

## New Folder Structure

```
backx/
├── dist/                  # NEW: Compiled JavaScript (created by 'npm run build')
│   ├── server.js
│   └── src/
│       └── app.js
├── node_modules/
├── public/
├── src/
│   ├── app.ts            # RENAMED from app.js
│   └── routes/
│       └── userRoutes.ts # RENAMED from userRoutes.js
├── package.json          # UPDATED: new scripts and dependencies
├── server.ts             # RENAMED from server.js
├── tsconfig.json         # NEW: TypeScript configuration
└── TYPESCRIPT_MIGRATION.md # This file!
```

---

## Common Beginner Questions

### Q: Do I need to compile every time I make a change?
**A:** No! In development mode (`npm run dev`), `ts-node` runs TypeScript directly. Only compile for production.

### Q: What's the difference between `.ts` and `.js` files?
**A:** `.ts` files have TypeScript syntax with types. They must be compiled to `.js` files to run in Node.js.

### Q: Can I mix TypeScript and JavaScript files?
**A:** Yes! You can gradually migrate. TypeScript can import JavaScript files.

### Q: Why is the `dist` folder in `.gitignore`?
**A:** The `dist` folder contains compiled code. We only commit source code (`.ts` files), not the compiled output.

### Q: What if I don't want to add types everywhere?
**A:** TypeScript can infer most types automatically! You only add type annotations where needed or for clarity.

---

## Migration Checklist

- [x] Install TypeScript dependencies
- [x] Create `tsconfig.json`
- [ ] Rename `.js` files to `.ts`
- [ ] Update imports (`require` → `import`)
- [ ] Update exports (`module.exports` → `export`)
- [ ] Add type annotations (optional but recommended)
- [ ] Update `package.json` scripts
- [ ] Test with `npm run dev`
- [ ] Test production build with `npm run build && npm start`
- [ ] Update `.gitignore` to exclude `dist/` folder

---

## Next Steps for Learning

1. **Add types to route handlers** for better editor support
2. **Create interfaces** for your data models (e.g., `interface User { id: number; name: string; }`)
3. **Enable strict mode** in `tsconfig.json` (we already did this!)
4. **Explore the TypeScript Handbook**: https://www.typescriptlang.org/docs/handbook/

---

