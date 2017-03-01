/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../src/split.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from './splitGutter.directive.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../src/splitGutter.directive';
import * as import14 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
export class Wrapper_SplitComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SplitComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.SplitComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
  }
  check_direction(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.direction = currValue;
      this._changes['direction'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_width(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.width = currValue;
      this._changes['width'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_height(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.height = currValue;
      this._changes['height'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_gutterSize(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.gutterSize = currValue;
      this._changes['gutterSize'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_disabled(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.disabled = currValue;
      this._changes['disabled'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_animateAreaToggle(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.animateAreaToggle = currValue;
      this._changes['animateAreaToggle'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_6:any = this.context.styleFlexDirection;
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      view.renderer.setElementClass(el,'vertical',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.dragging;
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      view.renderer.setElementClass(el,'notrans',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.styleWidth;
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      view.renderer.setElementStyle(el,'width',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_8) == null)? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_8).toString()));
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.styleHeight;
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      view.renderer.setElementStyle(el,'height',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9) == null)? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9).toString()));
      this._expr_9 = currVal_9;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.dragStart.subscribe(_eventHandler.bind(view,'dragStart'))); }
    if (emit1) { (this.subscription1 = this.context.dragProgress.subscribe(_eventHandler.bind(view,'dragProgress'))); }
    if (emit2) { (this.subscription2 = this.context.dragEnd.subscribe(_eventHandler.bind(view,'dragEnd'))); }
    if (emit3) { (this.subscription3 = this.context.visibleTransitionEnd.subscribe(_eventHandler.bind(view,'visibleTransitionEnd'))); }
  }
}
var renderType_SplitComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_SplitComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SplitComponent>;
  _SplitComponent_0_3:Wrapper_SplitComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SplitComponent_Host0,renderType_SplitComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'split',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SplitComponent0(this.viewUtils,this,0,this._el_0);
    this._SplitComponent_0_3 = new Wrapper_SplitComponent(this.compView_0.ref,new import10.ElementRef(this._el_0),this.renderer);
    this.compView_0.create(this._SplitComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._SplitComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SplitComponent) && (0 === requestNodeIndex))) { return this._SplitComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._SplitComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._SplitComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._SplitComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const SplitComponentNgFactory:import9.ComponentFactory<import0.SplitComponent> = new import9.ComponentFactory<import0.SplitComponent>('split',View_SplitComponent_Host0,import0.SplitComponent);
const styles_SplitComponent:any[] = ['[_nghost-%COMP%] {\n            display: flex;\n            flex-wrap: nowrap;\n            justify-content: flex-start;\n            flex-direction: row;\n        }\n\n        .vertical[_nghost-%COMP%] {\n            flex-direction: column;\n        }\n\n        split-gutter[_ngcontent-%COMP%] {\n            flex-grow: 0;\n            flex-shrink: 0;\n            flex-basis: 10px;\n            height: 100%;\n            background-color: #eeeeee;\n            background-position: 50%;\n            background-repeat: no-repeat;\n        }\n\n        .vertical[_nghost-%COMP%]   split-gutter[_ngcontent-%COMP%] {\n            width: 100%;\n        }\n\n        [_nghost-%COMP%]     split-area {\n            transition: flex-basis 0.3s;\n        }  \n\n        .notrans[_nghost-%COMP%]     split-area {\n            transition: none !important;\n        }      \n\n        [_nghost-%COMP%]     split-area.notshow {\n            flex-basis: 0 !important;\n            overflow: hidden !important;\n        }      \n\n        .vertical[_nghost-%COMP%]     split-area.notshow {\n            max-width: 0;\n            flex-basis: 0 !important;\n            overflow: hidden !important;\n        }'];
class View_SplitComponent2 extends import2.AppView<any> {
  _el_0:any;
  _SplitGutterDirective_0_3:import11.Wrapper_SplitGutterDirective;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_SplitComponent2,renderType_SplitComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'split-gutter',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._SplitGutterDirective_0_3 = new import11.Wrapper_SplitGutterDirective(new import10.ElementRef(this._el_0),this.renderer);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'mousedown',(null as any),'touchstart',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.SplitGutterDirective) && (0 === requestNodeIndex))) { return this._SplitGutterDirective_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = ((this.parentView.context.index * 2) + 1);
    this._SplitGutterDirective_0_3.check_order(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.parentView.context.direction;
    this._SplitGutterDirective_0_3.check_direction(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.parentView.context.gutterSize;
    this._SplitGutterDirective_0_3.check_size(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.parentView.context.disabled;
    this._SplitGutterDirective_0_3.check_disabled(currVal_0_0_3,throwOnChange,false);
    this._SplitGutterDirective_0_3.ngDoCheck(this,this._el_0,throwOnChange);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'mousedown')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.startDragging($event,((this.parentView.context.index * 2) + 1))) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'touchstart')) {
      const pd_sub_1:any = ((<any>this.parentView.parentView.context.startDragging($event,((this.parentView.context.index * 2) + 1))) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
}
class View_SplitComponent1 extends import2.AppView<any> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import12.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import14.Wrapper_NgIf;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_SplitComponent1,renderType_SplitComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._text_0 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._vc_1 = new import12.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import15.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import14.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.init(this._text_2,((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import16.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = (((this.context.last === false) && this.context.$implicit.component.visible) && !this.parentView.context.isLastVisibleArea(this.context.$implicit));
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._text_0,ctx);
    cb(this._vc_1.nativeElement,ctx);
    this._vc_1.visitNestedViewRootNodes(cb,ctx);
    cb(this._text_2,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_SplitComponent2(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}
var renderType_SplitComponent:import5.RenderComponentType = import3.createRenderComponentType('',1,import6.ViewEncapsulation.Emulated,styles_SplitComponent,{});
export class View_SplitComponent0 extends import2.AppView<import0.SplitComponent> {
  _text_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import12.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import17.Wrapper_NgFor;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SplitComponent0,renderType_SplitComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this.projectNodes(parentRenderNode,0);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_2 = new import12.ViewContainer(2,(null as any),this,this._anchor_2);
    this._TemplateRef_2_5 = new import15.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import17.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._text_1,
      this._anchor_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import19.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.areas;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_SplitComponent1(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}