# Parallaxify

Easily add a subtle parallax effect to targeted areas (from here refered to as panels) of a web page.

Firstly, add the following styles to the panels (regardless of having the parallax effect or not)

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

Then, each parallax panel will have it's own background-image and a background-attachment of fixed.

```css
  background-image: url(../images/hero-image.jpg);
  background-attachment : fixed;
```

Any panel that is not to be parallaxified can have a background-attachment of either `fixed` or `scroll`.
