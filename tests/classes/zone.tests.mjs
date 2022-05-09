import Zone from '../../src/classes/zone.mjs'
import Block from '../../src/classes/block.mjs'

describe('Tests regarding the Zone class', () => {
	let zone = new Zone(0, 0);

	it('Should create 0 blocks with default coordinates', () => {
		expect(zone.blocks.length).toEqual(0)
	})

	it('Should create 64 blocks with coordinates 8 8', () => {
		zone = new Zone(8, 8)
		expect(zone.blocks.length).toEqual(64)
	})

	it('Should be out of bounds with coordinates 8 9', () => {
		zone = new Zone(8, 8)
		let block = new Block(8, 9)

		expect(zone.checkOutOfBounds(block)).toEqual(true)
	})

	it('Should be out of bounds with negative x-coordinates -1 8', () => {
		zone = new Zone(8, 8)
		let block = new Block(-1, 8)

		expect(zone.checkOutOfBounds(block)).toEqual(true)
	})

	it('Should be out of bounds with negative 9-coordinates 1 -1', () => {
		zone = new Zone(8, 8)
		let block = new Block(1, -1)

		expect(zone.checkOutOfBounds(block)).toEqual(true)
	})

	it('Should be inside of bounds with coordinates 1 2', () => {
		zone = new Zone(8, 8)
		let block = new Block(1, 2)

		expect(zone.checkOutOfBounds(block)).toEqual(false)
	})

	it('Should be inside of bounds with coordinates 8 8, on the edge', () => {
		zone = new Zone(8, 8)
		let block = new Block(8, 8)

		expect(zone.checkOutOfBounds(block)).toEqual(false)
	})
})
