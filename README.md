# Read by Color
Some kids have a hard time reading, but are excellent with colors and patterns. 
This is a way to make every word a distinct color, to see if that helps them 
read.

## Try it
You can try it out here:  
<http://forevermatt-web.s3-website-us-east-1.amazonaws.com/read/>

## What it Does
This is a purely client-side (aka. HTML, CSS, and JavaScript/jQuery) way to let 
the user provide you with text and automatically color every word. 

Currently, it...

- Gives every word a specific color (based on an MD5 hash of the word, slightly
  darkened to avoid colors too light to show up on a white background/page),
- Leaves punctuation black,
- Bolds the first letter of each word, and
- Hides everything but the colored text when printing.

## How to Use it
Simply serve these files from any webserver. If testing this on your local 
computer and you have PHP installed, you can simply open a command prompt in 
the `src` folder of this project and run the following:  

    php -S localhost:80

Then open a webbrowser (such as Firefox) and go to this URL:  

    http://localhost/

You can copy-and-paste in whatever text you want, click Go, then print the 
resulting page.
