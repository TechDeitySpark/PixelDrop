import os
import boto3
from flask import Flask,request,jsonify
from dotenv import load_dotenv

load_dotenv()

app=Flask(__name__)

S3_BUCKET=os.getenv('S3_BUCKET_NAME')
S3_Region=os.getenv('AWS_DEFAULT_REGION')
s3=boto3.client('s3')
@app.route('/')
def home():
    return "Welcome to the API!"

@app.route('/upload',methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({'error':'No file part in the request'}),400
    image_file=request.files['image']
    try:
        s3.upload_fileobj(
            image_file,
            S3_BUCKET,
            image_file.filename,
            ExtraArgs=
                {'ACL':'public-read',
                 'ContentType':image_file.content_type,
                }
        )
        image_url=f'https://{S3_BUCKET}.s3.{S3_Region}.amazonaws.com/{image_file.filename}'
        return jsonify({'image_url':image_url})

    except Exception as e:
        return jsonify({'error':str(e)}),500
if __name__=='__main__':
    app.run(debug=True)