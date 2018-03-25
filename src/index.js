import('./webpack_wasm_skeleton')
  .then(module => {
    const { add } = module
    console.log(add(1, 2))
  })
