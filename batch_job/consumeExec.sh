#! /bin/bash
echo 'Setting up environment...'
py -m pip install pymongo
echo $'\n------------------------------\n'

echo $'Consuming data...\n'
py consumeData.py
echo $'\n------------------------------\n'

echo 'Done data consumption!'