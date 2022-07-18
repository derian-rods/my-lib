import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  Directive,
  AfterViewInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
} from '@angular/core';

@Directive({
  selector: '[pButton]',
  host: {
    class: 'btn',
  },
})
export class ButtonDirective implements AfterViewInit, OnDestroy {
  public _label!: string;

  public initialized: boolean | undefined;

  constructor(public el: ElementRef) {}

  ngAfterViewInit() {
    this.initialized = true;
  }

  @Input() get label(): string {
    return this._label;
  }

  set label(val: string) {
    this._label = val;

    if (this.initialized) {
    }
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
@Component({
  selector: 'ng-button',
  template: `
    <button
      [attr.type]="type"
      [attr.aria-label]="ariaLabel"
      [class]="styleClass"
      [ngStyle]="style"
      [disabled]="disabled"
      (click)="onClick.emit($event)"
      (focus)="onFocus.emit($event)"
      (blur)="onBlur.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements AfterContentInit {
  @Input() type: String = 'button';

  @Input() ariaLabel!: string;

  @Input() styleClass!: string;

  @Input() style: any;

  @Input() disabled!: boolean;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  ngAfterContentInit() {}
}
