import { DynamicGameConfig } from './model';
import GameManager from '../../model/game/GameManager';
import InstallationRules from '../installing/InstallationRules';
import { MOD_LOADER_VARIANTS } from 'src/r2mm/installing/profile_installers/ModLoaderVariantRecord';
import ModLoaderPackageMapping from 'src/model/installing/ModLoaderPackageMapping';
import { PackageLoader } from 'src/model/installing/PackageLoader';
import * as fs from 'fs';
import * as path from 'path';

export default class CustomGamesApplicator {

    public static loadAndApply() {
        try {
            let customGamesPath = path.join(<string>process.env.PORTABLE_EXECUTABLE_DIR, "custom");

            // let customGamesPath = "E:\\Dev\\github\\r2modmanPlus\\custom";
            console.log("path: " + customGamesPath);
            if (!customGamesPath || !fs.existsSync(customGamesPath)) return;

            const files = fs.readdirSync(customGamesPath);
            for (let file of files) {
                if (file.endsWith(".json")) {
                    let filePth = path.join(customGamesPath, file);
                    let obj: DynamicGameConfig = JSON.parse(fs.readFileSync(filePth).toString());
                    const imgpath = filePth.replace(".json", ".png");
                    if (fs.existsSync(imgpath)) {
                        obj.gameImage = "data:image/jpeg;charset=utf-8;base64," + fs.readFileSync(imgpath).toString("base64");
                    } else {
                        obj.gameImage = "missing.jpg";
                    }
                    console.log(obj);
                    CustomGamesApplicator.applyConfig(obj);
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    public static apply(cfgs: DynamicGameConfig[]) {
        for (let cfg of cfgs) {
            InstallationRules.RULES = [...InstallationRules.RULES, cfg.installationRule];
            MOD_LOADER_VARIANTS[cfg.internalFolderName] = cfg.loaderVariants.map(v => {
                return new ModLoaderPackageMapping(v.packageName, v.rootFolder, PackageLoader[v.packageLoader])
            })
            GameManager.loadDynamic(cfg);
        }
    }

    public static applyConfig(cfg: DynamicGameConfig) {
        InstallationRules.RULES = [...InstallationRules.RULES, cfg.installationRule];
        MOD_LOADER_VARIANTS[cfg.internalFolderName] = cfg.loaderVariants.map(v => {
            return new ModLoaderPackageMapping(v.packageName, v.rootFolder, PackageLoader[v.packageLoader])
        })
        GameManager.loadDynamic(cfg);
    }
}
