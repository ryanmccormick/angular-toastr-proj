import { ToastrIcon } from './toastr-icon.model';

export class ToastrDefault {
  tapToDismiss: boolean;
  toastClass: string;
  containerId: string;
  debug: boolean;
  showMethod: string;
  showDuration: number;
  showEasing: string;
  onShown: any;
  hideMethod: string;
  hideDuration: number;
  hideEasing: string;
  onHidden: any;
  closeMethod: boolean;
  closeDuration: boolean;
  closeEasing: boolean;
  closeOnHover: boolean;
  extendedTimeOut: number;
  iconClasses: ToastrIcon;
  iconClass: string;
  positionClass: string;
  timeOut: number;
  titleClass: string;
  messageClass: string;
  escapeHtml: boolean;
  target: string;
  closeHtml: string;
  closeClass: string;
  newestOnTop: boolean;
  preventDuplicates: boolean;
  progressBar: boolean;
  progressClass: string;
  rtl: boolean;
}
