import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { PlaceholderDirective } from '../placeholder/placesholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  @ViewChild(PlaceholderDirective, {static: false}) popupHost

  popupSub: Subscription

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  generatePopup() {
    const popupFactory = this.factoryResolver.resolveComponentFactory(PopUpComponent)

    const hostContainerRef = this.popupHost.viewContainerRef
    hostContainerRef.clear()

    const popupComponentRef = hostContainerRef.createComponent(popupFactory)

    this.popupSub = popupComponentRef.instance.closeButton.subscribe(() => {
      this.popupSub.unsubscribe()
      hostContainerRef.clear()
    })
  }

}
