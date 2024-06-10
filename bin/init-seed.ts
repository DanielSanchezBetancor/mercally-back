import Logger from "@coding-flavour/logger"
import init from "../scripts/init-seed"
import dotenv from 'dotenv'

(async () => {
  dotenv.config()
  const args = process.argv.slice(2)
  const isDebug = args.includes('--debug')
  const logger = Logger('InitDB')
  isDebug && logger.setDebugMode()

  try {
    await init()
    process.exit(0)
  } catch (e: any) {
    const message = JSON.stringify(e.message, null, 2)
    logger.error(`Error initializing database due to: ${message}`)
    process.exit(1)
  }
})()