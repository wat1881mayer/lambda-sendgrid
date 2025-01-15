export interface SQSEvent {
    Records: SQSRecord[];
}

export interface SQSRecord {
    body: string;
}

export interface EmailPayload {
    to: string;
    body: string;
}