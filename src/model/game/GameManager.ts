import Game from '../../model/game/Game';
import StorePlatformMetadata from '../../model/game/StorePlatformMetadata';
import { StorePlatform } from '../../model/game/StorePlatform';
import { GameSelectionDisplayMode } from '../../model/game/GameSelectionDisplayMode';
import { GameInstanceType } from '../../model/game/GameInstanceType';
import { PackageLoader } from '../../model/installing/PackageLoader';
import * as path from 'path';
import { DynamicGameConfig } from '../../r2mm/custom/model';

export default class GameManager {

    private static _activeGame: Game;

    private static _gameList = [
        new Game('Risk of Rain 2', 'RiskOfRain2', 'RiskOfRain2',
            'Risk of Rain 2', ['Risk of Rain 2.exe'], 'Risk of Rain 2_Data',
            'https://thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "632360")], "RiskOfRain2.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["ROR2"]),

        new Game('Thunderstore Dev', 'ThunderstoreDev', 'ThunderstoreBeta',
            'Risk of Rain 2', ['Risk of Rain 2.exe'], 'Risk of Rain 2_Data',
            'https://thunderstore.dev/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "632360")], "ThunderstoreBeta.jpg",
            GameSelectionDisplayMode.HIDDEN, GameInstanceType.GAME, PackageLoader.BEPINEX, ["TS Dev"]),

        new Game('Risk of Rain 2 Dedicated Server', 'RiskOfRain2', 'RiskOfRain2Server',
            'Risk of Rain 2 Dedicated Server', ['Risk of Rain 2.exe'], 'Risk of Rain 2_Data',
            'https://thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1180760")], "RiskOfRain2.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.SERVER, PackageLoader.BEPINEX, ["ROR2"]),

        new Game('Dyson Sphere Program', 'DysonSphereProgram', 'DysonSphereProgram',
            'Dyson Sphere Program', ['DSPGAME.exe'], 'DSPGAME_Data',
            'https://dsp.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1366540")], "DysonSphereProgram.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["DSP"]),

        new Game('Valheim', 'Valheim', 'Valheim',
            'Valheim', ['valheim.exe', 'valheim.x86_64'], 'valheim_Data',
            'https://valheim.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "892970")], "Valheim.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game('Valheim Dedicated Server', 'Valheim', 'ValheimServer',
            'Valheim dedicated server', ['valheim_server.exe', 'valheim_server.x86_64'], 'valheim_server_Data',
            'https://valheim.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "896660")], "Valheim.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.SERVER, PackageLoader.BEPINEX),

        new Game('GTFO', 'GTFO', 'GTFO',
            'GTFO', ['GTFO.exe'], 'GTFO_Data',
            'https://gtfo.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "493520")], "GTFO.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game('Outward', 'Outward', 'Outward',
            'Outward', ['Outward.exe'], 'Outward_Data',
            'https://outward.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "794260"),
                new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "Viola"),
                new StorePlatformMetadata(StorePlatform.OTHER)
            ], "Outward.jpg", GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game('TaleSpire', 'TaleSpire', 'TaleSpire',
            'TaleSpire', ['TaleSpire.exe'], 'TaleSpire_Data',
            'https://talespire.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "720620")], "TaleSpire.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["TS"]),

        new Game("H3VR", "H3VR", "H3VR",
            "H3VR", ["h3vr.exe"], "h3vr_Data",
            "https://h3vr.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "450540")], "H3VR.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["Hot Dogs, Horseshoes & Hand Grenades", "Hot Dogs, Horseshoes and Hand Grenades"]),

        new Game("ROUNDS", "ROUNDS", "ROUNDS",
            "ROUNDS", ["Rounds.exe"], "Rounds_Data",
            "https://rounds.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1557740")], "ROUNDS.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game("Mechanica", "Mechanica", "Mechanica",
            "Mechanica", ["Mechanica.exe"], "Mechanica_Data",
            "https://mechanica.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1226990")], "Mechanica.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game("Muck", "Muck", "Muck",
            "Muck", ["Muck.exe", "Muck.x86_64"], "Muck_Data",
            "https://muck.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1625450")], "Muck.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game("BONEWORKS", "BONEWORKS", "BONEWORKS",
            path.join("BONEWORKS", "BONEWORKS"), ["BONEWORKS.exe", "Boneworks_Oculus_Windows64.exe"], "BONEWORKS_Data",
            "https://boneworks.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "823500"), new StorePlatformMetadata(StorePlatform.OCULUS_STORE)], "BONEWORKS.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.MELON_LOADER, ["BW"]),

        new Game("Lethal League Blaze", "LethalLeagueBlaze", "LethalLeagueBlaze",
            "LLBlaze", ["LLBlaze.exe", "LLBlaze.x86_64", "LLBlaze.x86", "LLBlaze.app"], "LLBlaze_Data",
            "https://lethal-league-blaze.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "553310")], "LethalLeagueBlaze.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["LLB"]),

        new Game("Timberborn", "Timberborn", "Timberborn",
            "Timberborn", ["Timberborn.exe"], "Timberborn_Data",
            "https://timberborn.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1062090"), new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "972a4ca2631e43b4ba7bc3b7586ad8c4"), new StorePlatformMetadata(StorePlatform.OTHER)], "Timberborn.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["TB"]),

        new Game("TABS", "TABS", "TotallyAccurateBattleSimulator",
            "Totally Accurate Battle Simulator", ["TotallyAccurateBattleSimulator.exe"], "TotallyAccurateBattleSimulator_Data",
            "https://totally-accurate-battle-simulator.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "508440"), new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "Driftfish")], "TotallyAccurateBattleSimulator.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["Totally Accurate Battle Simulator"]),

        new Game("Nickelodeon All‑Star Brawl", "NASB", "NASB",
            "Nickelodeon All-Star Brawl", ["Nickelodeon All-Star Brawl.exe"], "Nickelodeon All-Star Brawl_Data",
            "https://nasb.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1414850")], "NASB.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["Nickelodeon All-Star Brawl", "NASB"]),

        new Game("Inscryption", "Inscryption", "Inscryption",
            "Inscryption", ["Inscryption.exe"], "Inscryption_Data",
            "https://inscryption.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1092790"), new StorePlatformMetadata(StorePlatform.OTHER)], "Inscryption.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game("Starsand", "Starsand", "Starsand",
            "Starsand", ["Starsand.exe"], "Starsand_Data",
            "https://starsand.thunderstore.io/api/v1/package/", "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1380220"), new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "a774278c0813447c96a76b053cbf73ff")], "Starsand.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game('Cats are Liquid - A Better Place', 'CatsAreLiquidABP', 'CatsAreLiquidABP',
            'Cats are Liquid - A Better Place', ['CaL-ABP-Windows.exe', "CaL-ABP-Linux.x86_64", 'CaL-ABP-macOS.app'], 'CaL-ABP-Windows_Data',
            'https://cats-are-liquid.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "1188080"),
                new StorePlatformMetadata(StorePlatform.OTHER)
            ], "CatsAreLiquidABP.jpg", GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX,
            ['calabp', 'cal', 'abp']),


        new Game('Potion Craft', 'PotionCraft', 'PotionCraft',
            'Potion Craft', ['Potion Craft.exe'], 'Potion Craft_Data',
            'https://potion-craft.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1210320")], 'PotionCraft.jpg',
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX,
            ['pc']),

        new Game('Nearly Dead', 'NearlyDead', 'NearlyDead',
            'Nearly Dead', ['Nearly Dead.exe'], 'Nearly Dead_Data',
            'https://nearly-dead.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1268900")], 'NearlyDead.png',
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX,
            ['nd']),

        new Game('AGAINST', 'AGAINST', 'AGAINST',
            'AGAINST_steam', ['AGAINST.exe'], "AGAINST_Data",
            'https://against.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1584840")], "AGAINST.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, []),

        new Game('Rogue Tower', 'RogueTower', 'RogueTower',
            'Rogue Tower', ['Rogue Tower.exe'], "Rogue Tower_Data",
            'https://rogue-tower.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1843760")], "RogueTower.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ['rt']),

        new Game('House of the Dying Sun', 'HOTDS', 'HOTDS', 'DyingSun',
            ['dyingsun.exe'], 'dyingsun_Data',
            'https://hotds.thunderstore.io/api/v1/package/', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, '283160')], "HOTDS.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ['hotds'])

    ];

    static loadDynamic(cfg: DynamicGameConfig) {
        let platforms = cfg.platforms.map(p => {
            return new StorePlatformMetadata(<StorePlatform>p.platform, p.identifier);
        });

        this._gameList.push(new Game(cfg.displayName, cfg.internalFolderName, cfg.settingsIdentifier,
            cfg.steamFolderName, cfg.exeName, cfg.dataFolderName,
            cfg.tsUrl, cfg.exclusionsUrl, platforms, cfg.gameImage,
            GameSelectionDisplayMode.VISIBLE, <GameInstanceType>cfg.instanceType, PackageLoader[cfg.packageLoader])
        );
    }

    static get activeGame(): Game {
        return this._activeGame;
    }

    static get gameList(): Game[] {
        return [...this._gameList];
    }

    static set activeGame(game: Game) {
        this._activeGame = game;
    }

    // Return RiskOfRain2 game as base startup to be used for settings load.
    public static unsetGame(): Game {
        return this._gameList.find(value => value.internalFolderName === "RiskOfRain2")!;
    }
}
