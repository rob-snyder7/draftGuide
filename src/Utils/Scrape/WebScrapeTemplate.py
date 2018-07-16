from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
import json


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


# Enter url of page to be scraped and name of file for data output
webURL = 'https://fantasyfootballcalculator.com/rankings/ppr'
outputName = "TempScrape.html"
dataArray = []

# Do Not Touch
html = BeautifulSoup(simple_get(webURL), 'html.parser')

# Pick data to be scraped






### ESPN ###
# hold = -2
# for span in html.select('tr.last td'):
#     if hold == 1:
#         dataArray.append(span.text)
#         hold = -3
#     hold += 1

# for x in range(len(dataArray)):
#     hold = dataArray[x].index(' ') + 1
#     dataArray[x] = dataArray[x][hold:]

# print(dataArray)


### Yahoo ###
# for span in html.select('span.full-name'):
#     dataArray.append(span.text)

# print(dataArray[:200])
# print(len(dataArray[:200]))

### CBS ###
# hold = 0
# for span in html.select('div.player a'):
#     dataArray.append(span['href'])

# for x in range(len(dataArray)):
#     dataArray[x] = dataArray[x][:-1]
#     hold = max(loc for loc, val in enumerate(dataArray[x]) if val == '/') + 1
#     dataArray[x] = dataArray[x][hold:]
#     dataArray[x] = dataArray[x].replace('-',' ')

# print(dataArray[:200])


### myfantasyleague ###
# hold = 0
# for span in html.select('a'):
#     if hold > 10 and hold < 215:
#         dataArray.append(span.text)
#     hold += 1

# for x in range(len(dataArray)):
#     dataArray[x] = dataArray[x][:-7]

# remove = []
# for x in range(len(dataArray)):
#     try:
#         hold = dataArray[x].index(',')
#         dataArray[x] = dataArray[x][hold + 2:] + ' ' + dataArray[x][:hold]
#     except:
#         remove.append(x)

# for x in remove:
#     del dataArray[x]

# print((dataArray))

### Walter ###
# hold = -23
# for span in html.select('span'):
#     if hold > 0 and hold%2 == 1:
#         dataArray.append(span.text)
#     hold += 1


# for x in range(200):
#     hold = dataArray[x].index(',')
#     dataArray[x] = dataArray[x][:hold]
# print(dataArray[:200])
hold = 0
for span in html.select('td'):
    if hold == 1:
        dataArray.append(span.text)
        hold = -4
    hold += 1

print(dataArray)
print(len(dataArray))

