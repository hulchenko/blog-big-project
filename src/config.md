1. src folder is for the initial code.
2. node/webpack/babel setup
3. web server wouldn't run with default settings, used following:
   #1 "start": "webpack serve --mode development --open"
   #2 devServer: {hot: true,},
4. chrome would give 2 errors:
   #1 'Resource interpreted as Stylesheet but transferred with MIME type text/html'. Fixed by indicating local path to CSS file
   #2 'DevTools failed to load SourceMap'. Seems like a bug - hid with Console/Selected context only
5. Header component creation
6. Header removal logic
7. Navigation component creation
8. Navigation tabs switch logic
9. Form component creation
