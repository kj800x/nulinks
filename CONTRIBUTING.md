# Introduction
Thank you for considering contributing to NULinks. It's people like you that ensure the quality of the app for all Northeastern students.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

NULinks is an open source project and we love to receive contributions from our community. We welcome contributions and suggestions of any kind, although we may not be able to feasibly implement all of them. Since not everyone uses every Northeastern page, we rely on user reports to know when a link has gone bad, needs to be removed, or if we need a new link.

# Ground Rules
## Responsibilities
* Be welcoming to newcomers and encourage diverse new contributors from all backgrounds.
* Ensure that all GitHub checks pass on your pull request.
* Create issues for any major changes and enhancements that you wish to make. Discuss things transparently and get community feedback.
* Keep in mind that we want this to be useful for *all* students. Avoid adding links that would only be useful to very few people, but if in doubt, file an issue and we can discuss it.
* Try to use functional programming practices whenever possible, while still writing in a style that is welcoming to less experienced programmers.

## What This Project Is and Isn't
* This project IS a chrome extension and a webpage that can be used instead of the "Services and Links" feature of myNortheastern.
* This project IS welcome to community suggestions and thrives on knowing what links are actually useful to Northeastern students. Unoffical, student run sites that provide a service to NEU students (e.g. SearchNEU), or sites not directly affiliated with NEU but are used or endosed by faculty (e.g. Piazza) are welcome. If you think a site should be here, chances are you're right.
* This project ISN'T a complete replacement for myNortheastern. Notably, this project will NOT deal with Northeastern's SSO auth, so any features that depend on that auth will be closed as out of scope for the project.

# Your First Contribution
Unsure where to begin contributing to NULinks? Here's a few ideas:
* Write up issues for any missing links you use often. We would be happy to include these. If you feel comfortable editing `data.js`, feel free to make the changes yourself and open a pull request.
* Brainstorm ideas for features. If you have ideas for features which we could add, we'd love to hear them. Keep in mind that this project will not integration with Northeastern SSO, so any features that require auth will be closed.

Working on your first Pull Request? You can learn how from this *free* series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first :smile_cat:

# Getting Started
### For something that is bigger than a one or two line fix:
1. Create your own fork of the code
2. Do the changes in your fork
3. If you like the change and think the project could use it:
   * Be sure you have followed the code style for the project. Run `npm run lint` to confirm that your code passes Prettier. If it doesn't, you can run `npm run prettier:write` to fix it.
   * Ensure that tests pass and the code builds. `npm test` in the root directory and `npm run build` in nulinks-site will confirm these.

### For smaller fixes or changes to `data.js`
Feel free to make changes with the GitHub UI and open a PR directly.

Note: `data.js` is tested using a snapshot test by searching using every letter of the alphabet, along with some important search terms. This is to add additional visiblity to changes that have a significant effect on the search results. If the tests check fails on your PR, decide if you agree with the snapshot change and update the snapshot accordingly.

# How to File Issues
### Security Issues
If you find a security vulnerability, do NOT open an issue. Email kevin@coolkev.com instead.

In order to determine whether you are dealing with a security issue, ask yourself these two questions:
* Can I access something that's not mine, or something I shouldn't have access to?
* Can I change something for other people?

If the answer to either of those two questions are "yes", then you're probably dealing with a security issue. Note that even if you answer "no" to both questions, you may still be dealing with a security issue, so if you're unsure, just email me.

### Bug Reports
When filing an issue, use the issue template provided by the GitHub UI to help provide all the needed information.

### Features.
If you find yourself wishing for a feature that doesn't exist in NULinks, you are probably not alone. Open an issue on our issues list on GitHub which describes the feature you would like to see, why you need it, and how it should work. There is an issue template for feature requests on the GitHub UI which will help when formulating your feature request.

Keep in mind the goals of the project to determine if your feature is in line with them (see the section `What This Project Is and Isn't`).

If the feature will take a non-trivial amount of time to implement, *please* file an issue to discuss first. We don't want your time going to waste on a feature which won't be accepted.

# Code review process
Once your PR is ready for review, feel free to mention @kj800x and I will take a look when I get a chance (definitely within a week, probably less for simpler changes). Please hold me accountable and send me another ping if I don't respond within this timeframe.

After feedback is given, you are expected to justify & discuss and/or make fixes within a week. If the PR becomes stale, it is up to the project contributors' discretion to either close the PR or finish the changes themselves.
