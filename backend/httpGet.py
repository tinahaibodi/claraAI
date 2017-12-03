from newspaper import Article
import json
from firebase import firebase
from flask import Flask, redirect, url_for, request
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import webbrowser, os
import ast
from sklearn.externals import joblib
import math
from collections import Counter

app = Flask(__name__)
firebase = firebase.FirebaseApplication('https://yacks-7bd52.firebaseio.com', None)
fp = open('totalWords.txt')
total_words = ast.literal_eval(fp.read())
clf = joblib.load('4_27_python2.7.pkl') 
sides = ['liberal', 'conservative']


@app.route('/')
def index():
    return 'Root'

@app.route('/update', methods=['POST'])
def update():
	# index = request.form['index']
	# rec_data = firebase.get('/posts', index)
	# firebase.patch('/posts', updated_data)
    return 'TODO'

@app.route('/scrape', methods=['POST'])
def scrape():
	inputted_url = request.form['data']

	article = Article(inputted_url)
	article.download()
	article.parse()

	image_url = article.top_image
	authors = article.authors
	full_text = article.text
	title = article.title

	article.nlp()
	keywords = article.keywords
	summary = article.summary
	client = language.LanguageServiceClient()

	#Fakeness Score
	fake_score = 0
	if "breitbart" in inputted_url:
		fake_score = 1
	elif "infowars" in inputted_url:
		fake_score = 1
		

	#Political Leaning
	testVector = generateVector(full_text)
	political_leaning = sides[clf.predict([testVector])[0]]
	political_confidence = math.sqrt(max(clf.predict_proba([testVector])[0]) - min(clf.predict_proba([testVector])[0]))
	if political_confidence > .6:
		political_leaning = "Very " + political_leaning
	elif political_confidence < .15:
		political_leaning = "Neutral"

	#Sentiment Analysis
	document = types.Document(content=full_text, type=enums.Document.Type.PLAIN_TEXT)
	annotations = client.analyze_sentiment(document=document)
	sentiment_score = annotations.document_sentiment.score
	total_lines = 0
	for index, sentence in enumerate(annotations.sentences):
		sentiment_score += sentence.sentiment.score
		total_lines += 1
	sentiment_score /= total_lines

	score = 0

	json_data = json.dumps({'url': inputted_url, 'title': title, 'image_url': image_url, 'sentiment_score': sentiment_score, 'political_leaning': political_leaning, 'political_confidence': political_confidence, 'fake_score': fake_score, 'authors': authors, 'summary': summary, 'key_word': keywords})
	result = firebase.post('/posts', json_data)
	print(result)

	return json_data

@app.route('/getAll', methods=['GET'])
def getAll():
	rec_data = firebase.get('/posts', None)
	json_data = json.dumps(rec_data)
	return json_data

@app.route('/success/<path:data>')
def success(data):
	return data

@app.route('/echo', methods=['POST'])
def echo():
	inputted_text = request.form['data']
	return inputted_text

def generateVector(article_text):
    vector = [0] * len(total_words)
    article_features = Counter(article_text.lower().split())
    for i in range(len(total_words)):
        if total_words[i][0] in article_features.keys():
            vector[i] = article_features[total_words[i][0]]
    return vector

if __name__ == "__main__":
    # app.run(debug=True)
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
