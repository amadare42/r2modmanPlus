import VersionNumber from '../model/VersionNumber';

export default class ManagerInformation {
    public static VERSION: VersionNumber = new VersionNumber('3.1.27');
    public static IS_PORTABLE: boolean = false;
    public static APP_NAME: string = "Fork Mod Manager";
}
