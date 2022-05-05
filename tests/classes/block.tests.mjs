import Block from '../../src/classes/block.mjs'

describe('Tests regarding the Block class', () => {
	it('Should retain value when initializing new Block class', () => {
		expect(new Block(8, 8)).toEqual({ x: 8, y: 8 })
	})
})
