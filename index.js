import * as core from '@actions/core';
import { context } from '@actions/github';

try {
  const name = core.getInput('name', { required: true });
  const greeting = 'Hello, ' + name + '!';
  core.info(greeting);
  core.info('Triggered by ' + context.eventName + '.');
  core.setOutput('greeting', greeting);
} catch (error) {
  core.setFailed(error.message);
}
