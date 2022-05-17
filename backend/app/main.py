
from flask import Flask, jsonify, request
from flask_restx import Api, Resource, fields
from flask_cors import CORS

app = Flask(__name__)
api = Api(app=app)
CORS(app=app)

ns = api.namespace('calculate', description= 'Simple calculations API')
input_model = api.model('numbers', {'num1': fields.Integer, 'num2': fields.Integer})

@ns.route('/add')
class Add(Resource):
    @ns.expect(input_model)
    def post(self):
        num1 = request.get_json()['num1']
        num2 = request.get_json()['num2']
        
        data = {}
        data['result']= int(num1) + int(num2)
        print(data)

        return jsonify(data)

@ns.route('/multiply')
class Multiply(Resource):
    @ns.expect(input_model)
    def post(self):
        num1 = request.get_json()['num1']
        num2 = request.get_json()['num2']
        
        data = {}
        data['result']= int(num1) * int(num2)
        print(data)

        return jsonify(data)

@ns.route('/divide')
class Divide(Resource):
    @ns.expect(input_model)
    def post(self):
        num1 = request.get_json()['num1']
        num2 = request.get_json()['num2']
        
        data = {}
        data['result']= int(num1) / int(num2)
        print(data)

        return jsonify(data)

#@app.route("/")
#def welcome():
#    return "Hello World! Welcome"

if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True,port=5000)
