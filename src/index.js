const u32 = (num) => num >>> 0

export const date_now = Date.now

import('./webpack_wasm_skeleton')
  .then(module => {
    const { add, get_timestamp, rand } = module
    console.log(add(1, 2))
    console.log(get_timestamp())
    console.log(u32(rand()))
  })
