# LilNouns SDK

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
> - You should be reminded not to commit your personal access tokens to public repositories for security reasons.
> - For CI/CD pipelines, the GitHub token should be set as an environment variable or through the CI/CD platform's secrets
  management feature.

### Usage

Here is a basic example of how to use `lilnouns-sdk`:

```javascript
import { greet } from '@lilnouns/lilnouns-sdk';

console.log(greet('World')); // Output: Hello, World! Welcome to lilnouns-sdk.
```

## Contributing

Contributions to `lilnouns-sdk` are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for
details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the Apache License Version 2.0 - see the [LICENSE](LICENSE) file for details.
