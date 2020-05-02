from ScrapeFunctions import removeExtras, ranks, simple_get, addalExtras;
from bs4 import BeautifulSoup
import json


weblink = 'https://www.spotrac.com/nfl/green-bay-packers/aaron-rodgers'
x = ''


def scrapeContract(link):
	done = False
	dataArray = []
	year = []
	salary = []
	hold = []

	webURL = link
	html = BeautifulSoup(simple_get(webURL), 'html.parser')

	for span in html.select('td.salaryYear.center'):
		if (span.text[0:2] == '20') and (len(span.text) > 2):
			year.append(span.text)
			try:
				if (year[-1] < year[-2]) and (done == False):
					del year[-2]
					done = True
			except:
				pass

	for span in html.select('td.salaryAmt.result'):
		salary.append(span.text.replace("$",""))

	x = 0
	while True:
		try:
			if year[x] in dataArray[0]:
				break
		except:
			pass
		if x == len(year) - 1:
			break
		hold.append(year[x])
		hold.append(salary[x])
		dataArray.append(hold)
		hold = []
		x+=1

	low = min(year)
	dataArray.sort()
	return(dataArray, low)
		