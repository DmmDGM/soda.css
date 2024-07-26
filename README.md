# Soda.css

Soda.css - "Go fizz™"

## About

Soda.css is a small CSS project that offers clean default styling templates and a simple color palette.

If your project requires more complicated features, such as dynamic interactions or component stylings, perhaps you can try out other libraries, for example, [Bootstrap](https://getbootstrap.com/) or [Tailwind CSS](https://tailwindcss.com/).

The project is open source and is protected under the [MIT license](https://opensource.org/license/mit). See license in [`Soda.css/LICENSE`](./LICENSE).

All changes can be found in [`Soda.css/CHANGELOG`](./CHANGELOG).

Let me know if you have any questions or requests on Discord: `@therock2t`.

## Download

### Option 1: Compile from source

Open a terminal and run the following commands:

```shell
git clone https://github.com/DmmDGM/soda.css
cd soda.css
npm install -g sass@latest
sass --no-source-map --style=compressed src:out
```

### Option 2: Download from releases

Visit https://github.com/DmmDGM/soda.css/releases and install the latest version.

## Documentation and Guides

### Adding Alpha Values to Soda.css Colors

It is possible to apply an alpha channel to any pre-defined hex color by using the [relative rgb](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb#relative_value_syntax) syntax:

```css
rgb(from [color] r g b / [alpha])
```

```css
button {
	background-color: rgb(from var(--sd-red) r g b / 0.5);
	border-radius: 5px;
	cursor: pointer;
	padding: 5px 10px;
	transition: background 0.2s ease;
}

button:focus-visible, button:hover {
	background-color: var(--sd-red);
}
```

> [!WARNING]
> Requires the use of relative CSS, which might not be supported on older browsers.
> Check [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb#browser_compatibility) here.

### Applying Different Shades of Soda.css Colors

Soda.css offers a wide variety of colors and shades. All colors begin with the prefix `--sd`:

```css
a {
	color: var(--sd-blue);
}

button {
	background-color: var(--sd-red);
}
```

Use the `-l[number]` and `-d[number]` suffix to make the color lighter or darker:

```css
a {
	color: var(--sd-blue);
	transition: color 0.2s ease;
}

a:focus-visible, a:hover {
	color: var(--sd-blue-d20);
}

button {
	background-color: var(--sd-red);
	cursor: pointer;
	transition: background 0.2s ease;
}

button:focus-visible, button:hover {
	background-color: var(--sd-red-l10);
}
```

> [!NOTE]
> Some colors have different limits to how light or dark they can be.
> For example, `red` has an upper limit of `l15` and a lower limit of `d50`, while `gray` has an upper limit of `l10` and a lower limit of `d15`.
> See [Full List of Soda.css Colors](#full-list-of-sodacss-colors) for more information.

Additionally, all colors have a `light-` and `dark-` aliases, which correspond to the `-l10` and `-d20` options respectively.

```css
/* ... */

a:focus-visible, a:hover {
	/* color: var(--sd-blue-d20); */
	color: var(--sd-dark-blue);
}

/* ... */

button:focus-visible, button:hover {
	/* background-color: var(--sd-red-l10); */
	background-color: var(--sd-light-red);
}
```

### Disabling Soda.css's Default Styling

By default, Soda.css will automatically style the entire document to provide a clean starting template for your project. If this is an unwanted behavior, use the following CSS after the initialization of Soda.css to revert the changes:

```css
* {
	background: initial;
	border: initial;
	color: initial;
	font: initial;
	height: initial;
	margin: initial;
	outline: initial;
	padding: initial;
	scrollbar-color: initial;
	scrollbar-width: initial;
	text-decoration: initial;
	width: initial;
}
```

Alternatively, you can simply delete the relevant styles in your compiled Soda.css.

### Full List of Soda.css Colors

Below is the full list of available Soda.css color:

Color Name | Base Color Hex | CSS Variable | Brightness Range
-|-|-|-
![Color](https://singlecolorimage.com/get/ef4f4f/10x10) Red | #ef4f4f | `--sd-red` | d50 - l15
![Color](https://singlecolorimage.com/get/ef8f4f/10x10) Orange | #ef8f4f | `--sd-orange` | d50 - l15
![Color](https://singlecolorimage.com/get/efef4f/10x10) Yellow | #efef4f | `--sd-yellow` | d50 - l15
![Color](https://singlecolorimage.com/get/4fef4f/10x10) Green | #4fef4f | `--sd-green` | d50 - l15
![Color](https://singlecolorimage.com/get/4fefef/10x10) Cyan | #4fefef | `--sd-cyan` | d50 - l15
![Color](https://singlecolorimage.com/get/4fbfef/10x10) Sky | #4fbfef | `--sd-sky` | d50 - l15
![Color](https://singlecolorimage.com/get/4f4fef/10x10) Blue | #4f4fef | `--sd-blue` | d50 - l15
![Color](https://singlecolorimage.com/get/8f4f8f/10x10) Purple | #8f4f8f | `--sd-purple` | d35 - l15
![Color](https://singlecolorimage.com/get/ef0fbf/10x10) Magenta | #ef0fbf | `--sd-magenta` | d35 - l15
![Color](https://singlecolorimage.com/get/ef8fbf/10x10) Pink | #ef8fbf | `--sd-pink` | d50 - l15
![Color](https://singlecolorimage.com/get/efefef/10x10) White | #efefef | `--sd-white` | d15 - l10
![Color](https://singlecolorimage.com/get/8f8f8f/10x10) Gray | #8f8f8f | `--sd-gray` | d15 - l10
![Color](https://singlecolorimage.com/get/1f1f1f/10x10) Black | #1f1f1f | `--sd-black` | d15 - l10
![Color](https://singlecolorimage.com/get/efbf8f/10x10) Sand | #efbf8f | `--sd-sand` | d50 - l15
![Color](https://singlecolorimage.com/get/efbf4f/10x10) Peach | #efbf4f | `--sd-peach` | d50 - l15
![Color](https://singlecolorimage.com/get/bfef8f/10x10) Mint Green | #bfef8f | `--sd-mint-green` | d50 - l15
![Color](https://singlecolorimage.com/get/0f8f4f/10x10) Forest | #0f8f4f | `--sd-forest` | d25 - l15
![Color](https://singlecolorimage.com/get/8fefef/10x10) Mint Blue | #8fefef | `--sd-mint-blue` | d50 - l15
![Color](https://singlecolorimage.com/get/efbfbf/10x10) Cherry Blossom | #efbfbf | `--sd-cherry-blossom` | d50 - l15

###### Last Updated: July 26th, 2024