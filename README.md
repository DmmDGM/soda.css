# Soda.css

Soda.css - "Go fizz"

## About

Soda.css is a small CSS project that offers clean default styling templates and a simple color palette.

If your project requires more complicated features, such as dynamic interactions or component stylings, perhaps you can try out other libraries, for example, [Bootstrap](https://getbootstrap.com/) or [Tailwind CSS](https://tailwindcss.com/).

Let me know if you have any questions or requests on Discord: @therock2t.

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

## Guide

### Applying different shades of colors

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

Additionally, all colors have a `light-` and `dark-` aliases, which corresponds to the `-l10` and `-d20` options respectively.

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

### Applying an alpha channel to soda.css colors

> [!WARNING]
> Requires the use of relative CSS, which might not be supported on older browsers.
> Check [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb#browser_compatibility) here.

It is possible to apply an alpha channel to any pre-defined hex color using the [relative rgb](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb#relative_value_syntax) syntax:

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

### Applying soda.css templates

Use the `--sd` attribute on your `html` tag like so:

```html
<!DOCTYPE html>
<html lang="en" --sd>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<link rel="stylesheet" href="soda.css">
	</head>
	<body>
		Hello world!
	</body>
</html>
```

###### Last Updated: July 20th, 2024