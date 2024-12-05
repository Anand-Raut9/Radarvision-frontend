from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("landingpage.html")

@app.route('/upload')
def upload():
    return render_template('upload.html')

@app.route('/sample_upload')
def sample_upload():
    sample_images = [f for f in os.listdir('static/sample_images') if f.endswith(('.jpg', '.png'))]
    return render_template('sample_upload.html', sample_images=sample_images)

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/signup')
def signup():
    return render_template("signup.html")
