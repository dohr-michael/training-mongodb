# training-mongodb
Training mongodb

## Requirements
- mongodb 3.6+
- mongodb command line client (e.g. `mongo cli` or [robo3t / sudio3t](https://robomongo.org/))

## Data import (via [`mongoimport`](https://docs.mongodb.com/manual/reference/program/mongoimport/))
- `mongoimport --drop -d training_mongo -c movies --jsonArray data/movies.json`
  ```shell
  2019-02-05T07:42:31.115+0100	connected to: localhost
  2019-02-05T07:42:31.116+0100	dropping: training_mongo.movies
  2019-02-05T07:42:32.089+0100	imported 10745 documents
  ```
  
- `mongoimport --drop -d training_mongo -c actors --jsonArray data/actors.json`
  ```shell
  2019-02-05T07:43:20.575+0100	connected to: localhost
  2019-02-05T07:43:20.575+0100	dropping: training_mongo.actors
  2019-02-05T07:43:21.599+0100	imported 72364 documents
  ```
## Connect to database
- Connection string : `mongodb://localhost:27017/training_mongo`
- Mongo Shell : `mongo "mongodb://localhost:27017/training_mongo"`
  ```
  MongoDB shell version vX.X.X
  connecting to: mongodb://localhost:27017/training_mongo
  MongoDB server version: X.X.X
  ```
- [studio3t](https://github.com/dohr-michael/training-mongodb/blob/master/docs/studio3t.md)
- [robo3t](https://github.com/dohr-michael/training-mongodb/blob/master/docs/robo3t.md)

## Data Model
![Data Model](/assets/training-model.png)

## Exercices
### Recherche
1. Rechercher le film `Batman Forever`
2. Rechercher le nombre de films qui ont une note supérieure à 6
3. Rechercher les films et émissions de TV `batman` (tips : utilisez une regex)
4. Rechercher le nombre de films annulés.
5. Rechercher les films dans lesquels `George Clooney` a joué
6. Rechercher le top 10 des films les mieux notés
7. Rechercher le top 10 des films les moins bien notés (ne pas prendre en compte les films sans votes)
8. Rechercher les acteurs prénommé `Kevin`
9. Rechercher le nombre d’acteur ayant joué dans 5 ou 6 films
10. Rechercher le nombre d’acteur ayant joué dans 5 films et se prénommant `George`

### Creation et Mise à jour
1. Insérer le film `The Avengers`
2. Insérer ou mettez à jours les acteurs jouant dans `The Avengers` (tips : utilisé l’option upsert, les ids des acteurs sont a utiliser uniquement lors d’une insertion.)
3. Mettre à jour le film `The Avenger` pour ajouter les rôles.
4. Une erreur est survenue sur le rôle de `Robert Downey Jr.`, effectué une mise à jour pour corriger l’erreur de typo : { role: "Tony Stark / Iron Man" }


### Suppression

