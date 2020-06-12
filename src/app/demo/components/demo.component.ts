import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'mercadoibra';

  items = ['nicolas', 'julian', 'ramon'];

  ngOnInit() {
  }

  addItem() {
    this.items.push('nuevo item');
  }
}
