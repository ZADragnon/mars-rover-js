import Cardinal from './cardinal.mjs'
import East from './east.mjs'
import Block from './block.mjs'
import West from './west.mjs'

export default class South extends Cardinal {
	left() {
		return new East()
	}

	right() {
		return new West()
	}

	move(block) {
		return new Block(block.x, block.y - 1)
	}

	getOrientation = () => 'S'
}
