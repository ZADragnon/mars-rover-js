import Cardinal from './cardinal.mjs'
import Block from './block.mjs'
import West from './west.mjs'
import East from './east.mjs'

export default class North extends Cardinal {
	left() {
		return new West()
	}

	right() {
		return new East()
	}

	move(block) {
		return new Block(block.x, block.y + 1)
	}

	getOrientation = () => 'N'
}
