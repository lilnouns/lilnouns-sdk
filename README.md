# LilNouns SDK

[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/lilnouns/lilnouns-sdk?include_prereleases)](https://github.com/lilnouns/lilnouns-sdk/releases)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/lilnouns/lilnouns-sdk/build.yml)](https://github.com/lilnouns/lilnouns-sdk/actions/workflows/build.yml)
[![GitHub](https://img.shields.io/github/license/lilnouns/lilnouns-sdk)](https://github.com/lilnouns/lilnouns-sdk/blob/master/LICENSE)
[![X (formerly Twitter) Follow](https://img.shields.io/badge/follow-%40nekofar-ffffff?logo=x&style=flat)](https://x.com/nekofar)
[![Farcaster (Warpcast) Follow](https://img.shields.io/badge/follow-%40nekofar-855DCD.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzIzIiBoZWlnaHQ9IjI5NyIgdmlld0JveD0iMCAwIDMyMyAyOTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01NS41ODY3IDAuNzMzMzM3SDI2My40MTNWMjk2LjI2N0gyMzIuOTA3VjE2MC44OTNIMjMyLjYwN0MyMjkuMjM2IDEyMy40NzkgMTk3Ljc5MiA5NC4xNiAxNTkuNSA5NC4xNkMxMjEuMjA4IDk0LjE2IDg5Ljc2NDIgMTIzLjQ3OSA4Ni4zOTI2IDE2MC44OTNIODYuMDkzM1YyOTYuMjY3SDU1LjU4NjdWMC43MzMzMzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMC4yOTMzMzUgNDIuNjhMMTIuNjg2NyA4NC42MjY3SDIzLjE3MzNWMjU0LjMyQzE3LjkwODIgMjU0LjMyIDEzLjY0IDI1OC41ODggMTMuNjQgMjYzLjg1M1YyNzUuMjkzSDExLjczMzNDNi40NjgyMiAyNzUuMjkzIDIuMiAyNzkuNTYyIDIuMiAyODQuODI3VjI5Ni4yNjdIMTA4Ljk3M1YyODQuODI3QzEwOC45NzMgMjc5LjU2MiAxMDQuNzA1IDI3NS4yOTMgOTkuNDQgMjc1LjI5M0g5Ny41MzMzVjI2My44NTNDOTcuNTMzMyAyNTguNTg4IDkzLjI2NTEgMjU0LjMyIDg4IDI1NC4zMkg3Ni41NlY0Mi42OEgwLjI5MzMzNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMzQuODEzIDI1NC4zMkMyMjkuNTQ4IDI1NC4zMiAyMjUuMjggMjU4LjU4OCAyMjUuMjggMjYzLjg1M1YyNzUuMjkzSDIyMy4zNzNDMjE4LjEwOCAyNzUuMjkzIDIxMy44NCAyNzkuNTYyIDIxMy44NCAyODQuODI3VjI5Ni4yNjdIMzIwLjYxM1YyODQuODI3QzMyMC42MTMgMjc5LjU2MiAzMTYuMzQ1IDI3NS4yOTMgMzExLjA4IDI3NS4yOTNIMzA5LjE3M1YyNjMuODUzQzMwOS4xNzMgMjU4LjU4OCAzMDQuOTA1IDI1NC4zMiAyOTkuNjQgMjU0LjMyVjg0LjYyNjdIMzEwLjEyN0wzMjIuNTIgNDIuNjhIMjQ2LjI1M1YyNTQuMzJIMjM0LjgxM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=&style=flat)](https://warpcast.com/nekofar)
[![Donate](https://img.shields.io/badge/donate-nekofar.crypto-a2b9bc?logo=ko-fi&logoColor=white)](https://ud.me/nekofar.crypto)

> [!WARNING]
> Please note that the project is currently in an experimental phase and it is subject to significant changes as it
> progresses.

### Description

LilNouns SDK is a TypeScript library that allows for type-safe interaction and data retrieval from LilNouns contracts.

### Installation

To install `lilnouns-sdk`, you need to configure your project to use GitHub Packages Registry for the `@lilnouns` scope.
This is done by modifying the `.npmrc` file in your project. If you don't have this file, create one in the root of your
project.

1. **Configure `.npmrc` File:**

   Add the following lines to your `.npmrc` file:

   ```plaintext
   @lilnouns:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

   Replace `YOUR_GITHUB_TOKEN` with a personal access token from GitHub. This token should have at least
   the `read:packages` scope. This step is necessary for authentication with the GitHub Packages Registry.

2. **Install `lilnouns-sdk`:**

   After configuring your `.npmrc`, you can install the SDK using `pnpm`:

   ```bash
   pnpm add @lilnouns/lilnouns-sdk
   ```

   This command will download and install the `lilnouns-sdk` package from the GitHub Packages Registry into your
   project.

> [!NOTE]
>
> - You should be reminded not to commit your personal access tokens to public repositories for security reasons.
> - For CI/CD pipelines, the GitHub token should be set as an environment variable or through the CI/CD platform's secrets
>   management feature.

### Usage

Here is a basic example of how to use `lilnouns-sdk`:

```javascript
import { getToken } from '@lilnouns/lilnouns-sdk/actions'

console.log(getToken())
```

## Contributing

Contributions to `lilnouns-sdk` are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for
details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the Apache License Version 2.0 - see the [LICENSE](LICENSE) file for details.
