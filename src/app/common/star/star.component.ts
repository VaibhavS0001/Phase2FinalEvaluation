import { AfterViewInit, EventEmitter, OnInit, Output } from '@angular/core';
import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit, AfterViewInit {
  @ViewChild('div') div!: ElementRef;
  @Input() rating: number = 0;
  @Input() size!: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  onclick() {
    this.ratingClicked.emit(`Rating is ${this.rating} `);
  }

  ngAfterViewInit(): void {
    if (this.rating <= 5) {
      for (let i = 0; i < Math.floor(this.rating); i++) {
        let icon = this.renderer.createElement('mat-icon');
        if (this.size) {
          icon.style.fontSize = this.size + 'px';
          icon.style.height = '9px';
          icon.style.width = '10px';
        }
        this.renderer.appendChild(icon, this.renderer.createText('star'));
        this.renderer.addClass(icon, 'mat-icon');
        this.renderer.addClass(icon, 'material-icons');
        this.renderer.appendChild(this.div.nativeElement, icon);
      }
      if (this.rating?.toString().includes('.5')) {
        let icon = this.renderer.createElement('mat-icon');
        if (this.size) {
          icon.style.fontSize = this.size + 'px';
          icon.style.height = '9px';
          icon.style.width = '10px';
        }
        this.renderer.appendChild(icon, this.renderer.createText('star_half'));
        this.renderer.addClass(icon, 'mat-icon');
        this.renderer.addClass(icon, 'material-icons');
        this.renderer.appendChild(this.div.nativeElement, icon);
      }
    }
  }
}
