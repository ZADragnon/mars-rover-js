import Block from './block.mjs'

export default class Cardinal {
	left() {}

	right() {}

	move(block) {
		return new Block(block.x, block.y)
	}

	getOrientation = () => ''
}
