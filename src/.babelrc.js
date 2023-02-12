const shouldInstrumentCode = "INSTRUMENT_CODE" in process.env
console.log('shouldInstrumentCode', shouldInstrumentCode)
module.exports = {
  "presets": [ "next/babel" ],
  "plugins": shouldInstrumentCode ?
  [[ "istanbul", 
    { 
      "exclude" : [ "cypress/**/*js" ] 
    } ]]
  : []
}


console.dir(module.exports, {depth: null})
