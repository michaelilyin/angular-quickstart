import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LockerComponent implements OnInit {

  @Input()
  public active = false;

  constructor() { }

  ngOnInit() {
  }

}
