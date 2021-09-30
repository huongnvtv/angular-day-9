import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voted',
  template: `
  <h4>{{name}}</h4>
  <button (click)="vote(true)"  [disabled]="didVote">Agree</button>
  <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `,
})
export class VoteComponent {
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
