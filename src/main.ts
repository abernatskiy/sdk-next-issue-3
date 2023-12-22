import {TypeormDatabase} from '@subsquid/typeorm-store'
import {Burn} from './model'
import {processor} from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    console.log(`Batch goes from ${ctx.blocks[0].header.height} to ${ctx.blocks[ctx.blocks.length-1].header.height}`)
})
