export interface VersionInfo {
  name: string;
  version: string;
  dirty: boolean;
  hash: string;
  tag: string;
  time: Date;
}

export declare const version: VersionInfo;
