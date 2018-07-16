from contextlib import closing
from requests import get
from requests.exceptions import RequestException

deNames = ['Jacksonville Jaguars', 'Minnesota Vikings', 'Philadelphia Eagles', 'Los Angeles Rams', 'Los Angeles Chargers', 'Houston Texans', 'Denver Broncos', 'Baltimore Ravens', 'New Orleans Saints', 'Seattle Seahawks', 'New England Patriots', 'Kansas City Chiefs', 'Carolina Panthers', 'Pittsburgh Steelers', 'Chicago Bears', 'Arizona Cardinals', 'Atlanta Falcons', 'New York Giants', 'Cincinnati Bengals', 'Green Bay Packers', 'Tennessee Titans', 'Buffalo Bills', 'Detroit Lions', 'Tampa Bay Buccaneers', 'San Francisco 49ers', 'Cleveland Browns', 'Washington Redskins', 'Dallas Cowboys', 'New York Jets', 'Oakland Raiders', 'Miami Dolphins', 'Indianapolis Colts']
deObject = {'Jacksonville Jaguars': 'Jaguars', 'Minnesota Vikings': 'Vikings', 'Philadelphia Eagles': 'Eagles', 'Los Angeles Rams': 'Rams', 'Los Angeles Chargers': 'Chargers', 'Houston Texans': 'Texans', 'Denver Broncos': 'Broncos', 'Baltimore Ravens': 'Ravens', 'New Orleans Saints': 'Saints', 'Seattle Seahawks': 'Seahawks', 'New England Patriots': 'Patriots', 'Kansas City Chiefs': 'Chiefs', 'Carolina Panthers': 'Panthers', 'Pittsburgh Steelers': 'Steelers', 'Chicago Bears': 'Bears', 'Arizona Cardinals': 'Cardinals', 'Atlanta Falcons': 'Falcons', 'New York Giants': 'Giants', 'Cincinnati Bengals': 'Bengals', 'Green Bay Packers': 'Packers', 'Tennessee Titans': 'Titans', 'Buffalo Bills': 'Bills', 'Detroit Lions': 'Lions', 'Tampa Bay Buccaneers': 'Buccaneers', 'San Francisco 49ers': '49ers', 'Cleveland Browns': 'Browns', 'Washington Redskins': 'Redskins', 'Dallas Cowboys': 'Cowboys', 'New York Jets': 'Jets', 'Oakland Raiders': 'Raiders', 'Miami Dolphins': 'Dolphins', 'Indianapolis Colts': 'Colts'}
deCity = {'Jacksonville': 'Jaguars', 'Minnesota': 'Vikings', 'Philadelphia': 'Eagles', 'Los Angeles Rams': 'Rams', 'Los Angeles Chargers': 'Chargers', 'Houston': 'Texans', 'Denver': 'Broncos', 'Baltimore': 'Ravens', 'New Orleans': 'Saints', 'Seattle': 'Seahawks', 'New England': 'Patriots', 'Kansas City': 'Chiefs', 'Carolina': 'Panthers', 'Pittsburgh': 'Steelers', 'Chicago': 'Bears', 'Arizona': 'Cardinals', 'Atlanta': 'Falcons', 'New York': 'Giants', 'Cincinnati': 'Bengals', 'Green Bay': 'Packers', 'Tennessee': 'Titans', 'Buffalo': 'Bills', 'Detroit': 'Lions', 'Tampa Bay': 'Buccaneers', 'San Francisco': '49ers', 'Cleveland': 'Browns', 'Washington': 'Redskins', 'Dallas': 'Cowboys', 'New York': 'Jets', 'Oakland': 'Raiders', 'Miami': 'Dolphins', 'Indianapolis': 'Colts'}

holdArray = []

def simple_get(url):
    try:
        with closing(get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None

    except RequestException as e:
        log_error('Error during requests to {0} : {1}'.format(url, str(e)))
        return None


def is_good_response(resp):
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200 
            and content_type is not None 
            and content_type.find('html') > -1)

def log_error(e):
    print(e)


def removeExtras(arr):
	for x in range(len(arr)):
		if '  ' in arr[x]:
			arr[x] = arr[x].replace('  ', ' ')
		if ' D/ST' in arr[x]:
			arr[x] = arr[x][:-5]
		if ' Defense' in arr[x]:
			arr[x] = arr[x][:-8]
			if 'LA ' in arr[x]:
				arr[x] = 'Los Angeles ' + arr[x][3:]
			arr[x] = deCity[arr[x]]
		if arr[x] in deObject:
			arr[x] = deObject[arr[x]]
	for x in range(len(arr)):
		arr[x] = arr[x].lower()
		for char in arr[x]:
			if char in ".'":
				arr[x] = arr[x].replace(char,'')
	for x in range(len(arr)):
		if 'jr' in arr[x].lower():
			arr[x] = arr[x].replace(' Jr','')
		if 'ii' in arr[x]:
			arr[x] = arr[x].replace(' ii','')
		if 'iv' in arr[x]:
			arr[x] = arr[x].replace(' iv','')
		if 'Fuller v' in arr[x]:
			arr[x] = arr[x].replace(' v','')
		if 'iii' in arr[x]:
			arr[x] = arr[x].replace(' iii','')
		if 'sr' in arr[x]:
			arr[x] = arr[x].replace(' sr','')	
		if 'mitchell' in arr[x]:
			arr[x] = arr[x].replace('mitchell','mitch')
		if 'seferianjenkins' in arr[x]:
			arr[x] = arr[x].replace('seferianjenkins', "seferian-jenkins")
	return arr

def cleanNames(l1,l2,l3,l4,l5):
	names = []
	for x in [l1,l2,l3,l4,l5]:
		names += x
	names = sorted(list(set(names)))
	names.pop(0)
	return names


def indexItem(start, source, x):
	try:
		return source.index(start[x]) + 1
	except:
		return '-'

def ranks(start, src2, src3, src4, src5):
	listNames = cleanNames(start, src2, src3, src4, src5)

	for x in range(len(listNames)):
		total = 0
		count = 0
		std = 0
		stdArr = []
		for y in (start, src2, src3, src4, src5):
			try:
				total += indexItem(listNames, y, x)
				count += 1
				stdArr.append(indexItem(listNames, y, x))
			except:
				pass

		avg = round(total/count,2)
		if len(stdArr) > 1:
			for z in range(len(stdArr)):
				std += (stdArr[z] - avg)**2
			std = (std/(len(stdArr) - 1))**.5

		holdArray.append({'name' : listNames[x].title(), 'key' : x, 'YAH' : indexItem(listNames, start, x), 'CBS' : indexItem(listNames, src2, x), 'ESP' : indexItem(listNames, src3, x), 'FOX' : indexItem(listNames, src4, x), 'NFL' : indexItem(listNames, src5, x), 'AVG' :avg, 'STD' :round(std,2)})

	return holdArray