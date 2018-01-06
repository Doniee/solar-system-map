# The Solar system cycle trail map

A project I made in 2014 for an infographics class while studying in Canada.

## About the map

I had heard about the solar system scale model located in Helsinki and Espoo by chance and visited one of the planets. I thought it would be nice to see all of them, maybe by bike. I couldn't find a ready-made route for that, so I decided to create one. Since I was not in Finland at that moment, I had to rely on a Google map that Ursa had created of the planet locations and a bicycle path map provided by the city of Helsinki. I also used random photos of the planet models that I found online.

Next year I went to check out the planets and the route I had planned. I noticed that the route could be a bit simpler and the planet locations were not 100% accurate. Some day I could update the map and replace the photos with ones I took myself. 

All in all making the map and using it in the real environment was a fun experience, and I hope more people would know about the planets and go see them!

## About the technology

The map is made with [Leaflet](http://leafletjs.com/) and [Mapbox](https://www.mapbox.com/). I've also used HTML5 boilerplate, normalize.css, Lightbox, jQuery and FontAwesome.

## Improvements

I haven't changed the site or updated the code since 2014 (except fixed Fontawesome, which had stopped working), so as a fun exercise I decided to see what I would now do differently.

And here's the list:

+ Cleaning the `index.html`. There are some js files that came with the boilerplate but are not being used.
+ Adding alt tags to all images to improve accessibility.
+ Using a more consistent naming convention for classes and ids.
+ Showing the Leaflet marker popups on top of the map controls and the site title to improve usability.
+ Using SCSS instead of CSS.
+ Organising the files a bit better (for example separating libraries and my own files).
+ Changing indentation to 2 spaces and being a bit more consistent with the formatting.
+ Not using ids as CSS selectors.
+ Including the Mapbox CSS in the `index.html` before `main.css` so I could override the styles easier by specificity instead of using `important` (which I seem to have used a lot).
+ Creating an object and loop that to add the circles (orbits) on the map in `main.js`).
+ Using JSON and a loop for the marker content in `main.js`).
+ Maybe adding some comments here and there, though it wasn't very difficult to read the code even after 3+ years.
+ There's an `onMapClick` function at the end of `main.js`, which I used for creating the path on the map. I traced the path by clicking points on the map and the function would print coordinates in the console. Maybe that could be somehow automated a bit more, I just remember that it took forever to create the path.