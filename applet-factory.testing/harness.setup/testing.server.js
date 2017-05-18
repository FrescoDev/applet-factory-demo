import * as chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../applet-factory.component/host/server';

chai.use(chaiHttp);
export default chai.request(server);