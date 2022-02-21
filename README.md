# r2modman

[![Discord](https://img.shields.io/discord/727304496522461185?label=r2modman%20Discord&style=for-the-badge)](https://discord.gg/jE2zWHY)

[![GitHub](https://img.shields.io/github/license/ebkr/r2modmanPlus?color=orange&style=for-the-badge)](https://github.com/ebkr/r2modmanPlus)

| [Features](#features) | [What is a mod manager?](#what-is-a-mod-manager) | [Installing](#installing) | [Help](#help) | [Feedback and suggestions](#feedback-and-suggestions) | [Changelog](#changelog) | [Screenshots](#screenshots) |
|---|---|---|---|---|---|---|

## Fork differences

This for has hacked-in support for custom games. So as long as you provide necessary files with your game configuration, application doesn't need to be rebuilt to support them.
To add support for new game, create `custom` directory. There you should create 2 files:
- \[gamename].json _(custom game configuration. Refer to `src/r2mm/custom/model.ts` file for typings)
- \[gamename].png _(custom game icon)_

Custom game example:
```json
{
    "displayName": "For The King",
    "internalFolderName": "ForTheKing",
    "settingsIdentifier": "ForTheKing",
    "steamFolderName": "For The King",
    "exeName": ["FTK.exe"],
    "dataFolderName": "FTK_Data",
    "tsUrl": "https://localhost:44362/package",
    "exclusionsUrl": "https://localhost:44362/package/empty",
    "platforms": [{
      "platform": "Steam",
      "identifier": "527230"
    }],
    "instanceType": "Game",
    "packageLoader": "BEPINEX",
    "loaderVariants": [{
      "packageName": "bbepis-BepInExPack",
      "rootFolder": "BepInExPack",
      "packageLoader": "BEPINEX"
    }],
    "installationRule": {
      "gameName": "ForTheKing",
      "rules": [
        {
          "route": "BepInEx/plugins",
          "isDefaultLocation": true,
          "defaultFileExtensions": [".dll"],
          "trackingMethod": "SUBDIR",
          "subRoutes": []
        },
        {
          "route": "BepInEx/core",
          "defaultFileExtensions": [],
          "trackingMethod": "SUBDIR",
          "subRoutes": []
        },
        {
          "route": "BepInEx/patchers",
          "defaultFileExtensions": [],
          "trackingMethod": "SUBDIR",
          "subRoutes": []
        },
        {
          "route": "BepInEx/config",
          "defaultFileExtensions": [],
          "trackingMethod": "NONE",
          "subRoutes": []
        }
      ]
    }
  }
```


## Features
- Support for Risk of Rain 2, Dyson Sphere Program, Valheim, GTFO, Outward, TaleSpire, H3VR, ROUNDS, Mechanica, Muck, BONEWORKS,
Lethal League Blaze, Timberborn, Totally Accurate Battle Simulator, Nickelodeon All-Star Brawl, Inscryption, Starsand, and more.
- A clean user interface designed to make modding as simple as possible.
- Safer mod installation allowing you to play the game through Steam normally.
- Mod profiles to switch between different sets of mods quickly and easily.
- Export profiles to easily share both your mods and configs with friends.
- Download and install mods directly from the manager.
- View and update any outdated mods.
- Edit configs directly from the manager.
- Manager auto-updates.
- And more!

## What is a mod manager?
It's quite simple really, a mod manager is an application to make it easier to control which mods you have installed.

You can choose to update, enable/disable or even uninstall mods with a simple click, all whilst keeping it available on another profile.

## Installing

### First time installing
#### Windows
1. Click "Manual Download" on Thunderstore.
2. Inside the downloaded **.zip** file. Run the "r2modman Setup X.X.X.exe" (where X.X.X is the current version).
3. Follow the steps in the installer.

#### Linux
1. Click "Manual Download" on Thunderstore.
2. Inside the download **.zip** file there is an AppImage release.

**If you'd prefer to install platform specific builds then you can find them under the latest GitHub release on the ebkr/r2modmanPlus repository**

**Platform builds:**
 - deb
 - rpm
 - pacman
 - tar.gz

 _Problems with Linux builds should be reported in the [r2modman discord](https://discord.gg/jE2zWHY)._

### Updating
r2modman will automatically download any available updates whilst you use it.

If an update has been downloaded, it will be installed once you have closed the application.

## Help
### Manager errors:
1. Check the [wiki](https://github.com/ebkr/r2modmanPlus/wiki).
2. If you can't find the solution, join the community modding discord and ask for help in the appropriate channels.

### Mod errors:
1. Join the relevant community modding discord and ask for help in the appropriate channels.

## Feedback and suggestions
It's encouraged to provide as much feedback as you'd like, and fully open to criticism.

Suggestions are welcome and there are already some suggestions that have made it in to the manager!
From small features such as always-expanded cards, all the way to larger features such as code-based profile exports.

The only thing you have to consider when suggesting a feature is the impact it will have on users who don't have a lot of experience with computers.

## Changelog
### (3.1.26 ... 3.1.27)
- Added several supported games:
  - Cats are Liquid - A Better Place.
  - Potion Craft.
  - Nearly Dead.
  - AGAINST.
  - Rogue Tower.
  - House of the Dying Sun.
- You can now change game from the profile selection screen.
- You may specify an export directory for profile file exports.
- EGS game directories are now auto resolved.
- Potentially resolved directory scanning issues on Linux.
- Slider added to the config editor when tweaking numerical range values (credit @MSchmoecker).
- Significantly reduced disk writes on game launch.
- Mod exclusion list will fallback should a connection to the list fail.
- Added support for NASB movesets.
- Other fixes.

### 3.1.25
- Added Nickelodeon All-Star Brawl support.
- Added Inscryption support.
- Added Starsand support.
- Configs can now be opened directly (thanks @MSchmoecker)
- Mods installed using the state-based format can now be disabled correctly. (Sideloader and BONEWORKS mods).

### (3.1.22 ... 3.1.24)
- Fixed enable/disable issue when no monomod folder is present.
- Fixed bugged profile installations.
- Fixed issue with disabling.

## Screenshots

Game selection

![](https://i.imgur.com/mmzY9xQ.png)

Installed mod view

![](https://i.imgur.com/d7w4qEl.png)

Downloadable mods

![](https://i.imgur.com/eoIAMMP.png)

Config editor

![](https://i.imgur.com/RT6HsxF.png)

Profiles

![](https://i.imgur.com/nLfNaQJ.png)

