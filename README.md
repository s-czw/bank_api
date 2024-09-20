# bank_api
<br/>
# batch_job
Consume data from raw/dataSource.txt using Python into MongoDB.
It will truncate the database before consuming new data.
<br/>
0. Basic setup, edit config.txt for configurations
```
MONGODB_URI: defines the MongoDB URI
MONGODB_DATABASE: defines the MongoDB database name
MONGODB_COLLECTION: defines the MongoDB collection name
DELIMETER: defines specific splitter delimeter
```
1. To execute batch job
```
cd batch_job
./consumeExec.sh
```
<br/>
# backend_api
To Start Backend API
```
cd backend_api
npm start
```
<br/>
List of REST APIs:
1. POST /authenticate
<br/>Required on app initialize, to obtain the authentication token for subsequent API requests.

2. GET /api/transactions
<br/>Retrieve list of transactions, based on search criteria.

3. GET /api/transactions/{id}
<br/>Retrieve transaction by ID.

4. PUT /api/transactions/{id}
```
Body: { "description": "new description" }
```
<br/>Update the transaction by ID.
