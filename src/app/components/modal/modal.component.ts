import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewChild,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  template: `
    <!-- Open the modal using ID.showModal() method -->
    <button [class]="'btn ' + modalActionOpen().styling" (click)="open()">
      {{ modalActionOpen().title }}
    </button>
    <dialog #modal class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <ng-content> </ng-content>
        @if(!modalOptions().closable){
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
        }
      </div>
      @if(modalOptions().closable){
      <form method="dialog" class="modal-backdrop">
        <!-- if there is a button in form, it will close the modal -->
        <button>Close</button>
      </form>
      }
    </dialog>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  modalOptions = input<{ closable: boolean }>({ closable: true });
  modalActionOpen = input.required<{ title: string; styling: string }>();
  @ViewChild('modal') modal!: any;
  open() {
    console.log(this.modal);

    this.modal.nativeElement.showModal();
  }
}
