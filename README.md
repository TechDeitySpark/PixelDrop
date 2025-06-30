# 📦 PixelDrop – Secure Image Uploader with Flask & React

PixelDrop is a modern, full-stack image uploader built with **Python Flask** backend and **React** frontend, utilizing **Amazon S3** for storage. It allows users to upload images through a REST API and provides temporary access via **presigned URLs**, ensuring safe and private file handling.

## 🚀 Features

- 🎨 Upload images from a clean and responsive Next.js frontend interface
- 🔗 Backend API built with Flask handles file uploads to AWS S3
- 🗄️ Uploaded images are stored safely in a configured S3 bucket
- 👁️ Displays uploaded image preview after successful upload
- 🔐 Uses AWS IAM for secure credential management
- 📂 Organized project structure with frontend and backend code separated into folders
- 🖼️ Generate **presigned URLs** for secure access
- 🔄 MIME type preserved during upload
- ⚙️ Configurable via `.env` (no secrets in code)
- 💅 Styled with Tailwind CSS
- 📱 Responsive design

## 🧰 Tech Stack

### Backend
- Python 3.11
- Flask
- Boto3 (AWS SDK for Python)
- Amazon S3

### Frontend
- React 19.0.0
- Next.js 15.3.4
- TypeScript
- Tailwind CSS
- Axios 1.10.0

## 📁 Project Structure

## 💡 Use Cases

- Temporary file sharing
- Secure image previews
- Cloud integration practice project
- Portfolio piece demonstrating full-stack development

## 🛡️ Security Notes

- S3 bucket remains private; no ACLs or public access
- `.env` is excluded via `.gitignore` to keep credentials safe
- Presigned URLs expire automatically after 1 hour
- CORS configured for secure frontend-backend communication

## 📖 License

MIT License — use freely, credit appreciated.

## 🤝 Contributions

Pull requests are welcome! Some areas for contribution:
- Enhanced frontend features
- Additional image processing capabilities
- Improved error handling
- Performance optimizations
- Additional test coverage