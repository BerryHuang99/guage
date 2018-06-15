// components/request-item/request-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    avatar: {
      type: String,
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    requestor: {
      type: String
    },
    reward: {
      type: Number
    },
    time: {
      type: String
    },
    requestClass: {
      type: String
    },
    requestId: {
      type: String
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
    toRequest: function() {
      wx.navigateTo({
        url: '/pages/request/request' + '?requestid=' + this.properties.requestId,
      })
    }
  }
})
