const sendSms = (settings) => {
    // send the sms
    console.log(`sms has been sent to ${settings.smsAddress}! \n`);
    console.log(`sms: ${settings.smsContent}! \n`);
};

export default sendSms;