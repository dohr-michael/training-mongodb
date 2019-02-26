## Calculer la moyenne du rating pour les films ayant reçus des votes et ayant un rating supérieure à 0
```
db.movies.aggregate([
    {$match: {votes: {$gt: 0}, rating: {$gt: 0}}},
    {$group: {_id: "", avg: {$avg: "$rating"}}}
])
```

## Trouver l'acteur qui a joué dans le plus de films
```
db.actors.aggregate([
    {$project: {name: 1, lastName: 1, count: {$size: "$actIn"}}},
    {$sort: {count: -1}},
    {$limit: 1}
])
```

## Pour cet acteur, déterminé les genres de films dans lesquels il a joué (avec le nombre de ces films)
```
db.movies.aggregate([
    {$match: {"roles": {$elemMatch: {"actor.name": "Alex", "actor.lastName": "Sanders"}}}},
    {$unwind: "$genres"},
    {$group: {_id: "$genres", count: {$sum: 1}}},
    {$sort: {count: -1}}
])
```

## Faite la liste du top 10 des pays producteurs de films avec le nombre de films produits.
``` 
db.movies.aggregate([
    {$group: {_id: "$country", count: {$sum: 1}}},
    {$sort: {count: -1}}
])
```

## Trouver par pays le nombre de production par catégorie.
```
db.movies.aggregate([
    {$unwind: "$genres"},
    {$group: {_id: {country: "$country", genre: "$genres"}, count: {$sum: 1}}},
    {$sort: {"_.id.country": 1, count: -1}},
    {$group: {_id: "$_id.country", genres: {$push: {genre: "$_id.genre", count: "$count"}}, count: {$sum: "$count"}}},
    {$sort: {count: -1}}
])
```
