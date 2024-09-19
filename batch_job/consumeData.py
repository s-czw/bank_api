import configparser
import pymongo

# Initialize config
config = configparser.RawConfigParser()
config.read(r'config.txt')

# MongoDB connection setup
def connect_mongodb(uri, db_name, collection_name):
  client = pymongo.MongoClient(uri)
  db = client[db_name]
  return db[collection_name]

def parse_file_and_insert(file_path, collection):
  total_records = 0
  delimeter = config.get('global', 'DELIMETER')
  with open(file_path, 'r') as f:
    batch = []
    # Read header line
    headers = f.readline().strip().split(delimeter)
    for line in f:
      # Read data and split into columns
      columns = line.strip().split(delimeter)
      if len(columns) == 6:
        record = {
          headers[0]: columns[0],
          headers[1]: columns[1],
          headers[2]: columns[2],
          headers[3]: columns[3],
          headers[4]: columns[4],
          headers[5]: columns[5]
        }
        batch.append(record)

        # Insert by batch for every 1000 records
        if len(batch) >= 1000:
          total_records += 1000
          collection.insert_many(batch)
          batch.clear()
    # Insert remaining records
    if (batch):
      collection.insert_many(batch)
      total_records += len(batch)

  print(f'Inserted {total_records} records into MongoDB.')

def main():
  # File path to the text file
  file_path = 'raw/dataSource.txt'

  # MongoDB details
  uri = config.get('global', 'MONGODB_URI')
  db_name = config.get('global', 'MONGODB_DATABASE')
  collection_name = config.get('global', 'MONGODB_COLLECTION')

  # Connect to MongoDB
  collection = connect_mongodb(uri, db_name, collection_name)

  # Clear collection before insert (comment out if not required)
  collection.delete_many({})

  # Parse the file
  parse_file_and_insert(file_path, collection)

if __name__ == "__main__":
  main()