import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RefDirective} from './ref.directive';
import {RectangleComponent} from './rectangle/rectangle.component';
import {ComponentPortal} from '@angular/cdk/portal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  cFac: any;
  cRef: ViewContainerRef;
  @ViewChild(RefDirective, {static: true}) ref: RefDirective;
  private userSettingsPortal: ComponentPortal<any>;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.cFac = this.cfr.resolveComponentFactory(RectangleComponent);
    this.cRef = this.ref.viewContainerRef;
  }

  addComponent(): void {
    this.cRef.createComponent<RectangleComponent>(this.cFac);
  }

  ngAfterViewInit(): void {
    this.userSettingsPortal = new ComponentPortal(RectangleComponent);
  }
}
