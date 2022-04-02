import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Notification, NotificationService, PushContainerComponent} from '@sdsolutions/particle-ng';
import {endOfWeek, startOfWeek} from 'date-fns';
import {AllComponents} from "../../models/all-components.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

  readonly console = console;

  /**
   * App Title
   */
  title = 'app';

  /**
   * List of icons (name/class pairs)
   */
  readonly icons: Array<{ class: string }> = [
    { class: 'fa-address' },
    { class: 'fa-alpha-text' },
    { class: 'fa-checkbox' },
    { class: 'fa-date' },
    { class: 'fa-date-range' },
    { class: 'fa-divider' },
    { class: 'fa-document-upload' },
    { class: 'fa-dropdown' },
    { class: 'fa-email' },
    { class: 'fa-existing-license' },
    { class: 'fa-fein' },
    { class: 'fa-group-pid' },
    { class: 'fa-group-member-pid' },
    { class: 'fa-html' },
    { class: 'fa-icon-header' },
    { class: 'fa-lab-pid' },
    { class: 'fa-license' },
    { class: 'fa-mmis-npi' },
    { class: 'fa-money' },
    { class: 'fa-multi-select' },
    { class: 'fa-npi' },
    { class: 'fa-numeric-text' },
    { class: 'fa-percent-slider' },
    { class: 'fa-person-name' },
    { class: 'fa-pharmacy-pid' },
    { class: 'fa-phone' },
    { class: 'fa-physical-address' },
    { class: 'fa-physician-license' },
    { class: 'fa-physician-pid' },
    { class: 'fa-pid' },
    { class: 'fa-radio-buttons' },
    { class: 'fa-reply' },
    { class: 'fa-routing-number' },
    { class: 'fa-ssn' },
    { class: 'fa-sidebar-close' },
    { class: 'fa-sidebar-open' },
    { class: 'fa-text-area' },
    { class: 'fa-text-box' }
  ];

  /**
   * Object to be used to pop a dialog
   */
  obj: any;

  obj2: any;
  obj3: any;
  obj4: any;
  obj5: any;
  obj6: any;
  obj7: any;

  /**
   * Push Container component.
   */
  @ViewChild('pushContainerLeft')
  pushContainerLeft: PushContainerComponent = {} as PushContainerComponent;

  text = '';

  value = ['value', 'value6', 'value4'];

  icon = 'fas fa-car';

  dropdownValue = 'lightPurple';

  multiSelectValue = ['chicken', 'cheese', 'fish'];

  datePickerValue = new Date();

  weekPickerValue = { start: startOfWeek(new Date()), end: endOfWeek(new Date()) };

  textEditorValue = '<p>This is some rich text</p>';

  colorPickerValue = '#44ff55';

  sliderValue = 69;

  allComponents = new AllComponents();

  lastFragment = '';
  timeoutAmount = 600;

  /**
   * Constructor
   */
  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe({
      next: fragment => {
        if (fragment != this.lastFragment) {
          this.lastFragment = fragment as string;
          setTimeout( () => {
            if (fragment && document.getElementById(fragment) != null) {
              (document.getElementById(fragment) as HTMLElement).scrollIntoView({block: 'start', behavior: 'smooth'});
              this.timeoutAmount = 0;
            }
          }, this.timeoutAmount);
        }
      }
    });
  }

  /**
   * Icon Selected event handler.
   *
   * @param event
   */
  iconSelected(event: any): void {
    console.log(event.value);
  }

  /**
   * Icon select opened event handler
   */
  iconSelectOpened(): void {
    console.log('Icon select opened');
  }

  /**
   * Icon select closed event handler
   */
  iconSelectClosed(): void {
    console.log('Icon select closed');
  }

  /**
   * Rich text editor text changed event handler
   * @param event
   */
  handleEditorTextChange(event: any): void {
    const { textValue } = event;
    console.log('Editor is empty:');
    console.log(
      !(textValue as string)?.replace(/\s+/g, '')?.length
    );
  }

  onPushContainerClose(): void {
    console.log('Push container closed.');
  }

  addNotification(severity: 'success' | 'warn' | 'error' | 'info'): void {
    const notification = { severity } as Notification;

    switch (severity) {
      case 'success':
        notification.summary = 'Success Message';
        notification.detail = 'This is a success message!';
        break;
      case 'warn':
        notification.summary = 'Warning Message';
        notification.detail = 'This is a warning message!';
        break;
      case 'error':
        notification.summary = 'Error Message';
        notification.detail = 'This is an error message!';
        break;
      case 'info':
        notification.summary = 'Info Message';
        notification.detail = 'This is an info message!';
        break;
    }

    this.notificationService.add(notification);
  }

}
