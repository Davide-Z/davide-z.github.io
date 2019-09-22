(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{269:function(e,t,n){"use strict";var o=n(0);t.a=o.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(e,t){var data=t.data,n=t.props,o=t.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),n.primaryTitle&&(data.staticClass+=" v-card__title--primary"),e("div",data,o)}})},270:function(e,t,n){"use strict";n(271),n(273);var o=n(14);n(17);var r=n(0).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(e={},t="elevation-"+this.computedElevation,n=!0,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e):{};var e,t,n}}}),l=n(119),c=n(12),d=n(3),v=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e},h=Object(d.a)(o.a,r,l.a,c.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return v({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(e){var data={class:this.classes,style:this.styles,on:this.$listeners};return e(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),m=n(62),f=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e};t.a=Object(d.a)(m.a,h).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return f({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},h.options.computed.classes.call(this))},styles:function(){var style=f({},h.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(e){var t=this.generateRouteLink(this.classes),n=t.tag,data=t.data;return data.style=this.styles,e(n,this.setBackgroundColor(this.color,data),this.$slots.default)}})},271:function(e,t,n){var content=n(272);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("be70614c",content,!0,{sourceMap:!1})},272:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".theme--light.v-card{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-card{background-color:#424242;border-color:#424242;color:#fff}.v-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);text-decoration:none}.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;padding:16px}.v-card__title--primary{padding-top:24px}.v-card__text{padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn,.v-card__actions>*{margin:0}.v-card__actions .v-btn+.v-btn{margin-left:8px}",""])},273:function(e,t,n){var content=n(274);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("74d835da",content,!0,{sourceMap:!1})},274:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}",""])},275:function(e,t,n){var content=n(291);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("2aa00faf",content,!0,{sourceMap:!1})},276:function(e,t,n){var content=n(277);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("685e80da",content,!0,{sourceMap:!1})},277:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,'.theme--light.v-chip{background:#e0e0e0;color:rgba(0,0,0,.87)}.theme--light.v-chip--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-chip{background:#555;color:#fff}.theme--dark.v-chip--disabled{color:hsla(0,0%,100%,.5)}.application--is-rtl .v-chip__close{margin:0 8px 0 2px}.application--is-rtl .v-chip--removable .v-chip__content{padding:0 12px 0 4px}.application--is-rtl .v-chip--select-multi{margin:4px 0 4px 4px}.application--is-rtl .v-chip .v-avatar{margin-right:-12px;margin-left:8px}.application--is-rtl .v-chip .v-icon--right{margin-right:12px;margin-left:-8px}.application--is-rtl .v-chip .v-icon--left{margin-right:-8px;margin-left:12px}.v-chip{font-size:13px;margin:4px;outline:none;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-chip,.v-chip .v-chip__content{align-items:center;border-radius:28px;display:inline-flex;vertical-align:middle}.v-chip .v-chip__content{cursor:default;height:32px;justify-content:space-between;padding:0 12px;white-space:nowrap;z-index:1}.v-chip--removable .v-chip__content{padding:0 4px 0 12px}.v-chip .v-avatar{height:32px!important;margin-left:-12px;margin-right:8px;min-width:32px;width:32px!important}.v-chip .v-avatar img{height:100%;width:100%}.v-chip--active,.v-chip--selected,.v-chip:focus:not(.v-chip--disabled){border-color:rgba(0,0,0,.13);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--active:after,.v-chip--selected:after,.v-chip:focus:not(.v-chip--disabled):after{background:currentColor;border-radius:inherit;content:"";height:100%;position:absolute;top:0;left:0;transition:inherit;width:100%;pointer-events:none;opacity:.13}.v-chip--label,.v-chip--label .v-chip__content{border-radius:2px}.v-chip.v-chip.v-chip--outline{background:transparent!important;border:1px solid;color:#9e9e9e;height:32px}.v-chip.v-chip.v-chip--outline .v-avatar{margin-left:-13px}.v-chip--small{height:24px!important}.v-chip--small .v-avatar{height:24px!important;min-width:24px;width:24px!important}.v-chip--small .v-icon{font-size:20px}.v-chip__close{align-items:center;color:inherit;display:flex;font-size:20px;margin:0 2px 0 8px;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__close>.v-icon{color:inherit!important;font-size:20px;cursor:pointer;opacity:.5}.v-chip__close>.v-icon:hover{opacity:1}.v-chip--disabled .v-chip__close{pointer-events:none}.v-chip--select-multi{margin:4px 4px 4px 0}.v-chip .v-icon{color:inherit}.v-chip .v-icon--right{margin-left:12px;margin-right:-8px}.v-chip .v-icon--left{margin-left:-8px;margin-right:12px}',""])},278:function(e,t,n){var content=n(279);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("e521ab94",content,!0,{sourceMap:!1})},279:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){margin-left:72px;max-width:calc(100% - 72px)}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""])},283:function(e,t,n){e.exports=n.p+"img/7000b4d.png"},284:function(e,t,n){e.exports=n.p+"img/9af3d1c.jpg"},285:function(e,t,n){e.exports=n.p+"img/18cb027.png"},286:function(e,t,n){e.exports=n.p+"img/baeebee.jpg"},287:function(e,t,n){e.exports=n.p+"img/0577877.png"},288:function(e,t,n){e.exports=n.p+"img/7397700.jpg"},289:function(e,t,n){e.exports=n.p+"img/87093bb.jpg"},290:function(e,t,n){"use strict";var o=n(275);n.n(o).a},291:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".rounded-card{border-radius:20px}",""])},292:function(e,t,n){"use strict";n(118),n(276);var o=n(3),r=n(63),l=n(14),c=n(12),d=n(45),v=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e};t.a=Object(o.a)(l.a,c.a,d.a).extend({name:"v-chip",props:{close:Boolean,disabled:Boolean,label:Boolean,outline:Boolean,selected:Boolean,small:Boolean,textColor:String,value:{type:Boolean,default:!0}},computed:{classes:function(){return v({"v-chip--disabled":this.disabled,"v-chip--selected":this.selected&&!this.disabled,"v-chip--label":this.label,"v-chip--outline":this.outline,"v-chip--small":this.small,"v-chip--removable":this.close},this.themeClasses)}},methods:{genClose:function(e){var t=this;return e("div",{staticClass:"v-chip__close",on:{click:function(e){e.stopPropagation(),t.$emit("input",!1)}}},[e(r.a,"$vuetify.icons.delete")])},genContent:function(e){return e("span",{staticClass:"v-chip__content"},[this.$slots.default,this.close&&this.genClose(e)])}},render:function(e){var data=this.setBackgroundColor(this.color,{staticClass:"v-chip",class:this.classes,attrs:{tabindex:this.disabled?-1:0},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),t=this.textColor||this.outline&&this.color;return e("span",this.setTextColor(t,data),[this.genContent(e)])}})},293:function(e,t,n){"use strict";n(278);var o=n(12),r=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e};t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){return e("hr",{class:r({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:this.$attrs,on:this.$listeners})}})},294:function(e,t,n){var content=n(295);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("8af89530",content,!0,{sourceMap:!1})},295:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,'.theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#424242}.theme--dark.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.v-timeline-item{display:flex;flex-direction:row-reverse;padding-bottom:24px}.v-timeline-item--left,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right){flex-direction:row}.v-timeline-item--left .v-card:after,.v-timeline-item--left .v-card:before,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:after,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:before{-webkit-transform:rotate(180deg);transform:rotate(180deg);left:100%}.v-timeline-item--left .v-timeline-item__opposite,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-timeline-item__opposite{margin-left:96px;text-align:left}.v-timeline-item--left .v-timeline-item__opposite .v-card:after,.v-timeline-item--left .v-timeline-item__opposite .v-card:before,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-timeline-item__opposite .v-card:after,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-timeline-item__opposite .v-card:before{-webkit-transform:rotate(0);transform:rotate(0);left:-10px}.v-timeline-item--right .v-card:after,.v-timeline-item--right .v-card:before,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-card:after,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-card:before{right:100%}.v-timeline-item--right .v-timeline-item__opposite,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-timeline-item__opposite{margin-right:96px;text-align:right}.v-timeline-item--right .v-timeline-item__opposite .v-card:after,.v-timeline-item--right .v-timeline-item__opposite .v-card:before,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-timeline-item__opposite .v-card:after,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-timeline-item__opposite .v-card:before{-webkit-transform:rotate(180deg);transform:rotate(180deg);right:-10px}.v-timeline-item__dot,.v-timeline-item__inner-dot{border-radius:50%}.v-timeline-item__dot{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);align-self:center;position:absolute;height:38px;left:calc(50% - 19px);width:38px}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{display:flex;justify-content:center;align-items:center}.v-timeline-item__body{position:relative;height:100%;flex:1 1 100%;max-width:calc(50% - 48px)}.v-timeline-item .v-card:after,.v-timeline-item .v-card:before{content:"";position:absolute;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #000;top:calc(50% - 10px)}.v-timeline-item .v-card:after{border-right-color:inherit}.v-timeline-item .v-card:before{top:calc(50% - 8px)}.v-timeline-item__opposite{flex:1 1 auto;align-self:center;max-width:calc(50% - 48px)}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:"";height:100%;left:calc(50% - 1px);position:absolute;top:0;width:2px}.v-timeline--align-top .v-timeline-item{position:relative}.v-timeline--align-top .v-timeline-item__dot{top:6px}.v-timeline--align-top .v-timeline-item__dot--small{top:12px}.v-timeline--align-top .v-timeline-item__dot--large{top:0}.v-timeline--align-top .v-timeline-item .v-card:before{top:12px}.v-timeline--align-top .v-timeline-item .v-card:after{top:10px}.v-timeline--dense:before{left:18px}.v-timeline--dense .v-timeline-item--left,.v-timeline--dense .v-timeline-item:nth-child(odd):not(.v-timeline-item--right){flex-direction:row-reverse}.v-timeline--dense .v-timeline-item--left .v-card:after,.v-timeline--dense .v-timeline-item--left .v-card:before,.v-timeline--dense .v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:after,.v-timeline--dense .v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:before{right:auto;left:-10px;-webkit-transform:none;transform:none}.v-timeline--dense .v-timeline-item__dot{left:0}.v-timeline--dense .v-timeline-item__dot--small{left:7px}.v-timeline--dense .v-timeline-item__dot--large{left:-7px}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 64px)}.v-timeline--dense .v-timeline-item__opposite{display:none}',""])},319:function(e,t,n){"use strict";var o=n(1),r=n(270),l=n(261),c=n(8),d=l.a.extend({name:"v-card-media",mounted:function(){Object(c.c)("v-card-media",this.src?"v-img":"v-responsive",this)}}),v=n(269);n.d(t,"a",function(){return h}),n.d(t,"b",function(){return m});var h=Object(o.d)("v-card__actions"),m=Object(o.d)("v-card__text");r.a,v.a},325:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{educations:[{school:"ENSAE ParisTech",degree:"MSc in Statistics",description:"French engineering school specialised in economy 📈 and statistics 📊.",year:"2018 - 2020",courses:["Machine learning 🤖","Stochastic process 📉","Statistics 📊","Econometry 📋","Financial economy 💹","Game theory 🃏"],color:"#ba1919",image:n(284),logo:n(285),show:!1},{school:"Télécom SudParis",degree:"MSc in Computer Science",description:"French engineering school specialised in telecommunication 📡 and computer science 💻.",year:"2016 - 2018",courses:["Probability 🎲","Scientific calculus 🧮","Statistical learning 📊","Data stream programming ▶️","Software engineering ⌨️","Relational algebra ♾️"],color:"#2c4174",image:n(286),logo:n(287),show:!1},{school:"Lycée Charlemagne",degree:"🇫🇷 Prepa - MPSI/MP*",description:"Paris 4th arrondissement french preparatory class for engineering school entrance exams 📝.",year:"2014 - 2016",courses:["Mathematics 🧮","Physics ⚛️","Engineering Science 💡","Chemistry ⚗️"],color:"#eb643a",image:n(288),logo:n(283),show:!1},{school:"Lycée Charlemagne",degree:"🇫🇷 A-Level - Scientific",description:"Paris 4th arrondissement secondary school 📖.",year:"2011 - 2014",courses:["Mathematics 🧮","Physics ⚛️","Biology 🧫","Philosophy 🤔","Geography 🗺️","History 📜"],color:"#eb643a",image:n(289),logo:n(283),show:!1}]}}},r=(n(290),n(29)),l=n(61),c=n.n(l),d=n(111),v=n(270),h=n(319),m=n(269),f=n(292),x=n(293),_=n(109),y=n(112),w=n(261),C=n(110),k=n(158),B=n(263),O=(n(294),n(3)),j=n(12),S=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e},$=Object(O.a)(j.a).extend({name:"v-timeline",props:{alignTop:Boolean,dense:Boolean},computed:{classes:function(){return S({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),P=(n(118),n(63)),V=n(14),E=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e},M=Object(O.a)(V.a,j.a).extend({name:"v-timeline-item",props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(P.a,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var data=this.setBackgroundColor(this.color);return this.$createElement("div",E({staticClass:"v-timeline-item__inner-dot"},data),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody()];return this.hideDot||t.unshift(this.genDot()),this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:E({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--left":this.left,"v-timeline-item--right":this.right},this.themeClasses)},t)}}),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{md10:""}},[n("v-timeline",{attrs:{dense:e.$vuetify.breakpoint.smAndDown}},e._l(e.educations,function(t,i){return n("v-timeline-item",{key:i,attrs:{color:"secondary"},scopedSlots:e._u([{key:"opposite",fn:function(){return[n("span",{staticClass:"font-weight-bold",domProps:{textContent:e._s(t.year)}})]},proxy:!0}],null,!0)},[n("v-card",{staticClass:"rounded-card",attrs:{elevation:"24"}},[n("v-img",{attrs:{src:t.image,height:"200"}}),e._v(" "),n("v-card-title",[n("div",[n("div",{staticClass:"title"},[e._v(e._s(t.school))]),e._v(" "),n("span",{staticClass:"subtitle"},[e._v("\n                "+e._s(t.degree)+"\n                "),n("br")]),e._v(" "),n("span",{staticClass:"hidden-md-and-up"},[e._v(" ("+e._s(t.year)+") ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-img",{attrs:{src:t.logo,height:"100",contain:""}})],1),e._v(" "),n("v-divider",{attrs:{inset:""}}),e._v(" "),n("v-card-text",[e._v(e._s(t.description))]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:""},on:{click:function(e){t.show=!t.show}}},[e._v("\n              Courses\n              "),n("v-icon",[e._v("\n                "+e._s(t.show?"keyboard_arrow_up":"keyboard_arrow_down")+"\n              ")])],1)],1),e._v(" "),n("v-slide-y-transition",[n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"education.show"}]},e._l(t.courses,function(o,i){return n("v-chip",{key:i,attrs:{color:t.color,"text-color":"white"}},[e._v("\n                "+e._s(o)+"\n              ")])}),1)],1)],1)],1)}),1)],1)],1)},[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCardTitle:m.a,VChip:f.a,VDivider:x.a,VFlex:_.a,VIcon:y.a,VImg:w.a,VLayout:C.a,VSlideYTransition:k.b,VSpacer:B.a,VTimeline:$,VTimelineItem:M})}}]);