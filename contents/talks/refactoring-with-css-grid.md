----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

title: ''
talk:
  published: true
  id: refactoring-with-css-grid
  title: Refactoring with CSS Grid

----

Is CSS grid ready for production? Find out from somebody who's used grid on a
large site - all while supporting Internet Explorer. I'll discuss what I've
already refactored with grid and what I plan to refactor once forthcoming
features  (display:contents and subgrid) are more widely implemented by
browsers. I'll show how I handled Internet Explorer and older browsers using
@supports and simple fallback layouts. After working on a site that used
javascript and backend logic together with floats to implement layouts, I'll
explain how I managed to refactor to use a pure CSS only approach thanks to
grid. Working with grid also offers the perfect opportunity to start using CSS
custom properties - because all browsers that support CSS grid also support
custom properties.