import { Command } from '@oclif/core';
export default class UploadDeb extends Command {
    static description: string;
    static flags: {
        root: import("@oclif/core/lib/interfaces").OptionFlag<string>;
    };
    run(): Promise<void>;
}
