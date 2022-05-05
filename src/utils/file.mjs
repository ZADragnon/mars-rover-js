import fs from 'fs'
import readline from 'readline'
import North from '../classes/north.mjs'
import East from '../classes/east.mjs'
import South from '../classes/south.mjs'
import West from '../classes/west.mjs'
import Block from '../classes/block.mjs'

export default class File {
	static isValidTextFile(fileName) {
		return fileName.split('.').pop() === 'txt'
	}

	static async readFile(fileLocation) {
		let data = []

		try {
			const filePath = fileLocation || './src/setup.txt'

			if (!this.isValidTextFile(filePath) || !fs.existsSync(filePath)) {
				console.error('File is either invalid or does not exists at the location.')
				return
			}

			const readStream = fs.createReadStream(filePath, 'utf8')
			const readLines = readline.createInterface({ input: readStream, crlfDelay: Infinity })

			for await (const line of readLines) {
				data.push(line)
			}

			return this.processFile(data)
		} catch (e) {
			console.error(e)
		}
	}

	static processFile(rows) {
		if (rows.length < 3) {
			console.error('File is not in the correct format.')
			return
		}

		let configuration = {
			zone: {
				x: null,
				y: null
			},
			rover: {
				location: null,
				orientation: null,
				commands: null
			}
		}

		// Get zone size
		let zoneSize = rows[0].split(' ')
		configuration.zone.x = parseInt(zoneSize[0])
		configuration.zone.y = parseInt(zoneSize[1])

		// Get rover's location and orientation
		let roversLocation = rows[1].split(' ')
		let roverX = parseInt(roversLocation[0])
		let roverY = parseInt(roversLocation[1])
		configuration.rover.location = new Block(roverX, roverY)
		configuration.rover.orientation = this.transformOrientation(roversLocation[2])

		// Get commands for rover
		configuration.rover.commands = rows[2]

		if (!configuration.zone.x || !configuration.zone.y || !roverX || !roverY || !configuration.rover.orientation || !configuration.rover.commands) {
			console.error('File is not in the correct format.')
			return
		}

		return configuration
	}

	static transformOrientation(orientation) {
		switch (orientation) {
			case 'N':
				return new North()
			case 'E':
				return new East()
			case 'S':
				return new South()
			case 'W':
				return new West()
			default:
				console.error('Orientation could not be transformed.')
				break
		}
	}
}
