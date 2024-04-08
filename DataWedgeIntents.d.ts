declare module "DataWedgeIntents" {

  export interface ExtrasObject {
    // TODO - Define the structure of the extras object
  }

  export interface Filter {
    // TODO - Define the structure of the filter object
  }

  export function sendIntent(action: string, parameterValue: any): void;
  export function sendBroadcastWithExtras(extrasObject: ExtrasObject): void;
  export function registerBroadcastReceiver(filter: Filter): void;
}
