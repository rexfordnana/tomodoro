import logger from './src/lib/logger'

const log = logger.child({test: 'Testing stuff'})

log.info('This should have the app name')

const names = ["Alice", "Bob", "Eve"];

names.forEach((s)=>{
    console.log(s.toUpperCase())
})