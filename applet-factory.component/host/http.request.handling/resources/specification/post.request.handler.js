import BaseHandler from 'fresco-http-service-utilities';
import cache from '../../../../cache'

class PostSpecificationHandler extends BaseHandler {
    handle(req, res) {
        const specification = req.body;
        cache.set(specification.applet.id, JSON.stringify(specification));

        console.log(`applet id: ${specification.applet.id} successfully created! ` + JSON.stringify(specification));
        res.json();
    }
}

export default new PostSpecificationHandler();