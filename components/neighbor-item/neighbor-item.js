// components/neighbor-item/neighbor-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userId: {
      type: String,
      value: 0
    },
    avatar: {
      type: String
    },
    name: {
      type: String
    },
    address: {
      type: String,
      value: "未公开"
    },
    phone: {
      type: String,
      value: ""
    },
    credit: {
      type: Number
    },
    thumbUp: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail: function() {
      this.triggerEvent("tapEvent");
    }
  }
})
