const test = require('ava')
const rewire = require('rewire')
const printer = rewire('../../services/print')
const expectedLog = require('../../mocks/print-100-values')
const LoggerMock = require('../../mocks/logger-mock')

test('printRange100 should log respective values from 1 to 100', t => {
    const log = new LoggerMock()
    const reset = printer.__set__('logger', log)
    printer.printRange100()
    t.is(expectedLog.log, log.getFullLog())
    reset()
})