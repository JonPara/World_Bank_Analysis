# Anything with a double "##" has a high probablilty of needing to be changed

import datetime as dt

from flask import(
    Flask,
    render_template,
    jsonify,
    requrest,
    redirect)

###########################
# Flask Setup
###########################
app = Flask(__name__)

###########################
# Database Setup
###########################

from flask_sqlalchemy import flask_sqlalchemy
## Change database name
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/ids.sqlite"

db = SQLAlchemy(app)

## Change table names
class WorldBank(db.Model):
    __tablename__ = "world_bank_analysis"

    id = db.Column(db.Integer, primary_key = True)
    country_name = db.Column(db.String(64))
    year = db.Column(db.Integer)
    debt = db.Column(db.Integer)

# Create the route that renders the html template
@app.route("/")
def home():
    return render_template("wba_html_draft.html")


@app.route("/")


