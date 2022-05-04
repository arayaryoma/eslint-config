# Install

```
npm install --save-dev @arayaryoma/eslint-config
```

# Usage

This package exports some assembled ESLint configurations for each language/framework as modules. You can use them by extending configs under _presets/_ dir.

```js
// eslint.config.js
module.exports = {
  extends: ["@arayaryoma/presets/react-typescript"],
};
```

# Presets

- `react-typescript`: For React(>=17.0.0) with TypeScript (`.tsx`)
- `typescript`: For plain TypeScript files (`.ts`)
