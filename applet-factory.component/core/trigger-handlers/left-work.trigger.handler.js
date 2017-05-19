import cache from '../../cache';
import invoke from '../actions/invoke.js';

const handleLeftWorkTrigger = (trigger) => {
    cache.get(trigger.appletId, (err, data) => {
        if (err) { throw err };

        const applet = JSON.parse(data);
        const actionType = applet.applet.action.type;
        const settings = applet.applet.settings.smsAddress;

        invoke(actionType, settings);
    });

};

export default handleLeftWorkTrigger;