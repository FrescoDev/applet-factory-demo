import GetMetaHandler from '../http.request.handling/resources/metadata/get.request.handler'
import { Router } from 'express'

const routes = new Router()

routes.get('/meta', GetMetaHandler.handle)

export default routes