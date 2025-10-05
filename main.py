from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data/world')
def world_data():
    with open('data/world_dataset.json') as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/data/nasa')
def nasa_data():
    with open('data/nasa_sample.json') as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/data/facts')
def facts_data():
    with open('data/facts.json') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
