import Cardinal from './cardinal.mjs'
import Block from './block.mjs'
import North from './north.mjs'
import South from './south.mjs'

export default class East extends Cardinal {
	left() {
		return new North()
	}

	right() {
		return new South()
	}

	move(block) {
		return new Block(block.x + 1, block.y)
	}

	getOrientation = () => 'E'
}
