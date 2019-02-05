var theAvengers = {
  "_id": "d390f5b7-461f-4ad7-bf8b-963a6c1d2164",
  "name": "The Avengers",
  "rating": 8.1,
  "votes": NumberLong(1105274),
  "releaseYear": "2012",
  "suspended": false,
  "genres": ["Action", "Aventure", "Sci-Fi"],
  "country": "USA",
  "roles": []
}

var actors = [
  {
    "_id": "dc314504-fba5-43ad-9591-c958c1803ac4",
    "name": "Chris",
    "lastName": "Hemsworth",
    "actIn": ["d390f5b7-461f-4ad7-bf8b-963a6c1d2164"]
  },
  {
    "_id": "5d4ca2e2-d0fd-4d3e-b326-a75f11cb5a7f",
    "name": "Robert",
    "lastName": "Downey Jr.",
    "actIn": ["d390f5b7-461f-4ad7-bf8b-963a6c1d2164"]
  },
  {
    "_id": "863d6d04-f969-4fe1-a591-880aed470e56",
    "name": "Chris",
    "lastName": "Evans",
    "actIn": ["d390f5b7-461f-4ad7-bf8b-963a6c1d2164"]
  },
  {
    "_id": "dfd840c4-0eb0-4c33-8238-20797b632ade",
    "name": "Mark",
    "lastName": "Ruffalo",
    "actIn": ["d390f5b7-461f-4ad7-bf8b-963a6c1d2164"]
  },
  {
    "_id": "a5faac41-8ec0-4369-9354-6fbd371a9912",
    "name": "Scarlett",
    "lastName": "Johansson",
    "actIn": ["d390f5b7-461f-4ad7-bf8b-963a6c1d2164"]
  }
]


var roles = [
  {
    "actor" : {
        "_id" : "863d6d04-f969-4fe1-a591-880aed470e56",
        "name" : "Chris",
        "lastName" : "Evans"
    },
    "role" : "Steve Rogers / Captain America"
  }, 
  {
    "actor" : {
        "_id" : "dfd840c4-0eb0-4c33-8238-20797b632ade",
        "name" : "Mark",
        "lastName" : "Ruffalo"
    },
    "role" : "Bruce Banner / The Hulk"
  }, 
  {
    "actor" : {
        "_id" : "5d4ca2e2-d0fd-4d3e-b326-a75f11cb5a7f",
        "name" : "Robert",
        "lastName" : "Downey Jr."
    },
    "role" : "Tany Stork / Iran Moon"
  }, 
  {
    "actor" : {
        "_id" : "a5faac41-8ec0-4369-9354-6fbd371a9912",
        "name" : "Scarlett",
        "lastName" : "Johansson"
    },
    "role" : "Natasha Romanoff / Black Widow"
  }, 
  {
    "actor" : {
        "_id" : "dc314504-fba5-43ad-9591-c958c1803ac4",
        "name" : "Chris",
        "lastName" : "Hemsworth"
    },
    "role" : "Thor"
  }
]


