import East from '../../src/classes/east.mjs'
import Block from '../../src/classes/block.mjs'
import West from '../../src/classes/west.mjs'
import South from '../../src/classes/south.mjs'

describe('Tests regarding the South class', () => {
	const cardinal = new South();

	it('Should return East cardinal when South cardinal rotates 90 degrees left', () => {
		expect(JSON.stringify(cardinal.left())).toEqual(JSON.stringify(new East()))
	})

	it('Should return West cardinal when South cardinal rotates 90 degrees right', () => {
		expect(JSON.stringify(cardinal.right())).toEqual(JSON.stringify(new West()))
	})

	it('Should decrease y-value with 1 when South cardinal is moved', () => {
		expect(cardinal.move(new Block(8, 8))).toEqual({ x: 8, y: 7 })
	})

	it('Should return S value when getOrientation from South cardinal', () => {
		expect(cardinal.getOrientation()).toEqual('S')
	})
})
