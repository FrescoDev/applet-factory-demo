import BaseHandler from 'fresco-http-service-utilities';

class GetMetaHandler extends BaseHandler {
    handle(req, res) {
        res.json({
            description: 'applet-factory',
            health: 'ok'
        });
    }
}

export default new GetMetaHandler();