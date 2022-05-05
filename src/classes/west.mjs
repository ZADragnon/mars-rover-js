import Cardinal from './cardinal.mjs'
import South from './south.mjs'
import North from './north.mjs'
import Block from './block.mjs'

export default class West extends Cardinal {
	left() {
		return new South()
	}

	right() {
		return new North()
	}

	move(block) {
		return new Block(block.x - 1, block.y)
	}

	getOrientation = () => 'W'
}
