# CSS

Cascading Style Sheets

## CSS Basics

Insert external stylesheet in your HTML <head>:

`<link rel="stylesheet" href="/style.css">`

Insert inline CSS with a style attribute:

`<h1 style="color:blue;">This is a Blue Heading</h1>`

## CSS Syntax

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

- CSS consists of a selector that has a collection of one or more declaration.
- Each declaration has a property and a value.
- In the example, we are applying text color, background color, and a border to `h1` elements.

## Color

CSS represents colors in many ways:

- HEX values
- RGB values
- specially named colors

## Styling

- **color**: Refers to the color of text
- **background**: Refers to the background of an element
- **font**: Style the font of an element., Fine tune: `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`, `line-height`, and `font-family`.

## CSS Box Model

![Box model example](boxmodel.png)

- `border`: Contains the element content
- `margin`: Spacing outside border
- `padding`: Spacing inside border

## Visuals

- `display`: `block`, `inline`, `none`
- `width`: set the width of the element: explicit or auto
- `height`: set the height of the element: explicit or

## Selectors

You can select specific elements or select class or id of elements
`class`: There can be multiple elements of a given class
`id`: Can only be assigned to one element
Use classes and ids on `div` and `span` elements to duplicate styles across multiple elements

## Chrome DevTools

Chrome has a built-in tool to make developing a site easier.

Examples:

- Temporarily edit CSS on the fly to preview changes
- See all the CSS affecting a particular element
- View how page view changes based on device

## Resources

- W3Schools CSS: https://www.w3schools.com/css/
- Coolors: https://coolors.co/
