const sendEmail = (settings) => {
    // send the email
    console.log(`email has been sent to ${settings.emailAddress}! \n`);
    console.log(`email: ${settings.emailContent}! \n`);
};

export default sendEmail;