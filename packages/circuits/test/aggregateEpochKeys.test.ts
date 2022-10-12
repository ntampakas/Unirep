import { expect } from 'chai'
import { SparseMerkleTree, hash2, hash4 } from '@unirep/crypto'
import { Circuit } from '../src'
import { genProofAndVerify } from './utils'
import { EPOCH_TREE_DEPTH, AGGREGATE_KEY_COUNT } from '../config'

describe('Multiple SMT updates', function () {
    this.timeout(300000)
    it('should update many leaves in an SMT', async () => {
        const tree = new SparseMerkleTree(EPOCH_TREE_DEPTH, hash2([0, 0]))
        const startRoot = tree.root
        const newLeaves = Array(AGGREGATE_KEY_COUNT)
            .fill(null)
            .map((_, i) => ({
                posRep: BigInt(i * 100),
                negRep: BigInt(i),
                leafIndex: BigInt(i * 500),
            }))
        const circuitInputs = {
            start_root: startRoot,
            epoch_keys: newLeaves.map(({ leafIndex }) => leafIndex),
            epoch_key_balances: newLeaves.map(({ posRep, negRep }) => [
                posRep,
                negRep,
            ]),
            old_epoch_key_balances: newLeaves.map(() => [0, 0]),
            path_elements: newLeaves.map((d) => {
                const p = tree.createProof(d.leafIndex)
                tree.update(d.leafIndex, hash2([d.posRep, d.negRep]))
                return p
            }),
        }
        const { isValid, publicSignals } = await genProofAndVerify(
            Circuit.aggregateEpochKeys,
            circuitInputs
        )
        const hashchain = newLeaves.reduce((acc, obj) => {
            return hash4([acc, obj.leafIndex, obj.posRep, obj.negRep])
        }, BigInt(0))
        expect(isValid).to.be.true
        expect(publicSignals[0].toString()).to.equal(tree.root.toString())
        expect(publicSignals[1].toString()).to.equal(hashchain.toString())
    })
})
