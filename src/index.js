const toUint32 = (num) => num >>> 0

export const date_now = Date.now
export const console_log = console.log

import('./wasm_dev_book_webpack')
  .then(module => {
    const { add, get_timestamp, rand, sum, twice, hello } = module
    console.log(add(1, 2))
    console.log(get_timestamp())
    console.log(toUint32(rand()))
    console.log(sum(twice(new Int32Array([1, 2, 3, 4, 5]))))
    hello()
  })
