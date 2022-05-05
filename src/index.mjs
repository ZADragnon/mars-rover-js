import Zone from './classes/zone.mjs'
import Rover from './classes/rover.mjs'
import File from './utils/file.mjs'

const main = async () => {
	let fileLocation = ''

	if (process.argv.length > 2) fileLocation = process.argv[2]

	const configuration = await File.readFile(fileLocation)

	if (!configuration) return

	const zone = new Zone(configuration.zone.x, configuration.zone.y)
	const rover = new Rover(configuration.rover.location, configuration.rover.orientation, zone)

	rover.execute(configuration.rover.commands)

	console.log(rover.getCurrentLocation())
}

await main()
