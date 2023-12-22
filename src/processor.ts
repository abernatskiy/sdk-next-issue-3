import {assertNotNull} from '@subsquid/util-internal'
import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import {allFields} from './allFields'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        chain: {
            rateLimit: 10
        }
    })
    .setFinalityConfirmation(15)
    .setFields(allFields)
    .addTransaction({
        type: ['call'],
        callTo: ['0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'], // Uniswap v3 router
        transaction: true,
        range: {from: 90_000_000, to: 90_001_000}
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
