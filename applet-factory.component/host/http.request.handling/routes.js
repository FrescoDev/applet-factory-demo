import GetMetaHandler from '../http.request.handling/resources/metadata/get.request.handler'
import PostSpecificationHandler from '../http.request.handling/resources/specification/post.request.handler'
import { Router } from 'express'

const routes = new Router()

routes.get('/meta', GetMetaHandler.handle)
routes.post('/specification', PostSpecificationHandler.handle)

export default routes