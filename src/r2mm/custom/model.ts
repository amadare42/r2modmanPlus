import { StorePlatform } from '../../model/game/StorePlatform';
import { GameInstanceType } from '../../model/game/GameInstanceType';
import { PackageLoader } from '../../model/installing/PackageLoader';
import { CoreRuleType } from '../installing/InstallationRules';

export interface PlatformConfig {
    platform: StorePlatform[keyof StorePlatform];
    identifier: string;
}

export interface ModLoaderVariant {
    packageName: string;
    rootFolder: string;
    packageLoader: keyof typeof PackageLoader;
}

export interface DynamicGameConfig {
    displayName: string;
    internalFolderName: string;
    settingsIdentifier: string;
    steamFolderName: string;
    exeName: string[];
    dataFolderName: string;
    tsUrl: string;
    exclusionsUrl: string;
    platforms: PlatformConfig[];
    gameImage: string;
    // displayMode: keyof typeof GameSelectionDisplayMode,
    instanceType: GameInstanceType[keyof GameInstanceType],
    packageLoader: keyof typeof PackageLoader,
    additionalSearchStrings?: string[],
    installationRule: CoreRuleType,
    loaderVariants: ModLoaderVariant[]
}
