export default class Rover {
	constructor(location, orientation, zone) {
		this.location = location
		this.orientation = orientation
		this.zone = zone
	}

	execute(commands) {
		for (let command of commands) {
			if (command === 'L') {
				this.orientation = this.orientation.left()
			} else if (command === 'R') {
				this.orientation = this.orientation.right()
			} else if (command === 'M') {
				let newLocation = this.orientation.move(this.location)
				if (this.zone.checkOutOfBounds(newLocation)) {
					console.log('The Mars Rover is at ' + this.location.x + ' ' + this.location.y + ' ' + this.orientation.getOrientation() + " and can't move forward.")
				} else {
					this.location = newLocation
				}
			}
		}
	}

	getCurrentLocation() {
		return this.location.x + ' ' + this.location.y + ' ' + this.orientation.getOrientation()
	}
}
