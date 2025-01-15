class SendgridService {
    private sendgridClient: any;

    constructor(apiKey: string) {
        this.sendgridClient = require('@sendgrid/mail');
        this.sendgridClient.setApiKey(apiKey);
    }

    async sendEmail(to: string, body: string): Promise<void> {
        const msg = {
            to: to,
            from: 'your-email@example.com', // Replace with your verified sender
            subject: 'Subject of the email',
            text: body,
            html: `<strong>${body}</strong>`,
        };

        try {
            await this.sendgridClient.send(msg);
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Email sending failed');
        }
    }
}

export default SendgridService;