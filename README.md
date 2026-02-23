# registry-template

The default project template used by [`shadr init`](https://github.com/ShadRegistry/registry/tree/main/cli).

## Usage

This repo is downloaded automatically when you run:

```bash
shadr init
```

To use a custom template instead:

```bash
shadr init --template myorg/my-template
```

## Structure

```
.gitignore
components.json          # shadcn config
tsconfig.json
vite.config.ts           # preview dev server
package.json             # {{REGISTRY_NAME}} placeholder
shadregistry.config.json # {{REGISTRY_NAME}}, {{SOURCE_DIR}}, {{API_URL}}
registry.json            # {{REGISTRY_NAME}}
src/
  lib/
    utils.ts             # cn() helper
  preview/
    index.html
    globals.css
    main.tsx
    App.tsx
    registry.ts
  registry/
    new-york/
      items/
        .gitkeep
```

## Placeholders

Three files contain placeholders that `shadr init` replaces at setup time:

| Placeholder          | Replaced with                |
| -------------------- | ---------------------------- |
| `{{REGISTRY_NAME}}`  | Your registry name           |
| `{{SOURCE_DIR}}`     | Component source directory   |
| `{{API_URL}}`        | ShadRegistry API URL         |

## Custom templates

Create your own template repo with the same structure. Any file can use the placeholders above. Files that already exist in the target directory are never overwritten.

```bash
shadr init --template your-org/your-template
```
