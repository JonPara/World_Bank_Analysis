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
    return render_template("./index.html")

@app.route("/country")
def country_info():
    resultc = session.query(CountryMaster.country_code).all()
    print(resultc)
    country_list = [list(i) for i in resultc]
    return jsonify(country_list)


@app.route("/debt/<country>")
def debtByCountry(country):
    print(country)
    year = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]
    debt_per_year = []
    debt_result = {}
    resultids = session.query(IDSData.yr_2006,
                              IDSData.yr_2007,
                              IDSData.yr_2008,
                              IDSData.yr_2009,
                              IDSData.yr_2010,
                              IDSData.yr_2011,
                              IDSData.yr_2012,
                              IDSData.yr_2013,
                              IDSData.yr_2014,
                              IDSData.yr_2015,
                              IDSData.yr_2016
                              ).filter_by(Country_Code=country, Indicator_Code='DT.DOD.DLXF.CD').all()
    print(resultids)

   
    for resultid in resultids:
        debt_per_year.append(resultid)

    # Add the above lists to the dictionary
    debt_result = {
		"year": year,
		"debt_per_year": debt_per_year
    }
    # debt_list = [list(i) for i in resultids]
    return jsonify(debt_result)


if __name__ == '__main__':
    app.run(debug=False)

