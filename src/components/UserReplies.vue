<template>
    <div class="profile-nav-list scrollbar">
      <div class="reply d-flex" 
        v-for="reply in replies" :key="reply.id">
        <!--待串接後用v-bind改為使用者img-->
        <img src="../assets/images/logo-gray.png" class="user-img" alt="" />

        <div class="reply-list-text d-flex flex-column">
          <div class="tweet-list-tweet-top d-flex align-items-center">
            <div class="tweet-user-name">
              {{ reply.name }}
            </div>
            <div class="tweet-user-account">
              {{ reply.account | addPrefix }}
            </div>
            <span>・</span>
            <div class="tweet-user-createdAt">
              {{ reply.createdAt | fromNow }}
            </div>
          </div>
          <div class="tweet-account">
            <span class="reply-span">回覆</span>
            {{ reply.account | addPrefix }}
          </div>
          <div class="tweet-contentText">
            {{ reply.contentText }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

export default {
  name: "userReplies",
  mixins: [fromNowFilter],
  props: {
    //從views/ReplyList帶入dummydata，待串接API以及點擊功能id===id
    initialReplies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      replies: this.initialReplies,
    };
  },

  filters: {
    addPrefix(account) {
      if (!account) {
        return "未提供帳號資訊";
      } else {
        return `@${account}`;
      }
    },
  },
};
</script>


