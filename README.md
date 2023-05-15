# thienan-api

Serves facts about thienan. Routes that change the list of facts (post, patch, delete) only work if
you have the client id and client secret. So basically only I can do that. But you can view the facts.

## Base Url = https://thienan-api.onrender.com/facts

## Get all facts = https://thienan-api.onrender.com/facts/getAll
response is an array of {_id: *id*, content: *fact*, __v: 0}

## Get fact by id = https://thienan-api.onrender.com/facts/getOneById
response is {_id: *id*, content: *fact*, __v: 0}

## Get fact at random = https://thienan-api.onrender.com/facts/getOneRandom
response is {_id: *id*, content: *fact*, __v: 0}

## Credits
Follow this guide to build a REST API
https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

Follow this guide for deploy on Render
https://github.com/MediaComem/comem-archioweb/blob/main/guides/deploy-in-the-cloud.md