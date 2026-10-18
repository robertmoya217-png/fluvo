import{a as e,r as t,s as n,t as r}from"./index-z4N8ESLL.js";import{C as i,D as a,E as o,O as s,S as c,T as l,_ as u,a as d,b as f,c as p,d as m,f as h,h as g,j as _,k as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,v as ee,w as te,x as ne,y as re}from"./react-three-fiber.esm-mulsL-Fx.js";function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(null,arguments)}var O=e((()=>{})),k,A,ie,j,M=e((()=>{k=Object.defineProperty,A=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ie=(e,t,n)=>(A(e,typeof t==`symbol`?t:t+``,n),n),j=class{constructor(){ie(this,`_listeners`)}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}}})),ae,oe,N,P,se,ce,le,F,I=e((()=>{T(),M(),ae=Object.defineProperty,oe=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t,n)=>(oe(e,typeof t==`symbol`?t:t+``,n),n),P=new c,se=new f,ce=Math.cos(Math.PI/180*70),le=(e,t)=>(e%t+t)%t,F=class extends j{constructor(e,t){super(),N(this,`object`),N(this,`domElement`),N(this,`enabled`,!0),N(this,`target`,new v),N(this,`minDistance`,0),N(this,`maxDistance`,1/0),N(this,`minZoom`,0),N(this,`maxZoom`,1/0),N(this,`minPolarAngle`,0),N(this,`maxPolarAngle`,Math.PI),N(this,`minAzimuthAngle`,-1/0),N(this,`maxAzimuthAngle`,1/0),N(this,`enableDamping`,!1),N(this,`dampingFactor`,.05),N(this,`enableZoom`,!0),N(this,`zoomSpeed`,1),N(this,`enableRotate`,!0),N(this,`rotateSpeed`,1),N(this,`enablePan`,!0),N(this,`panSpeed`,1),N(this,`screenSpacePanning`,!0),N(this,`keyPanSpeed`,7),N(this,`zoomToCursor`,!1),N(this,`autoRotate`,!1),N(this,`autoRotateSpeed`,2),N(this,`reverseOrbit`,!1),N(this,`reverseHorizontalOrbit`,!1),N(this,`reverseVerticalOrbit`,!1),N(this,`keys`,{LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`}),N(this,`mouseButtons`,{LEFT:b.ROTATE,MIDDLE:b.DOLLY,RIGHT:b.PAN}),N(this,`touches`,{ONE:l.ROTATE,TWO:l.DOLLY_PAN}),N(this,`target0`),N(this,`position0`),N(this,`zoom0`),N(this,`_domElementKeyEvents`,null),N(this,`getPolarAngle`),N(this,`getAzimuthalAngle`),N(this,`setPolarAngle`),N(this,`setAzimuthalAngle`),N(this,`getDistance`),N(this,`getZoomScale`),N(this,`listenToKeyEvents`),N(this,`stopListenToKeyEvents`),N(this,`saveState`),N(this,`reset`),N(this,`update`),N(this,`connect`),N(this,`dispose`),N(this,`dollyIn`),N(this,`dollyOut`),N(this,`getScale`),N(this,`setScale`),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=e=>{let t=le(e,2*Math.PI),r=d.phi;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),f.phi=t-r,n.update()},this.setAzimuthalAngle=e=>{let t=le(e,2*Math.PI),r=d.theta;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),f.theta=t-r,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener(`keydown`,Se),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener(`keydown`,Se),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),c=o.NONE},this.update=(()=>{let t=new v,i=new v(0,1,0),a=new ne().setFromUnitVectors(e.up,i),s=a.clone().invert(),l=new v,h=new ne,g=2*Math.PI;return function(){let _=n.object.position;a.setFromUnitVectors(e.up,i),s.copy(a).invert(),t.copy(_).sub(n.target),t.applyQuaternion(a),d.setFromVector3(t),n.autoRotate&&c===o.NONE&&M(ie()),n.enableDamping?(d.theta+=f.theta*n.dampingFactor,d.phi+=f.phi*n.dampingFactor):(d.theta+=f.theta,d.phi+=f.phi);let y=n.minAzimuthAngle,b=n.maxAzimuthAngle;isFinite(y)&&isFinite(b)&&(y<-Math.PI?y+=g:y>Math.PI&&(y-=g),b<-Math.PI?b+=g:b>Math.PI&&(b-=g),y<=b?d.theta=Math.max(y,Math.min(b,d.theta)):d.theta=d.theta>(y+b)/2?Math.max(y,d.theta):Math.min(b,d.theta)),d.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,d.phi)),d.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),n.zoomToCursor&&O||n.object.isOrthographicCamera?d.radius=V(d.radius):d.radius=V(d.radius*p),t.setFromSpherical(d),t.applyQuaternion(s),_.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(f.theta*=1-n.dampingFactor,f.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(f.set(0,0,0),m.set(0,0,0));let x=!1;if(n.zoomToCursor&&O){let r=null;if(n.object instanceof re&&n.object.isPerspectiveCamera){let e=t.length();r=V(e*p);let i=e-r;n.object.position.addScaledVector(E,i),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new v(D.x,D.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/p)),n.object.updateProjectionMatrix(),x=!0;let i=new v(D.x,D.y,0);i.unproject(n.object),n.object.position.sub(i).add(e),n.object.updateMatrixWorld(),r=t.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),n.zoomToCursor=!1;r!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(r).add(n.object.position):(P.origin.copy(n.object.position),P.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(P.direction))<ce?e.lookAt(n.target):(se.setFromNormalAndCoplanarPoint(n.object.up,n.target),P.intersectPlane(se,n.target))))}else n.object instanceof ee&&n.object.isOrthographicCamera&&(x=p!==1,x&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/p)),n.object.updateProjectionMatrix()));return p=1,O=!1,x||l.distanceToSquared(n.object.position)>u||8*(1-h.dot(n.object.quaternion))>u?(n.dispatchEvent(r),l.copy(n.object.position),h.copy(n.object.quaternion),x=!1,!0):!1}})(),this.connect=e=>{n.domElement=e,n.domElement.style.touchAction=`none`,n.domElement.addEventListener(`contextmenu`,Te),n.domElement.addEventListener(`pointerdown`,ye),n.domElement.addEventListener(`pointercancel`,Z),n.domElement.addEventListener(`wheel`,$)},this.dispose=()=>{var e,t,r,i,a,o;n.domElement&&(n.domElement.style.touchAction=`auto`),(e=n.domElement)==null||e.removeEventListener(`contextmenu`,Te),(t=n.domElement)==null||t.removeEventListener(`pointerdown`,ye),(r=n.domElement)==null||r.removeEventListener(`pointercancel`,Z),(i=n.domElement)==null||i.removeEventListener(`wheel`,$),(a=n.domElement)==null||a.ownerDocument.removeEventListener(`pointermove`,be),(o=n.domElement)==null||o.ownerDocument.removeEventListener(`pointerup`,Z),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener(`keydown`,Se)};let n=this,r={type:`change`},i={type:`start`},a={type:`end`},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},c=o.NONE,u=1e-6,d=new te,f=new te,p=1,m=new v,h=new s,g=new s,_=new s,y=new s,x=new s,S=new s,C=new s,w=new s,T=new s,E=new v,D=new s,O=!1,k=[],A={};function ie(){return 2*Math.PI/60/60*n.autoRotateSpeed}function j(){return .95**n.zoomSpeed}function M(e){n.reverseOrbit||n.reverseHorizontalOrbit?f.theta+=e:f.theta-=e}function ae(e){n.reverseOrbit||n.reverseVerticalOrbit?f.phi+=e:f.phi-=e}let oe=(()=>{let e=new v;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),m.add(e)}})(),F=(()=>{let e=new v;return function(t,r){n.screenSpacePanning===!0?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),m.add(e)}})(),I=(()=>{let e=new v;return function(t,r){let i=n.domElement;if(i&&n.object instanceof re&&n.object.isPerspectiveCamera){let a=n.object.position;e.copy(a).sub(n.target);let o=e.length();o*=Math.tan(n.object.fov/2*Math.PI/180),oe(2*t*o/i.clientHeight,n.object.matrix),F(2*r*o/i.clientHeight,n.object.matrix)}else i&&n.object instanceof ee&&n.object.isOrthographicCamera?(oe(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),F(r*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),n.enablePan=!1)}})();function L(e){n.object instanceof re&&n.object.isPerspectiveCamera||n.object instanceof ee&&n.object.isOrthographicCamera?p=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),n.enableZoom=!1)}function R(e){L(p/e)}function z(e){L(p*e)}function B(e){if(!n.zoomToCursor||!n.domElement)return;O=!0;let t=n.domElement.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top,a=t.width,o=t.height;D.x=r/a*2-1,D.y=-(i/o)*2+1,E.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function V(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function H(e){h.set(e.clientX,e.clientY)}function U(e){B(e),C.set(e.clientX,e.clientY)}function W(e){y.set(e.clientX,e.clientY)}function ue(e){g.set(e.clientX,e.clientY),_.subVectors(g,h).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(M(2*Math.PI*_.x/t.clientHeight),ae(2*Math.PI*_.y/t.clientHeight)),h.copy(g),n.update()}function de(e){w.set(e.clientX,e.clientY),T.subVectors(w,C),T.y>0?R(j()):T.y<0&&z(j()),C.copy(w),n.update()}function fe(e){x.set(e.clientX,e.clientY),S.subVectors(x,y).multiplyScalar(n.panSpeed),I(S.x,S.y),y.copy(x),n.update()}function pe(e){B(e),e.deltaY<0?z(j()):e.deltaY>0&&R(j()),n.update()}function G(e){let t=!1;switch(e.code){case n.keys.UP:I(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:I(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:I(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:I(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}function K(){if(k.length==1)h.set(k[0].pageX,k[0].pageY);else{let e=.5*(k[0].pageX+k[1].pageX),t=.5*(k[0].pageY+k[1].pageY);h.set(e,t)}}function q(){if(k.length==1)y.set(k[0].pageX,k[0].pageY);else{let e=.5*(k[0].pageX+k[1].pageX),t=.5*(k[0].pageY+k[1].pageY);y.set(e,t)}}function me(){let e=k[0].pageX-k[1].pageX,t=k[0].pageY-k[1].pageY,n=Math.sqrt(e*e+t*t);C.set(0,n)}function he(){n.enableZoom&&me(),n.enablePan&&q()}function J(){n.enableZoom&&me(),n.enableRotate&&K()}function Y(e){if(k.length==1)g.set(e.pageX,e.pageY);else{let t=ke(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);g.set(n,r)}_.subVectors(g,h).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(M(2*Math.PI*_.x/t.clientHeight),ae(2*Math.PI*_.y/t.clientHeight)),h.copy(g)}function ge(e){if(k.length==1)x.set(e.pageX,e.pageY);else{let t=ke(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);x.set(n,r)}S.subVectors(x,y).multiplyScalar(n.panSpeed),I(S.x,S.y),y.copy(x)}function _e(e){let t=ke(e),r=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(r*r+i*i);w.set(0,a),T.set(0,(w.y/C.y)**+n.zoomSpeed),R(T.y),C.copy(w)}function X(e){n.enableZoom&&_e(e),n.enablePan&&ge(e)}function ve(e){n.enableZoom&&_e(e),n.enableRotate&&Y(e)}function ye(e){var t,r;n.enabled!==!1&&(k.length===0&&((t=n.domElement)==null||t.ownerDocument.addEventListener(`pointermove`,be),(r=n.domElement)==null||r.ownerDocument.addEventListener(`pointerup`,Z)),Ee(e),e.pointerType===`touch`?Ce(e):xe(e))}function be(e){n.enabled!==!1&&(e.pointerType===`touch`?we(e):Q(e))}function Z(e){var t,r,i;De(e),k.length===0&&((t=n.domElement)==null||t.releasePointerCapture(e.pointerId),(r=n.domElement)==null||r.ownerDocument.removeEventListener(`pointermove`,be),(i=n.domElement)==null||i.ownerDocument.removeEventListener(`pointerup`,Z)),n.dispatchEvent(a),c=o.NONE}function xe(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case b.DOLLY:if(n.enableZoom===!1)return;U(e),c=o.DOLLY;break;case b.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enablePan===!1)return;W(e),c=o.PAN}else{if(n.enableRotate===!1)return;H(e),c=o.ROTATE}break;case b.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enableRotate===!1)return;H(e),c=o.ROTATE}else{if(n.enablePan===!1)return;W(e),c=o.PAN}break;default:c=o.NONE}c!==o.NONE&&n.dispatchEvent(i)}function Q(e){if(n.enabled!==!1)switch(c){case o.ROTATE:if(n.enableRotate===!1)return;ue(e);break;case o.DOLLY:if(n.enableZoom===!1)return;de(e);break;case o.PAN:if(n.enablePan===!1)return;fe(e)}}function $(e){n.enabled===!1||n.enableZoom===!1||c!==o.NONE&&c!==o.ROTATE||(e.preventDefault(),n.dispatchEvent(i),pe(e),n.dispatchEvent(a))}function Se(e){n.enabled!==!1&&n.enablePan!==!1&&G(e)}function Ce(e){switch(Oe(e),k.length){case 1:switch(n.touches.ONE){case l.ROTATE:if(n.enableRotate===!1)return;K(),c=o.TOUCH_ROTATE;break;case l.PAN:if(n.enablePan===!1)return;q(),c=o.TOUCH_PAN;break;default:c=o.NONE}break;case 2:switch(n.touches.TWO){case l.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;he(),c=o.TOUCH_DOLLY_PAN;break;case l.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;J(),c=o.TOUCH_DOLLY_ROTATE;break;default:c=o.NONE}break;default:c=o.NONE}c!==o.NONE&&n.dispatchEvent(i)}function we(e){switch(Oe(e),c){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;Y(e),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;ge(e),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(e),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(e),n.update();break;default:c=o.NONE}}function Te(e){n.enabled!==!1&&e.preventDefault()}function Ee(e){k.push(e)}function De(e){delete A[e.pointerId];for(let t=0;t<k.length;t++)if(k[t].pointerId==e.pointerId){k.splice(t,1);return}}function Oe(e){let t=A[e.pointerId];t===void 0&&(t=new s,A[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ke(e){let t=e.pointerId===k[0].pointerId?k[1]:k[0];return A[t.pointerId]}this.dollyIn=(e=j())=>{z(e),n.update()},this.dollyOut=(e=j())=>{R(e),n.update()},this.getScale=()=>p,this.setScale=e=>{L(e),n.update()},this.getZoomScale=()=>j(),t!==void 0&&this.connect(t),this.update()}}})),L=e((()=>{I()}));function R(e,t,n,r){var s=class extends i{constructor(i){super({vertexShader:t,fragmentShader:n,...i});for(let t in e)this.uniforms[t]=new o(e[t]),Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(e){this.uniforms[t].value=e}});this.uniforms=a.clone(this.uniforms),r?.(this)}};return s.key=g.generateUUID(),s}var z=e((()=>{T()}));function B(e,t,n){let r=S(e=>e.size),i=S(e=>e.viewport),a=typeof e==`number`?e:r.width*i.dpr,o=typeof t==`number`?t:r.height*i.dpr,s=(typeof e==`number`?n:e)||{},{samples:c=0,depth:l,...u}=s,d=l??s.depthBuffer,f=V.useMemo(()=>{let e=new _(a,o,{minFilter:C,magFilter:C,type:h,...u});return d&&(e.depthTexture=new y(a,o,m)),e.samples=c,e},[]);return V.useLayoutEffect(()=>{f.setSize(a,o),c&&(f.samples=c)},[c,f,a,o]),V.useEffect(()=>()=>f.dispose(),[]),f}var V,H=e((()=>{V=n(t()),t(),T(),x()})),U,W,ue=e((()=>{O(),x(),U=n(t()),L(),W=U.forwardRef(({makeDefault:e,camera:t,regress:n,domElement:r,enableDamping:i=!0,keyEvents:a=!1,onChange:o,onStart:s,onEnd:c,...l},u)=>{let f=S(e=>e.invalidate),p=S(e=>e.camera),m=S(e=>e.gl),h=S(e=>e.events),g=S(e=>e.setEvents),_=S(e=>e.set),v=S(e=>e.get),y=S(e=>e.performance),b=t||p,x=r||h.connected||m.domElement,C=U.useMemo(()=>new F(b),[b]);return d(()=>{C.enabled&&C.update()},-1),U.useEffect(()=>(a&&C.connect(a===!0?x:a),C.connect(x),()=>void C.dispose()),[a,x,n,C,f]),U.useEffect(()=>{let e=e=>{f(),n&&y.regress(),o&&o(e)},t=e=>{s&&s(e)},r=e=>{c&&c(e)};return C.addEventListener(`change`,e),C.addEventListener(`start`,t),C.addEventListener(`end`,r),()=>{C.removeEventListener(`start`,t),C.removeEventListener(`end`,r),C.removeEventListener(`change`,e)}},[o,s,c,C,f,g]),U.useEffect(()=>{if(e){let e=v().controls;return _({controls:C}),()=>_({controls:e})}},[e,C]),U.createElement(`primitive`,D({ref:u,object:C,enableDamping:i},l))})})),de=e((()=>{Object.freeze({NONE:0,ROTATE:1,TRUCK:2,SCREEN_PAN:4,OFFSET:8,DOLLY:16,ZOOM:32,TOUCH_ROTATE:64,TOUCH_TRUCK:128,TOUCH_SCREEN_PAN:256,TOUCH_OFFSET:512,TOUCH_DOLLY:1024,TOUCH_ZOOM:2048,TOUCH_DOLLY_TRUCK:4096,TOUCH_DOLLY_SCREEN_PAN:8192,TOUCH_DOLLY_OFFSET:16384,TOUCH_DOLLY_ROTATE:32768,TOUCH_ZOOM_TRUCK:65536,TOUCH_ZOOM_OFFSET:131072,TOUCH_ZOOM_SCREEN_PAN:262144,TOUCH_ZOOM_ROTATE:524288}),/Mac/.test(globalThis?.navigator?.platform)})),fe,pe=e((()=>{z(),fe=R({},`void main() { }`,`void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }`)})),G,K,q,me=e((()=>{O(),T(),G=n(t()),x(),H(),pe(),K=class extends u{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new p(`white`)},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=n=>{n.uniforms={...n.uniforms,...this.uniforms},(this.anisotropy??0)>0&&(n.defines.USE_ANISOTROPY=``),t?n.defines.USE_SAMPLER=``:n.defines.USE_TRANSMISSION=``,n.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace(`#include <transmission_pars_fragment>`,`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in vec3 modelScale ) {
            // Direction of refracted light.
            // n is normalized once when the sample normal is built.
            vec3 refractionVector = refract( - v, n, 1.0 / ior );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 position, const in vec3 modelScale, const in vec3 attenuationCoefficient, const in vec3 F,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelScale );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = transmittedLight.rgb;
            if ( !isinf( attenuationDistance ) ) {
              // Apply Beer's law.
              attenuatedColor *= exp( - attenuationCoefficient * length( transmissionRay ) );
            }
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),n.fragmentShader=n.fragmentShader.replace(`#include <transmission_fragment>`,`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        if (material.transmission != 0.0) {
          vec3 pos = vWorldPosition;
          float runningSeed = 0.0;
          vec3 v = normalize( cameraPosition - pos );
          vec3 n = inverseTransformDirection( normal, viewMatrix );
          vec3 transmission = vec3(0.0);
          float randomCoords = rand(runningSeed++);
          float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
          vec3 distortionNormal = vec3(0.0);
          vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;

          vec3 modelScale = vec3(
            length( vec3( modelMatrix[ 0 ].xyz ) ),
            length( vec3( modelMatrix[ 1 ].xyz ) ),
            length( vec3( modelMatrix[ 2 ].xyz ) )
          );

          // Beer's-law coefficient
          vec3 attenuationCoefficient = vec3(0.0);
          if ( !isinf( material.attenuationDistance ) ) {
            attenuationCoefficient = -log( material.attenuationColor ) / material.attenuationDistance;
          }

          if (distortion > 0.0) {
            distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
          }
          for (float i = 0.0; i < ${e}.0; i ++) {
            vec3 sampleNorm;
            if (roughnessFactor > 0.0) {
              sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
            } else {
              // Smooth surfaces skip four hashes, a pow, and a normalization per sample
              sampleNorm = normalize(n + distortionNormal);
            }
            float sampleProgress = (i + randomCoords) / float(${e});
            float sampleThickness = material.thickness + thickness_smear * sampleProgress;
            // Fresnel is identical for RGB; only the refracted IOR changes.
            vec3 F = EnvironmentBRDF( sampleNorm, v, material.specularColor, material.specularF90, material.roughness );
            if (chromaticAberration == 0.0) {
              // With one IOR, a single framebuffer sample supplies all RGB channels
              transmission += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior, sampleThickness, material.attenuationDistance
              ).rgb;
            } else {
              float aberration = chromaticAberration * sampleProgress;
              transmission.r += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior, sampleThickness, material.attenuationDistance
              ).r;
              transmission.g += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior * (1.0 + aberration), sampleThickness, material.attenuationDistance
              ).g;
              transmission.b += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * aberration), sampleThickness, material.attenuationDistance
              ).b;
            }
          }
          transmission /= ${e}.0;
          totalDiffuse = mix( totalDiffuse, transmission, material.transmission );
        }\n`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}},q=G.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:n=!1,side:r=0,transmission:i=1,thickness:a=0,backsideThickness:o=0,backsideEnvMapIntensity:s=1,samples:c=10,resolution:l,backsideResolution:u,background:f,anisotropy:p,anisotropicBlur:m,...h},g)=>{w({MeshTransmissionMaterial:K});let _=G.useRef(null),[v]=G.useState(()=>new fe),y=u??l,b=B(y,y),x=B(l,l),S,C,T,E;return d(e=>{let i=_.current;if(i.uniforms.time.value=e.clock.elapsedTime,i.uniforms.buffer.value===x.texture&&!t){var c;E=(c=i.__r3f)==null||(c=c.parent)==null?void 0:c.object,E&&i.visible&&i.uniforms._transmission.value!==0&&(T=e.gl.toneMapping,S=e.scene.background,C=i.envMapIntensity,e.gl.toneMapping=0,f&&(e.scene.background=f),E.material=v,n&&(e.gl.setRenderTarget(b),e.gl.render(e.scene,e.camera),E.material=i,i.uniforms.buffer.value=b.texture,i.uniforms.thickness.value=o,i.side=1,r!==1&&(i.needsUpdate=!0),i.envMapIntensity=s),e.gl.setRenderTarget(x),e.gl.render(e.scene,e.camera),E.material=i,i.uniforms.thickness.value=a,i.side=r,n&&r!==1&&(i.needsUpdate=!0),i.uniforms.buffer.value=x.texture,i.envMapIntensity=C,e.scene.background=S,e.gl.setRenderTarget(null),e.gl.toneMapping=T)}}),G.useImperativeHandle(g,()=>_.current,[]),G.createElement(`meshTransmissionMaterial`,D({args:[c,t],ref:_},h,{buffer:e||x.texture,_transmission:i,anisotropicBlur:m??p,transmission:t?i:0,thickness:a,side:r}))})}));function he(e,t){let n=e+`Geometry`;return J.forwardRef(({args:e,children:r,...i},a)=>{let o=J.useRef(null);return J.useImperativeHandle(a,()=>o.current),J.useLayoutEffect(()=>void t?.(o.current)),J.createElement(`mesh`,D({ref:o},i),J.createElement(n,{attach:`geometry`,args:e}),r)})}var J,Y,ge,_e=e((()=>{O(),J=n(t()),Y=he(`torus`),ge=he(`icosahedron`)})),X,ve,ye=e((()=>{X=n(t()),x(),T(),ve=X.forwardRef(({children:e,enabled:t=!0,speed:n=1,rotationIntensity:r=1,floatIntensity:i=1,floatingRange:a=[-.1,.1],autoInvalidate:o=!1,...s},c)=>{let l=X.useRef(null);X.useImperativeHandle(c,()=>l.current,[]);let u=X.useRef(Math.random()*1e4);return d(e=>{if(!t||n===0)return;o&&e.invalidate();let s=u.current+e.clock.elapsedTime;l.current.rotation.x=Math.cos(s/4*n)/8*r,l.current.rotation.y=Math.sin(s/4*n)/8*r,l.current.rotation.z=Math.sin(s/4*n)/20*r;let c=Math.sin(s/4*n)/10;c=g.mapLinear(c,-.1,.1,a?.[0]??-.1,a?.[1]??.1),l.current.position.y=c*i,l.current.updateMatrix()}),X.createElement(`group`,s,X.createElement(`group`,{ref:l,matrixAutoUpdate:!1},e))})})),be=e((()=>{L(),z(),H(),ue(),de(),me(),pe(),_e(),ye()}));function Z({isMobile:e}){let t=(0,Q.useRef)(),n=(0,Q.useRef)(),r=(0,Q.useRef)(),[i,a]=(0,Q.useState)(!1);return d(e=>{let i=e.clock.getElapsedTime();t.current&&(t.current.rotation.x=Math.sin(i*.25)*.4,t.current.rotation.y=i*.15,t.current.rotation.z=Math.cos(i*.2)*.15),n.current&&(n.current.rotation.x=i*.35,n.current.rotation.z=Math.sin(i*.18)*.6),r.current&&(r.current.rotation.y=i*.25,r.current.rotation.x=Math.cos(i*.15)*.8)}),(0,$.jsxs)(`group`,{scale:e?1.3:1.7,children:[(0,$.jsx)(ve,{speed:1.2,rotationIntensity:.8,floatIntensity:1,children:(0,$.jsx)(ge,{ref:t,args:[1,e?4:8],onPointerOver:()=>a(!0),onPointerOut:()=>a(!1),children:(0,$.jsx)(q,{backside:!0,backsideThickness:.3,samples:e?2:4,resolution:e?128:256,transmission:.96,roughness:.05,clearcoat:1,clearcoatRoughness:.05,ior:1.25,chromaticAberration:.03,anisotropy:.1,distortion:.35,distortionScale:.2,temporalDistortion:.1,color:i?`#ffffff`:`#e2e8f0`})})}),(0,$.jsx)(Y,{ref:n,args:[1.8,.025,12,48],rotation:[Math.PI/2.5,0,0],children:(0,$.jsx)(`meshPhysicalMaterial`,{transmission:.85,roughness:.02,ior:1.5,thickness:.3,color:`#ffffff`,clearcoat:1,opacity:.7,transparent:!0})}),(0,$.jsx)(Y,{ref:r,args:[2.2,.015,12,60],rotation:[Math.PI/1.5,Math.PI/4,0],children:(0,$.jsx)(`meshPhysicalMaterial`,{transmission:.9,roughness:.02,ior:1.5,thickness:.2,color:`#ffffff`,clearcoat:1,opacity:.4,transparent:!0})})]})}function xe(){let[e,t]=(0,Q.useState)(!1);return(0,Q.useEffect)(()=>{let e=()=>t(window.innerWidth<768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,$.jsx)(`div`,{className:`w-full h-[420px] md:h-[520px] relative`,children:(0,$.jsxs)(E,{camera:{position:[0,0,6],fov:42},dpr:e?1:[1,1.5],performance:{min:.5},gl:{powerPreference:`high-performance`,antialias:!1,alpha:!0},style:{background:`transparent`},children:[(0,$.jsx)(`ambientLight`,{intensity:1.2}),(0,$.jsx)(`directionalLight`,{position:[8,8,8],intensity:3,color:`#ffffff`}),(0,$.jsx)(`directionalLight`,{position:[-5,-5,-5],intensity:1.5,color:`#e2e8f0`}),(0,$.jsx)(Z,{isMobile:e}),(0,$.jsx)(W,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.5,maxPolarAngle:Math.PI/1.7,minPolarAngle:Math.PI/2.3})]})})}var Q,$;e((()=>{Q=n(t()),x(),be(),$=r()}))();export{xe as default};