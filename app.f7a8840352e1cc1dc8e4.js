webpackJsonp([0,3],[function(e,t,n){n(1)},function(e,t,n){"use strict";var r=n(2),a=n(3),i=n(4),o=n(57),c=o["default"]();a.render(r.createElement(i["default"],{store:c}),document.getElementById("app-container"))},,,function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},a=n(2),i=n(5),o=n(48),c=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.render=function(){var e=this.props.store;return a.createElement(o.Provider,{store:e},a.createElement(i["default"],null))},t}(a.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},a=n(2),i=n(6),o=n(53),c=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.render=function(){return a.createElement("div",{id:"root container-fluid"},a.createElement("header",null,a.createElement("h1",null,"Restaurant menu builder")),a.createElement("div",{className:"row"},a.createElement(i["default"],null),a.createElement(o["default"],null)))},t}(a.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c},function(e,t,n){"use strict";function r(e){return{items:m.getAvailableMenuItems(e),isFetching:m.getIsFetchingStatus(e),errorMessage:m.getErrorMessage(e)}}var a=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(2),o=n(7),c=n(48),l=n(49),s=n(52),u=n(7),m=n(20),d=function(e){function t(){e.apply(this,arguments)}return a(t,e),t.prototype.componentDidMount=function(){this.props.fetchItemsCallback()},t.prototype.render=function(){var e,t=this.props,n=t.items,r=t.isFetching,a=t.errorMessage,o=t.onItemClick,c=t.onItemAdd,u=t.onItemRemove;return e=r?i.createElement("div",{className:"loading"},"Loading data..."):a?i.createElement("div",{className:"error-message"},a):i.createElement("div",null,i.createElement("h3",null,"Available Items"),i.createElement(l["default"],{items:n,onClickCallback:o,onRemoveCallback:u})),i.createElement("div",{className:"editor col-md-6"},i.createElement("h2",null,"Menu Builder"),i.createElement(s["default"],{addItemCallback:c}),e)},t}(i.Component),p=function(e){return{onItemClick:function(t){e(o.toggleItem(t))},onItemRemove:function(t){e(o.removeItem(t))},onItemAdd:function(t){e(o.addItem(t))},fetchItemsCallback:function(){e(u.fetchMenuItems())}}};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c.connect(r,p)(d)},function(e,t,n){"use strict";var r=n(8),a=n(9),i=n(17),o=n(20),c=n(11),l=n(47);t.addItem=function(e){return{type:r.ActionType.ADD_ITEM,data:e}},t.removeItem=function(e){return{type:r.ActionType.REMOVE_ITEM,id:e}},t.toggleItem=function(e){return{type:r.ActionType.TOGGLE_SELECT,id:e}},t.fetchMenuItems=function(){return function(e,t){function n(t){e({type:r.ActionType.FETCH_SUCCESS_REMOTE,data:t})}function s(t){e({type:r.ActionType.FETCH_FAILURE,message:t.message||"Fetch error"})}var u,m=i.loadLocalItems();return m=null,o.getIsFetchingStatus(t())?u=c.Promise.resolve(null):(e({type:r.ActionType.FETCH_BEGIN}),a.doesExist(m)?(e({type:r.ActionType.FETCH_SUCESS_LOCAL,data:m}),u=c.Promise.resolve(null)):u=a.ajax({url:l,dataType:"json"}).then(n,s)["catch"](function(e){console.log(e)})),u}}},function(e,t){"use strict";!function(e){e[e.ADD_ITEM=0]="ADD_ITEM",e[e.REMOVE_ITEM=1]="REMOVE_ITEM",e[e.TOGGLE_SELECT=2]="TOGGLE_SELECT",e[e.FETCH_BEGIN=3]="FETCH_BEGIN",e[e.FETCH_FAILURE=4]="FETCH_FAILURE",e[e.FETCH_SUCCESS_REMOTE=5]="FETCH_SUCCESS_REMOTE",e[e.FETCH_SUCESS_LOCAL=6]="FETCH_SUCESS_LOCAL"}(t.ActionType||(t.ActionType={}));t.ActionType},function(e,t,n){"use strict";function r(e){function t(t,n){l.ajax(e).done(t).fail(n)}return new c.Promise(t)}function a(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return e.unshift({}),o.extend.apply(null,e)}function i(e){return!(void 0===e||null===e||o.isNaN(e))}var o=n(10),c=n(11),l=n(16);t.ajax=r,t.extend=a,t.doesExist=i},,,,,,,,function(e,t,n){"use strict";function r(){try{var e=localStorage.getItem(i.localStorageKey);if(o.doesExist(e)){var t=JSON.parse(e).items;return t.map(function(e){return c["default"].deserialize(e)})}return}catch(n){console.log(n)}}function a(e){var t=e.items,n={items:t.map(function(e){return e.serialize()})};try{localStorage.setItem(i.localStorageKey,JSON.stringify(n))}catch(r){console.log(r)}}var i=n(18),o=n(9),c=n(19);t.loadLocalItems=r,t.saveLocalState=a},function(e,t){"use strict";t.localStorageKey="huy-nguyen-restaurant-menu-builder"},function(e,t){"use strict";var n=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];this.isSelected=!0;var n=e[0],r=e[1];if(n.Category){var a=n,i=a.Category,o=a.Name,c=a.Description,l=a.Price,s=a.Vegetarian;this.category=i,this.name=o,this.description=c,this.price=l,this.isUndercooked=!!n["Undercooked Warning"],this.isVegetarian=!!s}else{var u=n,m=u.category,d=u.name,p=u.description,f=u.price,E=u.isUndercooked,g=u.isVegetarian;this.category=m,this.name=d,this.description=p,this.price=f,this.isUndercooked=E,this.isVegetarian=g}this.id=r}return e.prototype.clone=function(){return e.deserialize(this.serialize())},e.prototype.serialize=function(){var e=this,t=e.category,n=e.name,r=e.description,a=e.price,i=e.isUndercooked,o=e.isVegetarian,c=e.isSelected,l=e.id;return{category:t,name:n,description:r,price:a,isUndercooked:i,isVegetarian:o,isSelected:c,id:l}},e.deserialize=function(t){var n=t.category,r=t.name,a=t.description,i=t.price,o=t.isUndercooked,c=t.isVegetarian,l=t.isSelected,s=t.id;return new e({category:n,name:r,description:a,price:i,isUndercooked:o,isVegetarian:c,isSelected:l},s)},e}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function r(e){return o.getAvailableMenuItems(e.items)}function a(e){return o.getDisplayedItems(e.items)}var i=n(21),o=n(22),c=n(46),l=n(46),s=i.combineReducers({items:o["default"],fetchStatus:l["default"]});Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=s,t.getAvailableMenuItems=r,t.getDisplayedItems=a,t.getIsFetchingStatus=function(e){return c.getIsFetchingStatus(e.fetchStatus)},t.getErrorMessage=function(e){return c.getErrorMessage(e.fetchStatus)}},,function(e,t,n){"use strict";function r(e,t){var n,r=t.type,a=t.id;return e.id!==a?n=e:r===i.ActionType.REMOVE_ITEM?n=null:(n=e.clone(),n.isSelected=!e.isSelected),n}function a(e){return e.filter(function(e){return e.isSelected})}var i=n(8),o=n(19),c=n(10),l=n(23),s=n(9),u=function(e,t){void 0===e&&(e=[]);var n,a=t.type;if(a===i.ActionType.ADD_ITEM){var u=t.data,m=s.extend(u,{isSelected:!0}),d=new o["default"](m,l.v4());n=e.concat([d])}else if(a===i.ActionType.REMOVE_ITEM||a===i.ActionType.TOGGLE_SELECT){var p=e.map(function(e){return r(e,t)});n=c.compact(p)}else if(a===i.ActionType.FETCH_SUCCESS_REMOTE){var u=t.data;n=u.map(function(e){return new o["default"](e,l.v4())})}else if(a===i.ActionType.FETCH_SUCESS_LOCAL){var u=t.data;n=u}else n=e;return n};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u,t.getAvailableMenuItems=function(e){return e},t.getDisplayedItems=a},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(8),a=function(e,t){void 0===e&&(e={isFetching:!1,message:null});var n,a=t.type;if(a===r.ActionType.FETCH_BEGIN)n={isFetching:!0,message:null};else if(a===r.ActionType.FETCH_SUCESS_LOCAL||a===r.ActionType.FETCH_SUCCESS_REMOTE)n={isFetching:!1,message:null};else{if(a!==r.ActionType.FETCH_FAILURE)return e;var i=t.message;n={isFetching:!1,message:i}}return n};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,t.getIsFetchingStatus=function(e){return e.isFetching},t.getErrorMessage=function(e){return e.message}},function(e,t,n){e.exports=n.p+"a62138601ebaf354a4ab36548af79ce9.menu_items.json"},,function(e,t,n){"use strict";var r=n(2),a=n(50),i=function(e){var t=e.items,n=e.onClickCallback,i=e.onRemoveCallback,o=t.map(function(e){return r.createElement(a["default"],{item:e,onClick:n,onRemove:i,key:e.id})});return r.createElement("ul",null,o)};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i},function(e,t,n){"use strict";var r=n(2),a=n(51),i=function(e){var t=e.item,n=t.id,i=t.name,o=(t.category,t.description),c=(t.price,t.isUndercooked,t.isVegetarian,t.isSelected),l=e.onClick,s=e.onRemove,u=function(){return l(n)},m=function(){return s(n)},d=a("menu-item",{selected:c});return r.createElement("li",{onClick:u,className:d},r.createElement("button",{className:"btn btn-default",onClick:m}," Delete"),r.createElement("span",{className:"item-content"},r.createElement("span",{className:"h4 item-name"},i),": ",r.createElement("span",null,o)))};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i},,function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},a=n(2),i=n(10),o=function(e){function t(t){var n=this;e.call(this,t),this.onNameChange=function(e){n.setState({name:e.target.value})},this.onCategoryChange=function(e){n.setState({category:e.target.value})},this.onDescriptionChange=function(e){n.setState({description:e.target.value})},this.onUndercookedChange=function(e){n.setState({isUndercooked:e.target.checked})},this.onVegetarianChange=function(e){n.setState({isVegetarian:e.target.checked})},this.onSubmit=function(e){e.preventDefault(),n.props.addItemCallback(i.clone(n.state)),n.setState(n.getDefaultState())},this.state=this.getDefaultState()}return r(t,e),t.prototype.getDefaultState=function(){return{category:"",name:"",description:"",isUndercooked:!1,isVegetarian:!1,price:0}},t.prototype.render=function(){var e=this.state,t=e.category,n=e.name,r=e.description,i=e.isUndercooked,o=e.isVegetarian;return a.createElement("form",{className:"item-adder form-inline"},a.createElement("legend",null,"Add new menu item"),a.createElement("div",null,a.createElement("div",{className:"form-group"},a.createElement("label",{className:"sr-only",htmlFor:"item-input-name"},"Name: "),a.createElement("input",{type:"text",placeholder:"Name",className:"form-control",value:n,onChange:this.onNameChange,name:"Name",id:"item-input-name"})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"sr-only",htmlFor:"item-input-category"},"Category: "),a.createElement("input",{type:"text",placeholder:"Category",className:"form-control",value:t,onChange:this.onCategoryChange,name:"Category",id:"item-input-category"}))),a.createElement("div",null,a.createElement("div",{className:"form-group"},a.createElement("label",{className:"sr-only",htmlFor:"item-input-description"},"Description: "),a.createElement("input",{type:"text",placeholder:"Description",className:"form-control",value:r,onChange:this.onDescriptionChange,name:"Description",id:"item-input-description"})),a.createElement("div",{className:"checkbox"},a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:i,onChange:this.onUndercookedChange}),"Shows undercooked warning?")),a.createElement("div",{className:"checkbox"},a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:o,onChange:this.onVegetarianChange}),"Is Vegetarian?"))),a.createElement("div",null,a.createElement("button",{type:"submit",className:"btn btn-default",onClick:this.onSubmit},"Add Item")))},t}(a.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},function(e,t,n){"use strict";function r(e){return{selectedItems:o.getAvailableMenuItems(e).filter(function(e){return e.isSelected})}}var a=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(2),o=n(20),c=n(48),l=n(10),s=n(54),u=function(e){function t(){e.apply(this,arguments)}return a(t,e),t.prototype.render=function(){var e=this.props.selectedItems,t=l.groupBy(e,function(e){return e.category}),n=l.map(t,function(e,t){return i.createElement(s["default"],{name:t,items:e,key:t})});return i.createElement("div",{className:"col-md-6"},i.createElement("h2",null,"Menu Preview"),i.createElement("ul",null,n))},t}(i.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c.connect(r,null)(u)},function(e,t,n){"use strict";function r(e){var t=e.name,n=e.items,r=n.map(function(e){return a.createElement(i["default"],{item:e,key:e.id})});return a.createElement("li",{className:"category-preview"},a.createElement("h4",null,t),a.createElement("ul",null,r))}var a=n(2),i=n(55);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,n){"use strict";function r(e){var t,n=e.item,r=n.name,o=n.description,c=n.price,l=n.isUndercooked,s=n.isVegetarian,u=i.numberFormat(c,2);t=l?a.createElement("span",{className:"undercooked"},"May be undercooked"):null;var m;return m=s?a.createElement("span",{className:"vegetarian"},"Vegetarian"):null,a.createElement("li",{className:"item-preview"},a.createElement("h5",{className:"item-title"},r,a.createElement("small",null,"$",u)),a.createElement("p",{className:"item-description"},o),a.createElement("p",{className:"info"},m,t))}var a=n(2),i=n(56);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},,function(e,t,n){"use strict";function r(){var e;try{e=[c["default"]]}catch(t){if("ReferenceError"!==t.name)throw t;console.log(t),console.log('Must define the value of process.env.NODE_ENV global variable in webpack config. Treat as "development" for now.'),e=[c["default"],i()]}var n=a.applyMiddleware.apply(void 0,e),r=a.createStore(o["default"],{items:void 0,fetchStatus:void 0},n);return r}var a=n(21),i=n(58),o=n(20),c=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r}]);