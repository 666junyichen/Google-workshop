# Google API Demo Example

A demonstration of using Google APIs with Node.js.

## Description

This example shows how to authenticate and make requests to Google APIs using the Google APIs Node.js client library.

## Prerequisites

- Node.js installed
- Google Cloud Project with API enabled
- Service account credentials (or OAuth2 credentials)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up credentials:
   - Create a service account in Google Cloud Console
   - Download the JSON key file
   - Save it as `credentials.json` in this directory (DO NOT commit this file)

3. Enable the required APIs in Google Cloud Console

## Usage

```bash
node index.js
```

## What It Demonstrates

- Authenticating with Google APIs
- Making API requests
- Handling responses
- Error handling

## Security Note

Never commit your `credentials.json` file to version control. It should be added to `.gitignore`.
