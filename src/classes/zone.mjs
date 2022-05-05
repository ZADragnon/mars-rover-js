import Block from './block.mjs'

export default class Zone {
	constructor(x, y) {
		this.blocks = []
		for (let i = 1; i <= x; i++) {
			for (let j = 1; j <= y; j++) {
				this.blocks.push(new Block(i, j))
			}
		}
	}

	checkOutOfBounds(block) {
		let isRoverInZone = this.blocks.some((value, index, array) => {
			return block.x === value.x && block.y === value.y
		})
		return !isRoverInZone
	}
}
