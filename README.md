
# 📦 PixelDrop – Secure Image Uploader with Flask & S3

PixelDrop is a lightweight, secure image uploader built using **Python Flask** and **Amazon S3**. It allows users to upload images through a REST API and provides temporary access via **presigned URLs**, ensuring safe and private file handling.

## 🚀 Features

- 🔐 Upload images to a **private** S3 bucket
- 🖼️ Generate **presigned URLs** for secure access
- 🔄 MIME type preserved during upload
- 📂 Configurable via `.env` (no secrets in code)
- 🧪 Easy to test with Postman or a browser frontend

## 🧰 Tech Stack

- Python 3
- Flask
- Boto3 (AWS SDK for Python)
- Amazon S3
- python-dotenv

## 📁 Project Structure

```
PixelDrop/
├── app.py              # Flask app
├── .env                # AWS credentials (not included in repo)
├── .gitignore
└── requirements.txt
```

## 🔧 Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/TechDeitySpark/PixelDrop.git
   cd PixelDrop
   ```

2. **Create and activate a virtual environment**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```
   pip install -r requirements.txt
   ```

4. **Create a `.env` file** with your AWS credentials:
   ```
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   AWS_DEFAULT_REGION=eu-central-1
   S3_BUCKET_NAME=your_bucket_name
   ```

5. **Run the app**
   ```
   python app.py
   ```

## 📬 API Endpoint

### `POST /upload`

- Form field: `image` (type: file)
- Returns: JSON with a temporary presigned URL

Example response:
```
{
  "image_url": "https://your-bucket.s3.amazonaws.com/yourimage.jpg?X-Amz-Signature=..."
}
```

## 💡 Use Cases

- Temporary file sharing
- Secure image previews
- Cloud integration practice project

## 🛡️ Security Notes

- S3 bucket remains private; no ACLs or public access
- `.env` is excluded via `.gitignore` to keep credentials safe
- Presigned URLs expire automatically after 1 hour

## 📖 License

MIT License — use freely, credit appreciated.

## 🤝 Contributions

Pull requests are welcome! If you’d like to add frontend support or database logging, feel free to fork and improve.
