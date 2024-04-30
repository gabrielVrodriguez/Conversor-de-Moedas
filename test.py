
import requests

url  = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'

response = requests.get(url)

print(response.json())
