# Soda.css

Soda.css - I don't have a catchy slogan!

## About

Soda.css is a small CSS project that offers clean default styling templates and a simple color palette.

If your project requires more complicated features, such as dynamic interactions or component stylings, perhaps you can try out other libraries, such as [Bootstrap](https://getbootstrap.com/) or [Tailwind CSS](https://tailwindcss.com/).

Let me know if you have any questions or requests on Discord: @therock2t.

## Download

Option 1: Compile from source.

```shell
git clone https://github.com/DmmDGM/soda.css
cd soda.css
npm install -g sass@latest
sass --no-source-map --style=compressed src:out
```

Option 2: Download from releases.

## Usage

### Enabling soda.css templates

Use the `--sd-light` or `--sd-dark` attribute on your `html` tag like so:

```html
<!DOCTYPE html>
<html lang="en" --sd-light>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<link rel="stylesheet" href="out/soda.css">
	</head>
	<body>
		Hello world!
	</body>
</html>
```

### Adding an alpha channel to soda.css colors

> [!WARNING]
> Requires the use of relative CSS, which might not be supported on older browsers.
> Check [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb#browser_compatibility) here!

Using the [relative rgb syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb#relative_value_syntax), it is possible to add an alpha channel to a hex color like so:

```css
rgb(from [color] r g b / [alpha])
```

Example:

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

###### Last Updated: July 19th, 2024