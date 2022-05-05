import East from '../../src/classes/east.mjs'
import North from '../../src/classes/north.mjs'
import Block from '../../src/classes/block.mjs'
import West from '../../src/classes/west.mjs'

describe('Tests regarding the North class', () => {
	const cardinal = new North();

	it('Should return West cardinal when North cardinal rotates 90 degrees left', () => {
		expect(JSON.stringify(cardinal.left())).toEqual(JSON.stringify(new West()))
	})

	it('Should return East cardinal when North cardinal rotates 90 degrees right', () => {
		expect(JSON.stringify(cardinal.right())).toEqual(JSON.stringify(new East()))
	})

	it('Should increase y-value with 1 when North cardinal is moved', () => {
		expect(cardinal.move(new Block(8, 8))).toEqual({ x: 8, y: 9 })
	})

	it('Should return N value when getOrientation from North cardinal', () => {
		expect(cardinal.getOrientation()).toEqual('N')
	})
})
