# Lambda SendGrid Project

This project is an AWS Lambda function that triggers on SQS events to send emails using SendGrid. The function extracts the necessary information from the SQS event and utilizes the SendGrid API to send the email.

## Project Structure

```
lambda-sendgrid
├── src
│   ├── handler.ts          # Entry point for the Lambda function
│   ├── services
│   │   └── sendgridService.ts # Service for sending emails via SendGrid
│   └── types
│       └── index.ts        # Type definitions for SQS events and email payloads
├── package.json             # NPM package configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd lambda-sendgrid
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure SendGrid:**
   - Create a SendGrid account and obtain your API key.
   - Set the API key in your environment variables or configuration file.

## Usage

- The Lambda function is triggered by SQS events. Ensure that your SQS queue is set up to send events to this Lambda function.
- The SQS event should contain the necessary fields for sending an email, such as `To` and `Body`.

## Example SQS Event

```json
{
  "Records": [
    {
      "body": "{\"to\":\"recipient@example.com\",\"body\":\"Hello, this is a test email!\"}"
    }
  ]
}
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.