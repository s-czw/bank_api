# bank_api<br/>
## batch_job
Consume data from **raw/dataSource.txt** using Python into MongoDB.<br/>
_It will truncate the database before consuming new data._<br/>
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
- **POST** _/authenticate_
<br/>Required on app initialize, to obtain the authentication token for subsequent API requests.
<br/>_(Token expires in 1 hour)_

- **GET** _/api/transactions_
<br/>Retrieve list of transactions, based on search criteria.

- **GET** _/api/transactions/{id}_
<br/>Retrieve transaction by ID.

- **PUT** _/api/transactions/{id}_
```
Body: { "description": "new description" }
```
<br/>Update the transaction by ID.
