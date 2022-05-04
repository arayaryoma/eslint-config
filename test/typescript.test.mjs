import {runESLint} from './runner.mjs';
import test from 'node:test';
import assert from 'node:assert';

test('typescript', async t => {
	const result = await runESLint('presets/typescript.js', 'test/fixtures/typescript/ok.ts');
	assert.strictEqual(result.errorCount, 0);
});

