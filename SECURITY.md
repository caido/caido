# Caido Security Policy

Thank you for helping make Caido safer for everyone.

## Reporting Security Issues

If you believe you've discovered a security vulnerability in Caido, please report it responsibly. Here’s how to submit your report:

- **Do not** open public GitHub issues, discussions, or pull requests for security vulnerabilities.
- **Instead**, please report a vulnerability via the [Advisory Form](https://github.com/caido/caido/security/advisories)

### Plugin Vulnerabilities

If you discover a security vulnerability in a plugin for Caido, we recommend reporting it directly to the plugin’s author through their Github advisory page. Reporting the issue directly to the author ensures a faster response and resolution, as they are best equipped to address vulnerabilities specific to their plugin. 

### Information to Include
To help us respond effectively, please provide as much of the following information as possible:

- **Type of vulnerability** (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- **Configuration requirements** needed to reproduce the issue
- **Steps to reproduce** the vulnerability (please be as detailed as possible)
- **Proof-of-concept or exploit code** (if available)
- **Potential impact** (how the vulnerability could be exploited)

This information will help us investigate and resolve issues as quickly as possible.

### Known Issues

#### Plugin Capabilities

Due to the flexible nature of our plugin system, plugins in Caido have unrestricted access within the environment. This includes the ability to:
- Access files on your computer.
- Connect to the internet.
- Install or execute additional programs.

**Important Note**: This is a known limitation of the plugin system that cannot be fully restricted at this time. 
We encourage users to exercise caution and verify the source of any plugin before installation.

### Exclusions

Any reported vulnerability that requires an attacker to already have code execution on the host system will be considered not applicable (N/A). This includes issues that depend on compromised environments or systems outside of Caido’s control.

### Response Expectations

As a small team, we appreciate your patience and understanding. 

While we don’t have a guaranteed response timeline, we aim to review all security reports as quickly as possible. 

We prioritize severe vulnerabilities and will keep you updated on our progress as we investigate and work on any necessary fixes.

### Disclosure Policy

We kindly ask that you:
- Allow us time to resolve the issue before making any information public.
- Maintain confidentiality regarding the vulnerability while we work on a fix.

Thank you for your contribution to Caido’s security!
