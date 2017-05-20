import cache from '../../cache';
import invoke from '../actions/invoke.js';

const handle = (trigger) => {
    cache.get(trigger.appletId, (err, data) => {
        if (err) { throw err }

        const appletSpec = JSON.parse(data);
        const actionType = appletSpec.applet.action.type;
        const settings = appletSpec.applet.settings;

        invoke(actionType, settings);
    });

};

export default handle;