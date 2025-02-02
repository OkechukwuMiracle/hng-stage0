# HNG12 Stage 0 - Public API

This is a simple public API that returns basic information in JSON format.

# Description
This API provides a single endpoint that returns:

- Email address
- Current date and time in ISO 8601 format
- GitHub repository URL

# Setup And Installation
1. Clone the repository:
   git clone https://github.com/OkechukwuMiracle/hng-stage0-api.git
   
2. Install dependencies:
   cd hng-stage0-api
   npm init -y
   npm install express cors dotenv

3. Running and push the application:
   npm start
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   
## API Endpoint

Endpoint:
- Development URL: http://localhost:3000/
- Production URL: https://tonybnya-hng12-backend-stage00.onrender.com/
- Method: GET
- CORS: Enabled for all origins
  
- **GET** `/`
- Response:
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/OkechukwuMiracle/hng-stage0-api"
}
```
Technology Used
- Nodejs

Additional Information
If you're looking for experienced Python developers, you can find and hire elite node.js developers here: https://hng.tech/hire/nodejs-developers.
