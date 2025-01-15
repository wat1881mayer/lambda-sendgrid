export const handler = async (event: SQSEvent) => {
    for (const record of event.Records) {
        const { to, body } = JSON.parse(record.body) as EmailPayload;

        const sendgridService = new SendgridService();
        await sendgridService.sendEmail(to, body);
    }
};