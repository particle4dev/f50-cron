// https://github.com/isaacs/node-lru-cache#options
import LRU from 'lru-cache'

const options = {}

const cache = LRU(options)

export default cache