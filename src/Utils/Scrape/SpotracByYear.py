from ScrapeFunctions import removeExtras, ranks, simple_get, addalExtras;
from bs4 import BeautifulSoup
import json
import xlsxwriter
import time

# teams = ['Arizona-Cardinals', 'Atlanta-Falcons', 'Baltimore-Ravens', 'Buffalo-Bills', 'Carolina-Panthers', 'Chicago-Bears', 'Cincinnati-Bengals', 'Cleveland-Browns', 'Dallas-Cowboys', 'Denver-Broncos', 'Detroit-Lions', 'Green-Bay-Packers']
teams = ['Houston-Texans', 'Indianapolis-Colts', 'Jacksonville-Jaguars', 'Kansas-City-Chiefs', 'Los-Angeles-Chargers', 'Los-Angeles-Rams', 'Miami-Dolphins', 'Minnesota-Vikings', 'New-England-Patriots', 'New-Orleans-Saints']
# teams = ['New-York-Giants', 'New-York-Jets', 'Oakland-Raiders', 'Philadelphia-Eagles', 'Pittsburgh-Steelers', 'San-Francisco-49ers', 'Seattle-Seahawks', 'Tampa-Bay-Buccaneers', 'Tennessee-Titans', 'Washington-Redskins']

# teams = ['New-York-Giants', 'New-York-Jets']

years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
# years = [2011]

def pullYear(link, year):

	names = []
	cap = []
	pos = []

	html = BeautifulSoup(simple_get(link), 'html.parser')

	for span in html.select('td.player a'):
		names.append(span.text)

	for span in html.select('td.right.result'):
		capHold = span.text.replace("$","")
		capHold = capHold.replace(",","")
		try:
			cap.append(int(capHold))
		except:
			cap.append(0)

	for span in html.select('td.center.small'):
		pos.append(span.text)

	for x in range(len(names)):
		if names[x] not in outputDict.keys():
			outputDict[names[x]] = []
			outputDict[names[x]].append(['POS', pos[x]])
		if outputDict[names[x]][-1][0] == year:
			outputDict[names[x]][-1][1] = outputDict[names[x]][-1][1] + cap[x]
		else:
			outputDict[names[x]].append([year, cap[x]])
		# if outputDict[names[x]][-1][0] != year:
			# outputDict[names[x]].append([year, cap[x]])

	time.sleep(5)


def playerData(team):
	
	for player in outputDict.keys():

		for i in range(len(outputDict[player]) - 1):
			playerYear = []
			playerYear.append(player)
			playerYear.append(outputDict[player][i + 1][0])
			playerYear.append(team)
			playerYear.append(outputDict[player][i + 1][1])
			playersData.append(playerYear)


def pullFullTeam(years, team):

	webURL = 'https://www.spotrac.com/nfl/' + team + '/cap/'

	for year in years:

		worksheet.write(0, years.index(year) + 2, year)

		link = webURL + str(year)
		pullYear(link, year)

	row = 1
	low = min(years)
	for player in outputDict.keys():
		worksheet.write(row, 0, player)
		worksheet.write(row, 1, outputDict[player][0][1])
		for z in range(len(outputDict[player]) - 1):
			i = outputDict[player][z + 1][0] - low
			worksheet.write(row, 2 + i, outputDict[player][z + 1][1])
		row += 1




playersData = []

workbook = xlsxwriter.Workbook('C:/Users/rksny/Desktop/NFLCapGiants.xlsx')

for team in teams:

	outputDict = {}
	worksheet = workbook.add_worksheet(team)
	pullFullTeam(years, team)
	print(outputDict)
	playerData(team)

workbook.close()

workbook2 = xlsxwriter.Workbook('C:/Users/rksny/Desktop/NFLPlayerData2.xlsx')
worksheet2 = workbook2.add_worksheet("playerData")

for x in range(len(playersData)):
	worksheet2.write(x, 0, playersData[x][0])
	worksheet2.write(x, 1, playersData[x][1])
	worksheet2.write(x, 2, playersData[x][2])
	worksheet2.write(x, 3, playersData[x][3])

workbook2.close()
print("done!")