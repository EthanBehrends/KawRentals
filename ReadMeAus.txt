You'll be working with "properties.json".

Make sure you're working out of the "properties" branch of the GitHub. Don't forget to push your changes when you're done.

Inside, you'll find something that looks like this:

            [
              {
                "id": 0,
                "address": "946 Illinois St # 1, Lawrence, KS 66044",
                "rent": 2600,
                "desc": "Each bedroom has a bathroom. Cool space on 2nd floor. Balcony. See video at kawrentals.com Look under 4 bedroom units, 946B Illinois Call/text for tour. One year lease, tenants pay all utilities. Landlord mows grass and removes snow from city side walk only.",
                "beds": 4,
                "baths": 4,
                "image": "/assets/property1/jimsloughrentals027.jpg",
                "available": true,
                "dateAvailable": "08/21"
              }
              ,
              {
                "id":  1,
                "address": "fdfasdgousda"
                ..............
                .............
            ]

This is a JSON object containing the information of several properties. You shouldn't have to understand the syntax
entirely in order to make the changes, but that would help. Basically, just follow the pattern I have laid out already.
Currently, "properties.json" has three different properties contained in it. If you find where the brackets divide each
of the properties, you'll notice that each property is separated by a comma.

When you add a property, you can just add a comma after the last bracket of the previous property, and then copy and
paste a new template. Obviously, you'll be changing the values. Try to understand the syntax of what's going on before
you change too much. Essentially, each key value (id, address, rent, desc, beds, etc.) is surrounded by double quotes,
followed by a colon. After that comes the value that you'll change. Numbers and boolean values (true or false, not capitalized)
don't need double quotes around them, but anything else does. After the value comes another comma before the line break.
You don't need a comma after the last value in a set of brackets.

None of the information I have in the file is correct as of now, so you'll be starting fresh.

Order doesn't matter.

Most of the keys and values should be self-explanatory, but I'll explain the ones that might not be.

"id" is not very important, it can be whatever, as long as it's unique. The easiest way to do this is to just number off
like 1, 2, 3, etc.

"available" should just be either true or false (not capitalized) depending on whether or not it's presently available.

"dateAvailable" should always be set to something, even if it's currently available. If it's currently available, you can just
write "now" or something.

When you're adding an image of the house, you upload the
image to the "assets" folder and just makes sure it follows the same format I have laid out when writing the value
for the "image" key.
