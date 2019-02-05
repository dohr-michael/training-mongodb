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
- robo3t / studio3t

## Data Model
![Data Model](/assets/training-model.png)
