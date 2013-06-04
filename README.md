# Parallaxify

> Easily add a subtle parallax effect to targeted elements (from here refered to as panels).

The **parallaxify.js** file contains two tiny jQuery plugins, **parallaxify()** as described above, and **fitVertically()** to help... fit elements vertically.

View a simple demo [here](http://www.beaucharman.me/parallaxify/)

## Usage

### HTML

Firstly, add the markup for your panels. This can be absolutely anything, but here is the example HTML we will use:

```html
  <section class="one panel" data-parallaxify data-speed="8">
    <article>This is the first section&hellip; scrolling like a boss.</article>
  </section>

  <section class="two panel" data-parallaxify data-speed="30">
    <article>I am the second, I am scrolling slightly slower.</article>
  </section>

  <section class="three panel">
    <article>Third section here. No parallax for me today, thanks.</article>
  </section>
```

### CSS

Next, add the following styles to the panels (regardless of having the parallax effect or not):

```css
.panel {
  background-position : 0 0;
  background-repeat : no-repeat;
  -webkit-background-size : cover;
     -moz-background-size : cover;
       -o-background-size : cover;
          background-size : cover;
}
```

Then, each parallax panel will have it's own `background-image` and a `background-attachment` of `fixed`.

```css
background-image: url(../images/hero-image.jpg);
background-attachment : fixed;
```

Any panel that is not to be parallaxified can have a `background-attachment` of either `fixed` or `scroll`.

Furthermore, depending on the nature and vertical flow, it may not hurt to add some min-height declarations as well.

### JavaScript

You can create sections that all fit vertically, then apply the parallax effect to the ones that are to be parallaxified.

```javascript
;(function($) {

  $('section.panel').fitVertically();

  $('[data-parallax]').parallaxify();

}(jQuery));
```

or...

Chain like a boss to attack everything.

```javascript
;(function($) {

  $('[data-parallax]').fitVertically().parallax();

}(jQuery));
```

#### Requirements

- jQuery x.x.x
- Subtlety

#### Questions

https://github.com/beaucharman/parallaxify/issues
