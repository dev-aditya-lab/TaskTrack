name: 🐞 Bug Report
description: Report a problem or unexpected behavior
title: "[Bug]: "
labels: [bug]
assignees: ''

body:
  - type: markdown
    attributes:
      value: |
        ## 🐛 Bug Report
        Please fill in the details below to help us fix it faster and better. Screenshots help a lot!

  - type: input
    id: environment
    attributes:
      label: 🌐 Environment
      description: What OS, browser, and device are you using?
      placeholder: Windows 11, Chrome 123, Desktop
    validations:
      required: true

  - type: textarea
    id: what-happened
    attributes:
      label: ❗ What happened?
      description: Describe the bug in detail.
      placeholder: Tell us what you were trying to do and what went wrong...
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: 🧪 Steps to Reproduce
      description: How can we reproduce the bug?
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. See error

  - type: textarea
    id: screenshots
    attributes:
      label: 📸 Screenshots or Video
      description: Upload media or paste image links.

  - type: dropdown
    id: priority
    attributes:
      label: 🔽 Priority
      description: How urgent is this issue?
      options:
        - 🔴 Critical (App crashes or data loss)
        - 🟠 High (Major functionality broken)
        - 🟡 Medium (Something's off, but not urgent)
        - 🟢 Low (Minor UI/UX issues)
    validations:
      required: true
