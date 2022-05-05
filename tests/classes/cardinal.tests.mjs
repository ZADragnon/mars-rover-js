import Cardinal from '../../src/classes/cardinal.mjs'
import Block from '../../src/classes/block.mjs'

describe('Tests regarding the Cardinal class', () => {
	const cardinal = new Cardinal();

	it('Should retain value when moving the cardinal', () => {
		expect(cardinal.move(new Block(8, 8))).toEqual({ x: 8, y: 8 })
	})

	it('Should return empty value when getOrientation from cardinal', () => {
		expect(cardinal.getOrientation()).toEqual('')
	})
})
