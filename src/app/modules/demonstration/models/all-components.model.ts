import {ComponentDetails} from "./component-details.model";

export class AllComponents {
  slider = {
    name: 'Slider',
    icon: 'fa-sliders-h',
    description: '<p>The slider component allows for the user to select a number from a range using an HTML5 range input or through an HTML5 number input.</p>'
  } as ComponentDetails;

  colorPicker = {
    name: 'Color Picker',
    icon: 'fa-paintbrush',
    description: '<p>The color picker component is a simple way to choose/input a color in hexadecimal format. It offers a text input that allows for free entry in hexadecimal format along with a color picker for supported browsers. If the browser does not support the HTML5 color picker, it is replaced with a simple color swatch that acts as a preview of the contents of the text input.</p>'
  } as ComponentDetails;

  keyFilter = {
    name: 'Keyfilter',
    icon: 'fa-code',
    description: '<p>Directive to apply to HTML input elements to filter out certain input.</p>'
  } as ComponentDetails;

  datePicker = {
    name: 'Date Picker',
    icon: 'fa-calendar-days',
    description: '<p>The date picker component allows the user to enter a date via a text input (in the form of month/day/year) or through a calendar widget.</p>'
  } as ComponentDetails;

  richText = {
    name: 'Rich Text Editor',
    icon: 'fa-edit',
    description: '<p>The rich text component is an Angular wrapper around a Quill rich text editor.</p>'
  } as ComponentDetails;

  dropdowns = {
    name: 'Dropdowns',
    icon: 'fa-caret-down',
    description: '<p>The dropdown component acts as an enhanced HTML select. It supports both regular dropdown options (only the label being displayed) and templated options (options for which you can supply a ng-template to act as a template for each dropdown option). The dropdown is fully accessible as well, and supports all the accessibility options that a native select would (such as arrow key controls for option selection).</p>'
  } as ComponentDetails;

  multiSelect = {
    name: 'Multi-Select',
    icon: 'fa-list',
    description: '<p>The multi-select component acts as an enhanced HTML select that allows multiple selections. It supports both regular multi-select options (only the label being displayed) and templated options (options for which you can supply a ng-template to act as a template for each multi-select option). The multi-select is fully accessible as well, and supports all the accessibility options that a multi-select should (such as arrow key controls for option selection).</p>'
  } as ComponentDetails;

  dialog = {
    name: 'Dialog',
    icon: 'fa-window-restore',
    description: '<p>The dialog component displays dynamic content within a dialog and supports nested dialogs within that dynamic content.</p>'
  } as ComponentDetails;

  iconSelect = {
    name: 'Icon Select',
    icon: 'fa-atom',
    description: '<p>Add any font awesome or custom icon to any application with this icon selection tool.</p>'
  } as ComponentDetails;

  popOver = {
    name: 'Pop Over',
    icon: 'fa-tv',
    description: '<p>The popover component displays a popover with dynamic content around a given target.</p>'
  } as ComponentDetails;

  slideOver = {
    name: 'Slide Over',
    icon: 'fa-desktop',
    description: '<p>Up, down, left, and right slide over elements.</p>'
  } as ComponentDetails;

  notifications = {
    name: 'Notifications',
    icon: 'fa-message',
    description: '<p>A notification is a simple way to provide feedback to a user in respect to some action (successful resource save, some error occurred, etc). Notifications have an ID (system generated), severity (\'success\' | \'info\' | \'warn\' | \'error\'), summary and detail message (optional).</p>'
  } as ComponentDetails;

  toolTips = {
    name: 'Tool Tips',
    icon: 'fa-comment-dots',
    description: '<p>The tooltip directive allows for a tooltip to be displayed around an HTML element.</p>'
  } as ComponentDetails;

  theming= {
    name: 'Theming',
    icon: 'fa-palette',
    description: '<p>Quickly change to different themes that alter the look and feel of the entire application.</p>'
  } as ComponentDetails;

  accordion= {
    name: 'Accordion',
    icon: 'fa-angle-right',
    description: '<p>The accordion component allows for a user to add content within tabs which can expand/collapse the window which contains the content.</p>'
  } as ComponentDetails;

  paginator= {
    name: 'Paginator',
    icon: 'fa-forward-fast',
    description: '<p>The paginator component is a widget that provides controls for paginating a list.</p>'
  } as ComponentDetails;

  profilePicture= {
    name: 'Profile Picture',
    icon: 'fa-user',
    description: '<p>The profile pic component displays a round image with a tooltip description to act as a profile picture.</p>'
  } as ComponentDetails;

  pipes= {
    name: 'Ordinal Number Pipes',
    icon: 'fa-bong',
    description: '<p>The ordinal number pipe transforms a number into an ordinal number (1 => 1st, 2 => 2nd, 3 => 3rd, etc).</p>'
  } as ComponentDetails;

  endPoint= {
    name: 'End Point State',
    icon: 'fa-spinner',
    description: '<p>The endpoint state component serves as a catch-all for displaying endpoint states (loading, not found and error).</p>'
  } as ComponentDetails;

  icons= {
    name: 'Icons',
    icon: 'fa-mosquito',
    description: '<p>The icon select component allows a user to search for and select either a Fontawesome or Particle (custom) icon.</p>'
  } as ComponentDetails;
}
