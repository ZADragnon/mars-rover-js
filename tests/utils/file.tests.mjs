import File from '../../src/utils/file.mjs'

describe('Tests regarding the File utils class', () => {
	it('Should success when valid text file given', () => {
		expect(File.isValidTextFile('setup.txt')).toBe(true)
	})

	it('Should fail when invalid text file given', () => {
		expect(File.isValidTextFile('setup.png')).toBe(false)
	})
})
