# Run Mobile Tests with LambdaTest Device SDK on TestMu AI (Formerly LambdaTest)

<p align="center">
  <a href="https://www.testmuai.com/"><img src="https://img.shields.io/badge/MADE%20BY%20TestMu%20AI-000000.svg?style=for-the-badge&labelColor=000" alt="Made by TestMu AI"></a>
  <a href="https://www.testmuai.com/real-device-testing"><img src="https://img.shields.io/badge/Real%20Device-SDK-blue.svg?style=for-the-badge&labelColor=000000" alt="Real Device SDK"></a>
  <a href="https://community.testmuai.com/"><img src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&labelColor=000000" alt="Community"></a>
</p>

## Getting Started

[TestMu AI](https://www.testmuai.com/) (Formerly LambdaTest) is the world's first full-stack AI Agentic Quality Engineering platform that empowers teams to test intelligently, smarter, and ship faster. Built for scale, it offers a full-stack testing cloud with 10K+ real devices and 3,000+ browsers. With AI-native test management, MCP servers, and agent-based automation, TestMu AI supports Selenium, Appium, Playwright, and all major frameworks. 

With TestMu AI (Formerly LambdaTest), you can embed real device testing directly into your applications using the Device SDK iframe integration. This sample shows how to configure the LambdaTest Device SDK to run on the TestMu AI cloud.

- [Sign up on TestMu AI](https://www.testmuai.com/register/) (Formerly LambdaTest).
- Follow the [TestMu AI Documentation](https://www.testmuai.com/support/docs/) for the full setup walkthrough.

### Prerequisites

- Node.js (LTS version recommended)
- A TestMu AI (Formerly LambdaTest) account with username and API key from the Accounts Page
- `serve` npm package for running the frontend (`npm i -g serve`)

### Setup

Clone the repository:

```bash
git clone https://github.com/LambdaTest/lambdatest-device-sdk.git
cd lambdatest-device-sdk
```

Get your username and API key from the Accounts Page and update the `username` and `apiKey` variables in `index.js`.

Start the backend server:

```bash
node index.js
```

Start the frontend:

```bash
npm i -g serve
serve . -p 4000
```

Open http://localhost.lambdatest.com:4000 to start testing.

### Run tests

Generate a one-time session token using your credentials:

```bash
curl -u <USERNAME>:<ACCESS_KEY> -i -H 'Accept:application/json' https://manual-api.lambdatest.com/tests/generate-test-session-token
```

Use the returned `testSessionToken` to embed a device in your app via iframe:

```javascript
<iframe src={"https://app.lambdatest.com?sessionToken=<TEST_SESSION_TOKEN>&device=<DEVICE_NAME>&osVersion=<OS_VERSION>&appUrl=" + appUrl} />
```

Key iframe query parameters:

| Key | Type | Description |
|-----|------|-------------|
| `appUrl` | String | URL or path to download and launch the app |
| `device` | String | Device name, e.g. `"iPhone 14 Pro Max"` |
| `deviceType` | String | `"emulator"` for Android, `"simulator"` for iOS |
| `osVersion` | String | OS version, e.g. `"16.2"` |
| `sessionToken` | String | One-time token from the generate-token API |

Get the list of available devices:

```bash
curl --location --request GET 'https://manual-api.lambdatest.com/ltms/device/list?deviceType=emulator' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>' \
--data '{}'
```

Stop a test session:

```bash
curl --location --request PUT 'https://manual-api.lambdatest.com/tests/stop' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>' \
--data '{}'
```

### Local testing with TestMu AI Tunnel

To test locally hosted apps, set up the TestMu AI tunnel. OS-specific guides:

- [Local Testing on Windows](https://www.testmuai.com/support/docs/local-testing-for-windows/)
- [Local Testing on macOS](https://www.testmuai.com/support/docs/local-testing-for-macos/)
- [Local Testing on Linux](https://www.testmuai.com/support/docs/local-testing-for-linux/)

## Contributions

Contributions are welcome. Open an issue to discuss your idea before submitting a pull request. When reporting bugs, include your Node.js version, OS, and Angular CLI version.

## TestMu AI (Formerly LambdaTest) Community

Connect with testers and developers in the [TestMu AI Community](https://community.testmuai.com/). Ask questions, share what you are building, and discuss best practices in test automation and DevOps.
  
## TestMu AI (Formerly LambdaTest) Certifications

Earn free [TestMu AI Certifications](https://www.testmuai.com/certifications/) for testers, developers, and QA engineers. Validate your skills in Selenium, Cypress, Playwright, Appium, Espresso and more. Industry-recognized, shareable on LinkedIn, and built by practitioners, not marketers.

## Learning Resources by TestMu AI (Formerly LambdaTest)

Learn modern testing through tutorials, guides, videos, and weekly updates:

* [TestMu AI Blog](https://www.testmuai.com/blog/)
* [TestMu AI Learning Hub](https://www.testmuai.com/learning-hub/)
* [TestMu AI on YouTube](https://www.youtube.com/@TestMuAI)
* [TestMu AI Newsletter](https://www.testmuai.com/newsletter/)
  
## LambdaTest is Now TestMu AI

On **January 12, 2026**, [LambdaTest evolved to TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/), the world's first fully autonomous **Agentic AI Quality Engineering Platform**.

Same team. Same infrastructure. Same customer accounts. All existing LambdaTest logins, scripts, capabilities, and integrations continue to work without change.

ð Find the new home for [LambdaTest](https://www.testmuai.com).

### How LambdaTest Evolved into TestMu AI

In 2017, we launched LambdaTest with a simple mission: make testing fast, reliable, and accessible. As LambdaTest grew, we expanded into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the full depth of the testing lifecycle.

As software development entered the AI era, testing had to evolve, too. We rebuilt the architecture to be AI-native from the ground up, with autonomous agents that **plan, author, execute, analyze, and optimize tests** while keeping humans in the loop. The platform integrates with your repos, CI, IDEs, and terminals, continuously learning from every code change and development signal.

That evolution earned a new name: **TestMu AI**, built for an AI-first future of quality engineering. TestMu is not a new name for us. It is the name of our annual community conference, which has brought together 100,000+ quality engineers to discuss how AI would reshape testing, long before that became an industry norm. 

What started as a high-performance cloud testing platform has transformed into an AI-native, multi-agent system powering a connected, end-to-end quality layer. That evolution defined a new identity: LambdaTest evolved into TestMu AI, built for an AI-first future of quality engineering.

## Support

Got a question? Email [support@testmuai.com](mailto:support@testmuai.com) or chat with us 24x7 from our chat portal.
