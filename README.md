# PiFrame
Little weather station using the [DarkSky API](https://developer.forecast.io/) 
and [Django](https://www.djangoproject.com/), with the remarkable ability to 
suggest what clothes you should wear for the day.

Whether or not the suggestion is accurate is another story.

The screen size has been developed specifically with the [Raspberry Pi 7" touchscreen](https://shop.pimoroni.com/products/raspberry-pi-7-touchscreen-display-with-frame)
in mind, but can potentially be modified to fit any sized screen.

# Setup
- First, [install Django](https://docs.djangoproject.com/en/1.9/topics/install/#installing-official-release)
- Register for a free developer account at https://developer.forecast.io/.  The API offers 1000 requests a day for free, 
which should be plenty for personal projects like this.
- Open piframe/piframe/settings.py
- Uncomment DARKSKY_API_KEY and paste in your API key
- Change the DARKSKY_LONGITUDE and DARKSKY_LATITUDE to the desired location
- Change DARKSKY_UNITS to 'us', 'ca' or 'uk2'.  See [Darksky docs](https://developer.forecast.io/docs/v2) for more details

# Run the server
- Go to the root of the project and type `python manage.py runserver`
- By default this will run on 127.0.0.1:8000.  You can also run: `python manage.py runserver 192.168.1.x:xxxx`
- This is fine for dev purposes, but for anything more, read into [Django's docs on Apache and mod_wsgi](https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/modwsgi/) 

