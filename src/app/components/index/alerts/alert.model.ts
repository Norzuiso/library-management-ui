export class Alert {
  id: string = "";
  type: AlertType = AlertType.Info;
  message: string = "Default Message";
  autoClose: boolean = true;
  keepAfterRouteChange: boolean = true;
  fade: boolean = true;

  constructor(init?:Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType{
  Success,
  Error,
  Info,
  Warning
}

export class AlertOptions {
  id?: string;
  autoClose?: boolean;
  keepAfterRouteChange?: boolean;
}
