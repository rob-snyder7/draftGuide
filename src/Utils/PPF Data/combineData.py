import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile


years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
# years = ['2010', '2011', '2012', '2013']
pffData = []


for year in years:

	df = pd.read_csv('C:/Users/rksny/Desktop/PFF Data/WR&TE/receiving_summary ' + year + '.csv')

	# print("Column headings:")
	# print(df.columns)

	players = df['player']
	grades = df['grades_offense']
	positions = df['position']

	for i in range(len(players)):
		hold = []
		hold.append(players[i])
		hold.append(positions[i])
		hold.append(year)
		hold.append(grades[i])
		pffData.append(hold)

print(pffData)

df = pd.DataFrame(pffData)
writer = pd.ExcelWriter('C:/Users/rksny/Desktop/PFF Data/Output/PFFWRTEData.xlsx', engine='xlsxwriter')
df.to_excel(writer, sheet_name='sheet1')
writer.save()