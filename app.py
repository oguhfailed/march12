from flask import Flask, render_template, jsonify
from datetime import datetime
import pytz

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/time")
def get_time():
    now = datetime.now()
    utc_now = datetime.now(pytz.utc)
    return jsonify({
        "local": now.strftime("%Y-%m-%d %H:%M:%S"),
        "utc": utc_now.strftime("%Y-%m-%d %H:%M:%S"),
        "timestamp": now.timestamp(),
    })


if __name__ == "__main__":
    app.run(debug=True)
