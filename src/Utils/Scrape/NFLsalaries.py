from D3Scrapes import scrapeContract
import xlsxwriter

# players = ['Aaron-Rodgers', 'Nick-Perry', 'David-Bakhtiari', 'Jimmy-Graham', 'Davante-Adams', 'Mike-Daniels', 'Bryan-Bulaga', 'Corey-Linsley', 'Tramon-Williams', 'Lane-Taylor', 'Mason-Crosby', 'Kenny-Clark', 'Jaire-Alexander', 'Kyler-Fackrell', 'Dean-Lowry', 'Blake-Martinez', 'Kevin-King', 'Jason-Spriggs', 'Josh-Jackson', 'Josh-Jones', 'DeShone-Kizer', 'Montravius-Adams', 'Oren-Burks', 'Kapri-Bibbs', 'Jamaal-Williams', 'Trevor-Davis', 'Dan-Vitale', 'Aaron-Jones', "J'Mon-Moore", 'Cole-Madison', 'Malcolm-Johnson', 'Justin-McCray', 'Deon-Simon', 'JK-Scott', 'Marquez-Valdes-Scantling', 'Equanimeous-St.-Brown', 'Hunter-Bradley', 'Tim-Boyle', 'Raven-Greene', 'Alex-Light', 'Tony-Brown', 'Tra-Carson', 'James-Crawford', 'Kendall-Donnerson', 'Natrell-Jamerson', 'Tyler-Lancaster', 'James-Looney', 'Will-Redmond', 'Nico-Siragusa', 'Robert-Tonyan-Jr']

players = ['Aaron-Donald', 'Andrew-Whitworth', 'Brandin-Cooks', 'Michael-Brockers', 'Todd-Gurley', 'Marcus-Peters', 'Jared-Goff', 'Rob-Havenstein', 'Aqib-Talib', 'Robert-Woods', 'Nickell-Robey-Coleman', 'Johnny-Hekker', 'Greg-Zuerlein', 'Tyler-Higbee', 'Austin-Blythe', 'Gerald-Everett', 'Jake-McQuaide', 'Cooper-Kupp', 'John-Johnson', 'Joseph-Noteboom', 'Josh-Reynolds', 'Samson-Ebukam', 'Mike-Thomas', 'Brian-Allen', 'Marqui-Christian', 'Tanzel-Smart', 'John-Franklin-Myers', 'Justin-Davis', 'Brandon-Allen', 'Donte-Deayon', 'Kyle-Murphy', 'Micah-Kiser', 'Ogbonnia-Okoronkwo', 'John-Kelly', 'Sebastian-Joseph', 'Justin-Lawler', 'Jamil-Demby', 'Johnny-Mundt', 'Aaron-Neary', 'Darious-Williams', 'Darrell-Williams', 'Trevon-Young', 'Travin-Howard', 'Steven-Parker', 'Austin-Proehl', 'Ramon-Richards', 'Eric-Weddle']

data = {}
workbook = xlsxwriter.Workbook('C:/Users/rksny/Desktop/RamSalaries.xlsx')
worksheet = workbook.add_worksheet()
totlow = '2018'

for x in players:
	print(x)
	link = 'https://www.spotrac.com/nfl/green-bay-packers/' + str(x).replace("'","")
	data[x], low = scrapeContract(link)
	print(data[x])
	if low < totlow:
		totlow = low

col = 0
for z in range(15):
	p = str(int(totlow) + z)
	worksheet.write(z + 1, 0, int(p))

for x in players:
	row = 1
	worksheet.write(0, col + 1, x.replace("-", " "))
	start = int(data[x][0][0]) - int(totlow)
	for y in range(len(data[x])):
		try: 
			sal = int(data[x][y][1].replace(",", ""))
		except:
			sal = data[x][y][1]
		worksheet.write(start + row, col + 1, sal)
		row += 1
	col += 1

workbook.close()
		

