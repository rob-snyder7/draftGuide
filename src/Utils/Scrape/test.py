from ScrapeFunctions import removeExtras, ranks, simple_get, addalExtras;
from bs4 import BeautifulSoup
import json

dataArray = []
year = []
salary = []

webURL = 'https://www.spotrac.com/nfl/'
html = BeautifulSoup(simple_get(webURL), 'html.parser')
hold = []
loc = 0
done = False
repeat = False
x = 0


for span in html.select('a.team-name'):
	hold.append(span.text.replace(" ", "-"))

print(hold)
# 	if x < 50:
# 		hold.append(span.text.replace(" ", "-"))
# 		x+=1

# print(hold)
# print(len(hold))

# for span in html.select('td.salaryYear.center'):
# 	if span.text[0:2] == '20':
# 		year.append(span.text)
# 		try:
# 			if (year[-1] < year[-2]) and (done == False):
# 				# print(year[-1])
# 				del year[-2]
# 				done = True
# 		except:
# 			pass

# for span in html.select('td.salaryAmt.result'):
# 	salary.append(span.text)

# x = 0
# while True:
# 	try:
# 		if year[x] in dataArray[0]:
# 			print(year[x])
# 			break
# 	except:
# 		pass
# 	if x == len(year) - 1:
# 		break
# 	hold.append(year[x])
# 	hold.append(salary[x])
# 	dataArray.append(hold)
# 	hold = []
# 	x+=1


# dataArray.sort()
# print(dataArray)

