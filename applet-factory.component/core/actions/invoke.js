import sendEmail from './send-email';
import sendSms from './send-sms';

const invoke = (actionType, settings) => {
    switch (actionType) {
        case "sendSms":
            return sendSms(settings)
        case "sendEmail":
            return sendEmail(settings)
    }
};

export default invoke;