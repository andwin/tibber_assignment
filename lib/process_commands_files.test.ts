import path from 'path'
import fs from 'fs/promises'
import { expect, test } from 'vitest'
import processCommands from './process_commands'
import Position from '../types/position'
import Command from '../types/command'

const testFilesDir = 'process_commands_test_files'

type TestFileContent = {
  start: Position
  commands: Command[]
  expectedResult: number
}

const testFiles = [
  { filename: 'heavy.json', expectedResult: 993737501 },
]

test('processCommands files', async () => {
  for (const testFile of testFiles) {
    const filename = path.join(__dirname, testFilesDir, testFile.filename)
    const content = await fs.readFile(filename, 'utf-8')
    const data: TestFileContent = JSON.parse(content)

    const { start, commands } = data

    const result = processCommands(start, commands)

    expect(result, `Test file: ${testFile.filename}`).toBe(testFile.expectedResult)
  }
})
