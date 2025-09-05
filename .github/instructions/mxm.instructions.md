# Prompt for Copilot Chat (Jekyll + SCSS, error-proof)

You are helping me build/modify a **Jekyll 4.2.2** site. Follow these
rules strictly so the site **builds without errors** and stays
compatible with vanilla `jekyll build` / `jekyll serve`.

## Hard rules

1.  **No Sass unit mixing at compile time.** Never do arithmetic in Sass
    that mixes units (e.g., `100vw - 16px`).
    -   ✅ Use raw CSS math: `width: calc(100vw - 16px);`\
    -   ✅ If variables are used in `calc()`, **force runtime
        evaluation** with interpolation: `calc(100vw - #{$space-4})`.\
    -   ✅ Prefer `clamp()` and `%`/`em`/`rem` conversions instead of
        Sass math across incompatible units.\
    -   ❌ Don't write Sass like `width: 100vw - 16px;` or
        `#{100vw - 16px}`.
2.  Use **Dart Sass module syntax**: `@use "sass:math"`; replace
    deprecated `/` with `math.div()`.
3.  Keep Liquid and Sass separate: **don't** put Liquid inside `.scss`
    files. Liquid stays in HTML/MD.
4.  Only standard Jekyll features; **no Node bundlers** and **no
    unsupported plugins**. Assume local `jekyll 4.2.2`.
5.  All layouts and includes must render without missing variables
    (provide safe defaults in Liquid).

## Project skeleton (create/maintain)

    .
    ├─ _config.yml
    ├─ _layouts/
    │  ├─ default.html
    │  └─ page.html
    ├─ _includes/
    │  ├─ head.html
    │  └─ header.html
    ├─ _sass/
    │  ├─ _tokens.scss
    │  ├─ _mixins.scss
    │  └─ _base.scss
    ├─ assets/
    │  └─ main.scss      # imports from _sass only
    ├─ index.md
    └─ pages/
       └─ about.md

### `_config.yml` (ensure these keys exist; add others as needed)

``` yml
title: Site Title
description: Site description
markdown: kramdown
sass:
  style: compressed
exclude:
  - node_modules
```

## Unit-safe SCSS tokens & helpers (use these patterns)

Create/extend the following files and use these variables/mixins in all
styles.

**`_sass/_tokens.scss`**

``` scss
@use "sass:math";

// Scale
$rem-base: 16px;
@function rem($px) { @return math.div($px, $rem-base) * 1rem; } // unit-safe

// Spacing
$space-1: rem(4px);
$space-2: rem(8px);
$space-3: rem(12px);
$space-4: rem(16px);
$space-6: rem(24px);
$space-8: rem(32px);

// Fluid type without unit mixing in Sass
// Use runtime calc + clamp to avoid Sass doing math across px/vw.
$font-min: 1rem;  // ~16px
$font-max: 1.5rem; // ~24px
$viewport-min: 320; // unitless for CSS calc
$viewport-max: 1280;

@function fluid($min, $max) {
  // Returns clamp(min, fluid, max) with runtime calc
  @return clamp(#{$min},
    calc(#{$min} + (#{ $max } - #{$min}) * ((100vw - #{$viewport-min}px) / (#{$viewport-max - $viewport-min}))),
    #{$max});
}

// Colors
$fg: #111;
$bg: #fff;
$muted: #666;
$primary: #182640;;
```

**`_sass/_mixins.scss`**

``` scss
@use "sass:math";

@mixin container($max: 72rem, $pad: $space-4) {
  width: min(100%, #{$max});
  padding-inline: $pad;
  margin-inline: auto;
}

// Safe responsive spacing using calc at runtime
@mixin fluid-gap($min: $space-2, $max: $space-6) {
  gap: clamp(#{$min},
             calc(#{$min} + (#{ $max } - #{$min}) * ((100vw - 320px) / (1280 - 320))),
             #{$max});
}
```

**`_sass/_base.scss`**

``` scss
@use "sass:math";
@use "tokens";

:root {
  color-scheme: light;
}

*,
*::before,
*::after { box-sizing: border-box; }

html { font-size: 100%; }

body {
  margin: 0;
  color: tokens.$fg;
  background: tokens.$bg;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  line-height: 1.6;
  font-size: tokens.fluid(1rem, 1.125rem);
}

a { color: tokens.$primary; text-decoration: none; }
a:hover { text-decoration: underline; }
```

**`assets/main.scss`** (only imports; no Liquid; no unit-mixing math)

``` scss
---
# Front matter so Jekyll processes Sass
---

@use "sass:math";
@use "../_sass/tokens";
@use "../_sass/mixins";
@use "../_sass/base";
```

## Liquid safety patterns (avoid build breaks)

-   Default all variables:

    ``` liquid
    <title>{{ page.title | default: site.title }}</title>
    ```

-   Guard optional arrays:

    ``` liquid
    {% assign nav = site.data.nav | default: empty %}
    {% for item in nav %}
      <a href="{{ item.url | escape }}">{{ item.title | escape }}</a>
    {% endfor %}
    ```

-   Don't call filters on `nil` without `default:` first.

## Layouts (minimal, safe)

**`_layouts/default.html`**

``` html
<!doctype html>
<html lang="en">
  <head>
    {% include head.html %}
  </head>
  <body>
    {% include header.html %}
    <main class="container">
      {{ content }}
    </main>
  </body>
</html>
```

**`_includes/head.html`**

``` html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{ page.title | default: site.title }}</title>
<link rel="stylesheet" href="{{ '/assets/main.css' | relative_url }}">
```

**`_includes/header.html`**

``` html
<header class="site-header">
  <a href="{{ '/' | relative_url }}">{{ site.title | escape }}</a>
</header>
```

## When you need "vw minus px"

-   Write **exactly**: `width: calc(100vw - 16px);`

-   If a variable provides the px value, **interpolate** inside
    `calc()`:

    ``` scss
    $gutter: $space-4; // rem value from tokens
    .wrap { width: calc(100vw - #{$gutter}); } // runtime calc, no Sass unit math
    ```

-   Never let Sass evaluate `vw - px` outside `calc()`.

## Checklist before returning code

-   [ ] No `/` for division in Sass; only `math.div`.
-   [ ] No arithmetic between `px`/`rem` and `vw`/`vh` in Sass. Use
    `calc()`/`clamp()`.
-   [ ] No Liquid in `.scss` files.
-   [ ] `assets/main.scss` has front matter and only `@use` imports.
-   [ ] All Liquid variables have safe defaults.
-   [ ] `jekyll build` completes without `Jekyll::Converters::Scss`
    errors.

## Commands I will run locally (optimize for these)

    bundle exec jekyll serve --livereload
    # or
    jekyll serve

## If a Sass error occurs (what you should do)

1.  Identify any expression where Sass is doing math with mixed units.
2.  Replace with `calc()` (runtime math) and interpolation for
    variables.
3.  If fluid behavior is intended, use a `clamp(min, preferred, max)`
    pattern with unit-consistent `min`/`max`.
4.  Re-test with `jekyll build`.

------------------------------------------------------------------------

### Example fix (common offender)

**Problem (don't do this):**

``` scss
.hero { padding-inline: (100vw - 24px) / 2; } // ❌ Sass tries to compute vw - px
```

**Correct:**

``` scss
.hero { padding-inline: calc((100vw - 24px) / 2); } // ✅ runtime calc, no Sass unit math
```

or with a variable:

``` scss
$gutter: rem(24px);
.hero { padding-inline: calc((100vw - #{$gutter}) / 2); } // ✅
```
