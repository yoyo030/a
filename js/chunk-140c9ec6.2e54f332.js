(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-140c9ec6"],{"8fcb":function(t,e,s){"use strict";s("e9a0")},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container d-flex justify-content-center w100"},[e("div",{staticClass:"w100 leftSection"},[e("NavBar")],1),e("div",{staticClass:"w100 centerSection"},[e("h4",{staticClass:"setting-title main-title"},[t._v("首頁")]),e("TweetList")],1),e("div",{staticClass:"w100 rightSection"},[e("RecommandedList")],1)])},a=[],n=s("d000"),r=s("8fd6"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-tweet-container"},[e("div",{staticClass:"home-tweet-box"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"tweet-list-tweet-img",attrs:{src:t._f("emptyImage")(t.currentUser.avatar),alt:""}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"home-tweet-input",attrs:{type:"text",name:"home-tweet-input",placeholder:"有什麼新鮮事？"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.textWarn,expression:"textWarn"}],staticClass:"warn"},[t._v("字數不可超過140字")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noInputWarn,expression:"noInputWarn"}],staticClass:"warn"},[t._v("內容不可空白")]),e("button",{staticClass:"home-tweet-button",attrs:{disabled:t.isLoading},on:{click:t.handleSubmit}},[t._v(" 推文 ")])])]),e("div",{staticClass:"tweet-list scrollbar"},t._l(t.tweets,(function(i){return e("div",{key:i.id,staticClass:"tweet d-flex"},[e("router-link",{attrs:{to:{name:"user-profile",params:{id:i.User.id}}}},[e("img",{staticClass:"tweet-list-tweet-img",attrs:{src:t._f("emptyImage")(i.User.avatar),alt:""}})]),e("div",{staticClass:"tweet-list-text d-flex flex-column"},[e("div",{staticClass:"tweet-list-tweet-top d-flex align-items-center"},[e("router-link",{attrs:{to:{name:"user-profile",params:{id:i.User.id}}}},[e("div",{staticClass:"tweet-user-name"},[t._v(" "+t._s(i.User.name)+" ")])]),e("div",{staticClass:"tweet-user-account"},[t._v(" "+t._s(t._f("addPrefix")(i.User.account))+" ")]),e("span",[t._v("・")]),e("div",{staticClass:"tweet-user-createdAt"},[t._v(" "+t._s(t._f("fromNow")(i.createdAt))+" ")])],1),e("router-link",{staticClass:"user-tweets",attrs:{to:{name:"reply-list",params:{id:i.id}}}},[e("div",{staticClass:"tweet-contentText"},[t._v(" "+t._s(t._f("sliceTweet")(i.description))+" ")])]),e("div",{staticClass:"tweet-action d-flex"},[e("div",{staticClass:"tweet-reply d-flex"},[e("img",{staticClass:"icon cursor-pointer",attrs:{src:s("8e95"),alt:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.openModal(i)}}}),e("div",{staticClass:"tweet-reply-amount number-font"},[t._v(" "+t._s(i.replyCount)+" ")])]),e("div",{staticClass:"tweet-like d-flex"},[i.islike?e("img",{staticClass:"icon cursor-pointer",attrs:{src:s("8f77"),alt:""},on:{click:function(e){return t.unlike(i)}}}):e("img",{staticClass:"icon like-icon cursor-pointer",attrs:{src:s("0c40"),alt:""},on:{click:function(e){return t.like(i)}}}),e("div",{staticClass:"tweet-like-amount number-font"},[t._v(" "+t._s(i.likeCount)+" ")])])])],1)],1)})),0),t.show?e("ReplyModal",{key:t.tweetKey,attrs:{tweet:t.tweet},on:{close:t.closeModal}}):t._e()],1)},c=[],l=(s("d9e2"),s("2708")),u=s("2f62"),d=s("7696"),w=s("2fa3"),m=s("2797"),h={name:"TweetList",mixins:[l["b"],l["a"]],components:{ReplyModal:m["a"]},data(){return{tweets:[],show:!1,tweet:{},tweetKey:0,text:"",textWarn:!1,noInputWarn:!1,isLoading:!1}},filters:{addPrefix(t){return t?"@"+t:"未提供帳號資訊"},sliceTweet(t){return t.length>110?t.slice(0,110)+"...繼續閱讀":t}},methods:{openModal(t){this.tweet=t,this.tweetKey=this.tweetKey+1,this.show=!0},closeModal(){this.show=!1},async like(t){try{t.islike=!0,t.likeCount=t.likeCount+1;const e=await d["a"].likeTweets(this.currentUser.id,t.id),s=e.data;if(s.status&&"success"!==s.status)throw new Error(s.message);w["a"].fire({icon:"success",title:"按讚成功!"})}catch(e){console.log(e),w["a"].fire({icon:"warning",title:e.message})}},async unlike(t){try{t.islike=!1,t.likeCount=t.likeCount-1;const e=await d["a"].unlikeTweets(this.currentUser.id,t.id),s=e.data;if(s.status&&"success"!==s.status)throw new Error(s.message);w["a"].fire({icon:"success",title:"成功收回讚!"})}catch(e){console.log(e),w["a"].fire({icon:"warning",title:e.message})}},clickOnReply(t){this.show=!0,this.tweetForModal=this.tweets.filter(e=>e.id===t),console.log(t),console.log(this.tweetForModal)},async fetchTweets(){try{const t=await d["a"].getTweets(),e=t.data;if(e.status&&"success"!==e.status)throw new Error(e.message);this.tweets=e}catch(t){console.log(t),w["a"].fire({icon:"warning",title:"資料載入失敗 !"})}},async handleSubmit(){try{if(this.text.trim().length>140)return this.isLoading=!1,this.noInputWarn=!1,this.textWarn=!0;if(0===this.text.trim().length)return this.textWarn=!1,this.isLoading=!1,this.noInputWarn=!0;const t=await d["a"].insertTweets(this.text),e=t.data;if(console.log(e),e.status&&"success"!==e.status)throw new Error(e.message);w["a"].fire({icon:"success",title:"推文成功 !"}),this.$router.go(this.$router.currentRoute)}catch(t){console.log(t),w["a"].fire({icon:"error",title:t.message})}}},created(){this.fetchTweets()},computed:{...Object(u["b"])(["currentUser","isAuthenticated"])}},f=h,v=(s("8fcb"),s("2877")),p=Object(v["a"])(f,o,c,!1,null,"ae395142",null),g=p.exports,C={name:"Home",components:{NavBar:n["a"],RecommandedList:r["a"],TweetList:g}},x=C,k=Object(v["a"])(x,i,a,!1,null,null,null);e["default"]=k.exports},e9a0:function(t,e,s){}}]);
//# sourceMappingURL=chunk-140c9ec6.2e54f332.js.map