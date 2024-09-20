# bank_api<br/>
## batch_job
Consume data from **raw/dataSource.txt** using Python into MongoDB.
It will truncate the database before consuming new data.<br/>
1. Basic setup, edit config.txt for configurations
```
- MONGODB_URI:        defines the MongoDB URI
- MONGODB_DATABASE:   defines the MongoDB database name
- MONGODB_COLLECTION: defines the MongoDB collection name
- DELIMETER:          defines specific splitter delimeter
```
2. To execute batch job
```
cd batch_job
./consumeExec.sh
```
## backend_api
1. To execute backend API
```
cd backend_api
npm start
```
2. List of REST APIs:
- POST /authenticate
<br/>Required on app initialize, to obtain the authentication token for subsequent API requests.

- GET /api/transactions
<br/>Retrieve list of transactions, based on search criteria.

- GET /api/transactions/{id}
<br/>Retrieve transaction by ID.

- PUT /api/transactions/{id}
```
Body: { "description": "new description" }
```
<br/>Update the transaction by ID.
