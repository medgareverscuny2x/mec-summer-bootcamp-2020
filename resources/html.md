# Diving into HTML

## HTML Syntax

```htmlmixed
<a href='http://twitter.com/'>Twitter</a>
```

- Elements: Components of an HTML document
- Tags: Start and end tags denote an element
- Attributes: Properties of the HTML element defined in the start tag
- Comments: Include comments in your code

## Text Elements

- Paragraph: A block of text. `<p>Lorem ipsum sit amet dolor.</p>`
- Headings: Automatically defined from `<h1>Biggest</h1>` to `<h6>Smallest</h6>`
- A: Defines a hypertext link. `<a href='http://twitter.com/'>Twitter</a>`

## List Elements

Unordered List: Bullet list

```htmlmixed
<ul>
   <li>Beetroot</li>
   <li>Ginger</li>
   <li>Potato</li>
   <li>Radish</li>
</ul>
```

Ordered List: Numbered list

```htmlmixed
<ol>
   <li>Beetroot</li>
   <li>Ginger</li>
   <li>Potato</li>
   <li>Radish</li>
</ol>
```

## Tables

Tables allow you to structure information

| Firstname | Lastname |
| --------- | -------- |
| Jill      | Smith    |
| Eve       | Jackson  |

```htmlmixed
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
  </tr>
</table>
```

## Layout

div: Allows you to group page content as block-line elements.

```htmlmixed
<div id="rock">
    <p>This beats scissors.</p>
</div>
<div id="paper">
    <p>This beats rock.</p>
</div>
<div id="scissors">
    <p>This beats paper.</p>
</div>
```

span: Allows you to group page content as in-line elements.

```htmlmixed
<p>This is a paragraph with some
<span id="selected">text</span>.
</p>
```

## Images

`img` tag inserts image in HTML page.

```htmlmixed
<img src="apple.jpg" alt="An apple" />
```

Note that it is a self-closing tag.

`src` defines the URL
`alt` gives the image a text description for accessibility.

## Forms

The `form` element creates a form

```htmlmixed
<form action="" method="get">
  <label for="name">Enter your name: </label>
  <input type="text" name="name" id="name">

  <label for="email">Enter your email: </label>
  <input type="email" name="email" id="email">

  <input type="submit" value="Subscribe!">
</form>
```

There are different elements you can use inside a form such as `<input>`, `<label>`, and `<select>`.
The `action` and `method` attributes define what happens with information.

## Autocomplete

In VS Code and most code editors, you can type `html` in a new document. A menu will popup, just hit TAB to generate a boilerplate HTML page.

## Resources

- MDN Web Docs: HTML https://developer.mozilla.org/en-US/docs/Web/HTML
- W3Schools https://www.w3schools.com/
- Codepen https://codepen.io/

## Activity

Create a basic HTML page with some information about yourself.
Include:

- Image
- Title
- A list of interests
- A paragraph about yourself

**Bonus**: Look up some other elements and implement them in your page.
