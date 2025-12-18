from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/question")
def question():
    a = random.randint(1, 20)
    b = random.randint(1, 20)
    op = random.choice(["+", "-", "*"])

    if op == "+":
        ans = a + b
    elif op == "-":
        ans = a - b
    else:
        ans = a * b

    return jsonify({
        "question": f"{a} {op} {b}",
        "answer": ans
    })

@app.route("/67-easter-egg-1")
def easter_egg_67():
    return render_template("67-easter-egg.html")


if __name__ == "__main__":
    app.run(debug=True)
