# Caido Security Policy

Thank you for helping make Caido safer for everyone.

## Reporting Security Issues

If you believe you've discovered a security vulnerability in Caido, please report it responsibly:

- **Do not** open public GitHub issues, discussions, or pull requests for security vulnerabilities.
- **Instead**, submit your report directly to our security team via email:
  
  `security` **[at]** `caido` **[dot]** `io`  
  *(Replace `[at]` with `@` and `[dot]` with `.`)*

### Plugin Vulnerabilities

If you discover a security vulnerability in a third-party plugin for Caido, please report it directly to the plugin author (e.g., via their GitHub Security Advisory page or repository contact). The plugin author is best equipped to triage and remediate vulnerabilities specific to their code.

---

## Information to Include

To help us investigate and triage effectively, please include as much detail as possible in your report:

- **Vulnerability type / classification** (e.g., memory corruption, RCE, CSRF, privilege escalation).
- **Target environment and configuration** (operating system, Caido version, specific settings).
- **Detailed step-by-step reproduction guide**.
- **Proof-of-concept (PoC) or exploit scripts** (where applicable).
- **Security impact and realistic threat model** (how this could be leveraged against a user).

---

## Scope & Exclusions

### Known Limitations: Plugin Environment
Due to the extensible design of Caido's plugin ecosystem, plugins execute with full access inside the user's local runtime. They can inherently:
- Read and write files accessible to the host user.
- Establish inbound/outbound network connections.
- Spawn child processes or execute binaries.

Reports that merely demonstrate that an installed plugin can perform actions granted by this execution model are considered **intended behavior** and will be marked as out of scope.

### General Exclusions
The following scenarios are considered **Not Applicable (N/A)**:
- Attacks requiring existing arbitrary code execution or root/admin privileges on the host system.
- Social engineering attacks directed against Caido maintainers or staff.
- Denial-of-service (DoS/DDoS) attacks against Caido web infrastructure or services.
- Vulnerabilities that depend on modified/tampered binaries or compromised runtime environments outside Caido's control.

---

## Response Expectations & Disclosure

- **Timeline:** We are a small team. While we do not have an SLA for triage, we review incoming reports promptly and prioritize high- and critical-severity issues.
- **Coordinated Disclosure:** We ask that you allow reasonable time for our team to remediate the vulnerability before publishing details or PoCs, and that you maintain confidentiality during the triage and patch cycle.

---

## Frequently Asked Questions (FAQ)

#### Do you offer a bug bounty or monetary reward?
No. Caido does not currently operate a paid bug bounty program. We deeply appreciate the research community's voluntary contributions to keeping Caido secure, and we are happy to publicly credit researchers in our release notes and advisories (with their permission).

#### Can Caido issue a CVE for my reported vulnerability?
CVE assignments depend on the affected component:
- **Desktop Application:** **Yes.** For vulnerabilities in distributed client software (the desktop binary/engine), we can coordinate and assign a CVE upon verification and patch release.
- **Cloud Platform & SaaS Services:** **No.** Fixes applied directly to our hosted cloud infrastructure and backend web services do not receive CVE identifiers, as users do not need to update or manage installed software to remediate the issue.
