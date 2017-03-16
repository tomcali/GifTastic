# GifTastic

This homewook involves working with an API to provide video-shorts of interest to the user. Lots of buttons, user interaction, and the accompanying event handling to get working together. This is the challenge. While the submitted project does not fully reproduce the movie example provided, it demonstrates use of the fundamental technologies with jQuery and AJAX.

There remains work to do in terms of building the button set and displaying more of the gifs. But the structure is mostly in place. 

## Overview
Utilities for sets are in the utilities directory under the javascript directory.

I continue to work with Bootstrap 4, which is currently in alpha release. Bootstrap itself requires jQuery. Relevant files are found in the bootstrap and js directories.

## Viewing the Websites

Deployed to gh-pages.

## Technologies Used

- HTML
- CSS (style.css after Bootstrap 4 css and Yeti Bootswatch)
- JavaScript (via Bootstrap 4) 
- Set data structures implemented via JavaScript objects
- Git/GitHub
- Bootstrap and Bootstrap components for responsive design
- jQuery for event handling and AJAX calls
- Public-domain API access to video-shorts

## Coding Steps

- We start with GitHub, setting up the GifTastic repostory. We set up directories and subdirectories according to the assignment definitions. And we added bootstap as a directory, using much the same structure as in previous assignments. The javascript directory includes my JavaScript code. The images directory can contain images, but these are not essential for the game logic itself. A separate js directory was set up for the jQuery code. A separate bootstrap directory accommodates the bootstrap css and js files, as well as the Yeti css theme. (Because I like to be able to continue working when I have no connection to the Internet, I include copies of files in the repositories. Both human-readable and minified versions of JQuery were included because I am learning jQuery, and would like to inspect code for functions/methods on occasion.) 
- Set up the structure a la bootstrap.
- Set up method for adding buttons.
- Added AJAX calls to giphy API
- Worked on the user interaction components for adding buttons. The JavaScript program att-again.js is the one that is running currently. Another program app-yet-again was an attempt to take care of the button additions, but it is incomplete and not operating correctly. So the index.html lists app-again.js as the main program.


