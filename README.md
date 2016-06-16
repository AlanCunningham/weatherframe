# PiFrame
Little weather station using the [DarkSky API](https://developer.forecast.io/) 
and [Django](https://www.djangoproject.com/), with the remarkable ability to 
suggest what clothes you should wear for the day.

Whether or not the suggestion is accurate is another story.

Goes rather well with one of these:
https://shop.pimoroni.com/products/raspberry-pi-7-touchscreen-display-with-frame)

# Setup
- First, [install Django](https://docs.djangoproject.com/en/1.9/topics/install/#installing-official-release)
- Register for a free developer account at https://developer.forecast.io/.  The API offers 1000 requests a day for free, 
which is plenty for personal projects like this.
- Copy the API key to piframe/home/weather.py and overwrite `api_key` 
(This will be stored elsewhere in the future...I shouldn't have even commited mine!)
- In the same file, in the `location` dictionary, set your location coordinates 
(again, this will be done elsewhere in the future)

# Run the server
- Go to the root of the project and type `python manage.py runserver`
- By default this will run on 127.0.0.1:8000.  You can also run: `python manage.py runserver 192.168.1.x:xxxx`
- The server is really only for dev purposes - we really should run the server 
with [Apache and mod_wsgi](https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/modwsgi/), 
but I haven't got round to trying this yet.

# The website
- At the moment, the website refreshes data in a rather hacky way - we literally 
just refresh the webpage once an hour.  Not great, I know, but I haven't worked out
how to request new data from Django yet without refreshing the page.
