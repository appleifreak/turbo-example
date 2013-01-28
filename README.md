This is bare bones example of how to set up [Turbo](https://github.com/appleifreak/Turbo).

Take a look at [example.config.json](https://github.com/appleifreak/turbo-example/blob/master/example.config.json) for an example configuration file. Make changes to it (specifically the Mongo and Redis connection data) and change it's name to `config.json`.

To boot, run `npm install` and then `node app.js`. It should boot it successfully.

At this point, anything you try to type into you browser will probably return a 404 because you don't have any content set up. Create a collection in your mongo database named `routes` and add a document with following format:

	{
		type: "page",
		handle: "/my-page",
		data: {
			title: "My New Page",
			content: "<p>This is some page content.</p>"
		}
	}
	
`type` and `handle` should both be strings. They are both used by the Router to determine where to send a request. The `data` object can actually be anything. It is attached to the route so something else down the line can use it.

Try `localhost:3000/my-page` in your browser to view the route. Turbo should now be running like a website.

If you have any questions, concerns, thoughts, dilemmas or really anything, please contact me: <tyler@vintyge.com>.

## MIT License

Copyright (c) 2013 [Vintyge, Inc.](http://vintyge.com) All Right Reserved. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.