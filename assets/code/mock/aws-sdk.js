const emailsSent = [];

const awsSdk = {
  getEmailSent: () => emailsSent,
  SES: () => ({
    sendEmail: (payload) => {
      emailsSent.push(payload.Destination.ToAddresses);

      return {
        promise: () => new Promise(res => res(true)),
      };
    },
  }),
  S3: () => {},
};

export default awsSdk;

