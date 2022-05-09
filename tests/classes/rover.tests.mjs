import Rover from '../../src/classes/rover.mjs'
import Block from '../../src/classes/block.mjs'
import North from '../../src/classes/north.mjs'
import Zone from '../../src/classes/zone.mjs'
import South from '../../src/classes/south.mjs'
import East from '../../src/classes/east.mjs'
import West from '../../src/classes/west.mjs'

describe('Tests regarding the Rover class', () => {
	let rover = new Rover(new Block(0, 0), new North(), new Zone(8, 8))

	describe('You are given the initial starting point (x, y) and the direction it is facing (N, E, S, W)', () => {
		it('Should set starting location', () => {
			expect(rover.location).toEqual({ x: 0, y: 0 })
		})

		it('Should set direction it is facing', () => {
			expect(JSON.stringify(rover.orientation)).toEqual(JSON.stringify(new North()))
		})

		it('Should have current location of 0 0 N', () => {
			expect(rover.getCurrentLocation()).toEqual('0 0 N')
		})
	})

	describe('You are given INVALID commands to the rover', () => {
		it('Starting Location won\'t change with invalid commands', () => {
			rover.execute('ABCDEFGHIJKNOPQSTUVWXYZ')
			expect(rover.getCurrentLocation()).toEqual('0 0 N')
		})
	})

	describe('You are given VALID commands to the rover', () => {
		it('Should increase Y when moving North', () => {
			rover = new Rover(new Block(2, 2), new North(), new Zone(8, 8))
			rover.execute('M')
			expect(rover.getCurrentLocation()).toEqual('2 3 N')
		})

		it('Should reduce Y when moving South', () => {
			rover = new Rover(new Block(2, 2), new South(), new Zone(8, 8))
			rover.execute('M')
			expect(rover.getCurrentLocation()).toEqual('2 1 S')
		})

		it('Should increase X when moving East', () => {
			rover = new Rover(new Block(2, 2), new East(), new Zone(8, 8))
			rover.execute('M')
			expect(rover.getCurrentLocation()).toEqual('3 2 E')
		})

		it('Should reduce X when moving West', () => {
			rover = new Rover(new Block(2, 2), new West(), new Zone(8, 8))
			rover.execute('M')
			expect(rover.getCurrentLocation()).toEqual('1 2 W')
		})

		it('Should change direction N to E when command is R for North facing', () => {
			rover = new Rover(new Block(2, 2), new North(), new Zone(8, 8))
			rover.execute('R')
			expect(rover.getCurrentLocation()).toEqual('2 2 E')
		})

		it('Should change direction N to W when command is L for North facing', () => {
			rover = new Rover(new Block(2, 2), new North(), new Zone(8, 8))
			rover.execute('L')
			expect(rover.getCurrentLocation()).toEqual('2 2 W')
		})

		it('Should change direction E to S when command is R for East facing', () => {
			rover = new Rover(new Block(2, 2), new East(), new Zone(8, 8))
			rover.execute('R')
			expect(rover.getCurrentLocation()).toEqual('2 2 S')
		})

		it('Should change direction E to N when command is L for East facing', () => {
			rover = new Rover(new Block(2, 2), new East(), new Zone(8, 8))
			rover.execute('L')
			expect(rover.getCurrentLocation()).toEqual('2 2 N')
		})

		it('Should change direction S to W when command is R for South facing', () => {
			rover = new Rover(new Block(2, 2), new South(), new Zone(8, 8))
			rover.execute('R')
			expect(rover.getCurrentLocation()).toEqual('2 2 W')
		})

		it('Should change direction S to E when command is L for South facing', () => {
			rover = new Rover(new Block(2, 2), new South(), new Zone(8, 8))
			rover.execute('L')
			expect(rover.getCurrentLocation()).toEqual('2 2 E')
		})

		it('Should change direction W to N when command is R for West facing', () => {
			rover = new Rover(new Block(2, 2), new West(), new Zone(8, 8))
			rover.execute('R')
			expect(rover.getCurrentLocation()).toEqual('2 2 N')
		})

		it('Should change direction W to S when command is L for West facing', () => {
			rover = new Rover(new Block(2, 2), new West(), new Zone(8, 8))
			rover.execute('L')
			expect(rover.getCurrentLocation()).toEqual('2 2 S')
		})

		it('Should stay in position when next move is out of bounds facing North', () => {
			rover = new Rover(new Block(8, 8), new North(), new Zone(8, 8))
			rover.execute('M')
			expect(rover.getCurrentLocation()).toEqual('8 8 N')
		})

		it('Should stay in position when next move is out of bounds facing North', () => {
			rover = new Rover(new Block(8, 8), new North(), new Zone(8, 8))
			rover.execute('M')
			expect(rover.getCurrentLocation()).toEqual('8 8 N')
		})

		it('Should stay in position when next move is out of bounds facing East', () => {
			rover = new Rover(new Block(8, 8), new East(), new Zone(8, 8))
			rover.execute('M')
			expect(rover.getCurrentLocation()).toEqual('8 8 E')
		})

		it('Should stay in position when next move is out of bounds facing South', () => {
			rover = new Rover(new Block(8, 0), new South(), new Zone(8, 8))
			rover.execute('M')
			expect(rover.getCurrentLocation()).toEqual('8 0 S')
		})

		it('Should stay in position when next move is out of bounds facing West', () => {
			rover = new Rover(new Block(0, 8), new West(), new Zone(8, 8))
			rover.execute('M')
			expect(rover.getCurrentLocation()).toEqual('0 8 W')
		})

		it('Should match location with list of commands', () => {
			rover = new Rover(new Block(1, 2), new East(), new Zone(8, 8))
			rover.execute('MMLMRMMRRMML')
			expect(rover.getCurrentLocation()).toEqual('3 3 S')
		})
	})
})
