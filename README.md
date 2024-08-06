# vmsACARS Configuration Template

---

## How to use this repo

Create a fork/clone it, and customize it however you want. Also keep an eye on this repo
for updates/changes. For distribution, create a zip file, ensuring that the `manifest.json`
is at the root. You can then upload it, and set the config URL in vmsacars to the URL
of that zip file. A barebones GitHub actions workflow is provided to automate this process.

### manifest.json

The `manifest.json` file contains the locations of the particular items ACARS looks for:

  - `aircraft` - The aircraft config Javascript files are
  - `rules` - The rules Javascript files are
  - `scripts` - the callback scripts are
  - `sounds` - Where the sound files are

---

## Distributing

### Using GitHub Actions

GitHub actions is configured to create a zipfile of this repo and then upload it to a location of your choice.
You can uncomment the appropriate section from the `.github/workflows/distribute.yml` file, and add the variables.
The `secrets.XXX` line - the `XXX` key and value need to be added under `Settings -> Secrets and variables -> Actions`

You're also not limited to the included actions, this is just a simple template. You can customize and enhance
it however you wish.

### Uploading manually

Create a zip file with all the contents of this directory.
