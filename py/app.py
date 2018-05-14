from flask import Flask
import time

app = Flask(__name__)


@app.route("/")
def root():
    return 'Hi, Im root py'

@app.route("/sleep")
def sleep():
    time.sleep(0.1)
    return 'Python Sleep Test'

@app.route("/cycle")
def cycle():
    i = 0
    while (i < 100000000):
      i += 1
    return 'Python Cycle Test'


if __name__ == "__main__":
    app.run()
