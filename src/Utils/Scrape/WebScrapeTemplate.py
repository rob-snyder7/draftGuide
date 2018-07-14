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
webURL = "https://www.espn.com"
outputName = "TempScrape.html"

# Do Not Touch
html = BeautifulSoup(simple_get(webURL), 'html.parser')

dataArray = []
# Pick data to be scraped

hold = 1
# print(html)
for span in html.select('span'):
	# dataArray.append(td.text)
	print(span)

# div = html.find('div', {"class": "search-result_wrapper"})
# print(div)


# # 	if hold == 4:
# # 		dataArray.append(td.text)
# # 		hold = -1
# # 	hold += 1

# print(dataArray)
# print(len(dataArray))



# for x in range(len(test)):
# 	try:
# 		pos = test[x].index(',')
# 	except:
# 		pos = test[x].index(' D/')
# 	test[x] = test[x][:pos]


# print(test)


# for x in html.select("td a"):
#     if hold == 1:
#         dataArray.append(x.text)
#         hold = -2
#     hold += 1

