This is my first attempt to use Node with the Closure Library and Compiler.

There are several other projects that are mainly focused on importing
code from the Closure Library into Node, such as:

https://github.com/gatapia/nclosure
https://github.com/hsch/node-goog
https://github.com/lm1/node-closure

These projects seem to focus on writing JavaScript in the style of Node,
using require(), modules.exports, etc.

Here, I am trying to take a different approach, in which JavaScript is
written in the style of the Closure Library, and the Node APIs are exposed
as externs so that the application code can be compiled using the
Advanced mode of the Closure Compiler, in order to maximize the amount of
static checking and dead code elimination that can be done.

As you can see in the externs/node/v0.4.8/ folder, the externs files are
created by hand, and take a considerable amount of work, as the Node
documentation is unreliable (http://nodejs.org/docs/v0.4.8/api/), so creating
accurate externs files requires reading the Node source code.

Unfortunately, I am currently distracted because https.get() in
js/dab/glat/rpc.js is not working as expected: the 'end' event never fires,
but a 'close' event does when trying to access the Google Latitude API.

I have no idea whether Node or Google is to blame.
