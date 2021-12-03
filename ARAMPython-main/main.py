import pandas as pd
import numpy as np
import requests
import csv

with open('champion_list.csv','r') as f:
  reader = csv.reader(f)
  data = [x[0] for x in reader]

# Champion Loading Screen Assets | http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
# Champion Square Assets         | Aatrox.png

splashUrl    = [ [x,"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + x + "_0.jpg"] for x in data if x != data[0] ]
portraitUrl  = [ [x,'http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/' + x + '.png'] for x in data  if x != data[0]]

for row in portraitUrl:
  char = row[0]
  url = row[1]
  myfile = requests.get(url)
  open('./portrait/' + char+'_portrait.png', 'wb').write(myfile.content)

for row in splashUrl:
  char = row[0]
  url = row[1]
  myfile = requests.get(url)
  open('./splash/' + char+'_splash_0.jpg', 'wb').write(myfile.content)

