import json
import urllib.parse

file = open("test.json", "r")
data = json.load(file)

for item in data:
    print(urllib.parse.quote(item["href"]))
    item["href"] = urllib.parse.quote(item["href"])


with open("test.json", "w") as file:
    json.dump(data, file)
