# training-mongodb
Training mongodb

## Requirements
- mongodb 3.6+
- mongodb command line client (e.g. `mongo cli` or [robo3t / sudio3t](https://robomongo.org/))

## Initialization
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
