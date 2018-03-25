#![feature(proc_macro)]

extern crate wasm_bindgen;
extern crate tinymt;

#[wasm_bindgen(module = "./index")]
extern {
    fn date_now() -> f64;
}

use wasm_bindgen::prelude::*;
use tinymt::tinymt32;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn get_timestamp() -> f64 {
    unsafe {
        date_now()
    }
}

#[wasm_bindgen]
pub fn rand() -> u32 {
    let param = tinymt32::Param {
        mat1: 0x8F7011EE,
        mat2: 0xFC78FF1F,
        tmat: 0x3793fdff,
    };
    let seed = 1;
    tinymt32::from_seed(param, seed).gen()
}
