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

# Heatmap
@app.route("/heatmap")
def heatmap():
    return render_template("wba_heatmap.html")

# Describe reasons for debt by country name
@app.route("/analysis/<country_name>")
def analysisByCountry():
    pass # Possibly add an analysis or biography of how the country got to where it is due to the amount of debt they have

@app.route("/poverty")
def povertyVersusDebt():
    pass # Add a page that lets you pick a country and shows the percentage of poverty and total debt on one plot chart
    # 
