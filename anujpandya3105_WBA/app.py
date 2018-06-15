# Import SQL Alchemy `automap`, Flask, custom function and other dependencies.
from sqlalchemy import create_engine, MetaData, desc
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from flask import Flask, jsonify, render_template

# Import and establish Base for which classes will be constructed
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

# Import modules to declare columns and column data types
from sqlalchemy import Column, Integer, String, Float, inspect

import numpy as np

app = Flask(__name__)

# Create a connection to a SQLite database
engine = create_engine('sqlite:///ids.sqlite', echo=False)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

CountryMaster = Base.classes.country_master
IndicatorMaster = Base.classes.indicator_master
IDSData = Base.classes.ids_data
PovertyData = Base.classes.poverty_data

#create session (link) from Python to the DB
session = Session(engine)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/country")
def country_info():
    resultc = session.query(CountryMaster.country_code).all()
    print(resultc)
    country_list = [list(i) for i in resultc]
    return jsonify(country_list)

if __name__ == '__main__':
    app.run(debug=False)

