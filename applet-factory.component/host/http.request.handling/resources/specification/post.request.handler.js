import BaseHandler from 'fresco-http-service-utilities';

class PostSpecificationHandler extends BaseHandler {
    handle(req, res) {
        res.json({
            description: 'applet-factory',
            health: 'ok'
        });
    }
}

export default new PostSpecificationHandler();