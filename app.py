from flask import Flask, render_template
import requests
app = Flask(__name__)


@app.route('/')
def inde():
    return render_template('index.html')
    

if __name__ == '__main__':
    app.run(debug=True)




#FAZER O PROJETO COM BACK END E APLICAR OS CONCEITOS UTILIZANDO FLASK
"""url  = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'

response = requests.get(url)

print(response.json())
"""