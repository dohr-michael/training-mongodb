# training-mongodb
Training mongodb

## Requirements
- mongodb 3.6+
- mongodb command line client (e.g. `mongo cli` or [robo3t / sudio3t](https://robomongo.org/))

## Initialization
- `mongoimport --drop -d training_mongo -c movies --jsonArray data/movies.json`
- `mongoimport --drop -d training_mongo -c actors --jsonArray data/actors.json`
