# NULinks [![Build Status](https://github.com/kj800x/nulinks/workflows/CI/badge.svg)](https://github.com/kj800x/nulinks/actions)

#### MyNortheastern but faster and easier!

NULinks is a [chrome extension](https://chrome.google.com/webstore/detail/gfbdcgkehhkgfehdilpmldkeihiojjak) and [website](https://nulinks.kj800x.com) to enable Northeastern students to quickly access Northeastern University websites. The website also serves as a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/), so it can be easily installed onto the home screen of Android and iOS devices.

NULinks is unofficial and run by students.

<p align="middle">
  <img src="https://lh3.googleusercontent.com/8LpQTCXUNaHMl3ReWlkIkGGd_WMdue18MOL2OQBJe5LynqKzcA9T7fVFxo3Pb1FfAaOliUpthw=w640-h400-e365" width="400" alt="NULinks Browser Extension" /> 
  <img src="https://lh3.googleusercontent.com/CiIj7vI-a8LUA4WAXqy0njZAzgK4g7ekMjpXGwqxyTvc9ZAKmjEzQTNMPpbMvKrRwPljSRie_g=w640-h400-e365" width="400" alt="NULinks Website" />
</p>

## Usage 
Users activate the extension by typing "nu" and then space or tab into the browser's address bar. Once activated, they can quickly search for any of the Northeastern sites, such as Blackboard, Husky Mail, NUCareers, NU Dining, XFINITY On-Campus, Student Employment, PaperCut and many more. The extension specific logic lives in the `nulinks-extension` folder.

Clicking on the extension's icon or activating the extension and then immediately pressing enter without searching for anything will bring users to the extension's detailed search page where they can scroll through the results and see longer descriptions. This webpage is build from the React app that lives in `nulinks-site`. This app is also deployed to the public url: https://nulinks.kj800x.com

The searching logic (which determines which results show in what order for which search terms), and the raw data for the links lives in the `nulinks-common` folder and is automatically pulled into the builds for the site and extension.

## Automation
### Test (Continuous Integration)
Any commit that is pushed to the repo has these checks run on it:
* The jest tests for `nulinks-common` pass.
* The React build for `nulinks-site` succeeds.
* Required files pass Prettier.

### Deploy (Continuous Delivery)
Any commit to master will automatically trigger the following deploys:
* `nulinks-site` is built and deployed to the `nulinks.kj800x.com` S3 bucket.
* `nulinks-extension` is built and deployed to the Chrome Web Store.

## Contributing
Contributions of any kind are welcome. For major changes, please open an issue first to discuss what you would like to change.

We rely on users to know what links you actually want and are actually useful to you, so please open an issue if you have any ideas or suggestions for the links.

For more details, please read our [Contributing Guidelines](https://github.com/kj800x/nulinks/blob/master/CONTRIBUTING.md).

## License
NULinks is [MIT Licensed](https://github.com/kj800x/nulinks/blob/master/LICENSE).
