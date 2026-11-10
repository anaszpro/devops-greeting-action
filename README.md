# DevOps Lab Greeting Action

This JavaScript action prints a greeting and exposes it as a step output. Build it with Node.js 24 and npm.

    npm ci
    npm run build

Commit the generated dist directory before tagging v1.0.0. The workflow repository calls this tag and checks the greeting output.
