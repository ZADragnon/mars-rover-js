import East from '../../src/classes/east.mjs'
import North from '../../src/classes/north.mjs'
import South from '../../src/classes/south.mjs'
import Block from '../../src/classes/block.mjs'

describe('Tests regarding the East class', () => {
	const cardinal = new East();

	it('Should return North cardinal when East cardinal rotates 90 degrees left', () => {
		expect(JSON.stringify(cardinal.left())).toEqual(JSON.stringify(new North()))
	})

	it('Should return South cardinal when East cardinal rotates 90 degrees right', () => {
		expect(JSON.stringify(cardinal.right())).toEqual(JSON.stringify(new South()))
	})

	it('Should increase x-value with 1 when East cardinal is moved', () => {
		expect(cardinal.move(new Block(8, 8))).toEqual({ x: 9, y: 8 })
	})

	it('Should return E value when getOrientation from East cardinal', () => {
		expect(cardinal.getOrientation()).toEqual('E')
	})
})
