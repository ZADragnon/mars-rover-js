import Block from '../../src/classes/block.mjs'
import West from '../../src/classes/west.mjs'
import South from '../../src/classes/south.mjs'
import North from '../../src/classes/north.mjs'

describe('Tests regarding the West class', () => {
	const cardinal = new West();

	it('Should return South cardinal when West cardinal rotates 90 degrees left', () => {
		expect(JSON.stringify(cardinal.left())).toEqual(JSON.stringify(new South()))
	})

	it('Should return North cardinal when West cardinal rotates 90 degrees right', () => {
		expect(JSON.stringify(cardinal.right())).toEqual(JSON.stringify(new North()))
	})

	it('Should decrease x-value with 1 when West cardinal is moved', () => {
		expect(cardinal.move(new Block(8, 8))).toEqual({ x: 7, y: 8 })
	})

	it('Should return W value when getOrientation from West cardinal', () => {
		expect(cardinal.getOrientation()).toEqual('W')
	})
})
