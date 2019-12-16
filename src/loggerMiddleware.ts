import * as express from 'express'

export const loggerMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.info(`${req.method} ${req.originalUrl} -- ${new Date()}`)
  const start = new Date().getTime()
  res.on('finish', () => {
    const elapsed = new Date().getTime() - start
    console.info(`${req.method} ${req.originalUrl} ${res.statusCode} -- ${elapsed}ms`)
  })
  next()
}
