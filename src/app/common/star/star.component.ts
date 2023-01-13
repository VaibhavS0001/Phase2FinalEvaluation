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
export class StarComponent implements AfterViewInit {
  /**
   * property binding for parent to child
   */
  @ViewChild('div') div!: ElementRef;
  @Input() rating: number = 0;
  @Input() size!: number;

  /**
   * constructor
   * @param renderer for rendering data on view
   */
  constructor(private renderer: Renderer2) {}

  /**
   * After view is initialized it will render material icons
   */
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
