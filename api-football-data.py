import requests
import json

token = "0f334978ef204d8c96f1ee6037e96ffa"
leagues = ["PL", "BL1", "SA", "PD", "FL1"]

for league in leagues:
	uri = 'https://api.football-data.org/v4/competitions/{}/standings'.format(league)
	headers = { 'X-Auth-Token': token }
	response = requests.get(uri, headers=headers)
	with open('./standings/{}.json'.format(league), 'w') as f:
		json.dump(response.json(), f)
