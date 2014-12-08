
from flask import Flask, request, render_template, jsonify
''' ------------------------------- setup and initialize app ------------------------------- '''
app = Flask(__name__)
''' ---------------------------------------- Routes ---------------------------------------- '''
@app.route('/')
def index():
	return render_template('index.html')

@app.route('/get_video', methods=['GET'])
def get_video():
	pass

''' --------------------------------- Main Function -------------------------------------- '''
if __name__ == '__main__':
	app.run(host='0.0.0.0', port=int('5000'), debug = True)