// components/left-dialog/left-dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    from: {
      type: String
    },
    content: {
      type: String
    },
    time: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    modal: true,
    input: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModal: function() {
      this.setData({modal: false});
    },
    cancelModal: function() {
      this.setData({modal: true});
    },
    confirmModal: function() {
      if (this.data.input) {
        let date = new Date();
        let dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + (date.getHours() + 1) + ':' + (date.getMinutes() + 1) + ':' + (date.getSeconds() + 1);
        let param = {
          type: 'outer',
          sendTo: this.properties.from,
          content: this.data.input,
          time: dateString,
        };
        this.triggerEvent("confirm", param);
        this.setData({input: '', modal: true});
      } else {
        wx.showToast({
          title: '',
          icon: 'none',
          duration: 2000
        })
      }
    },
    inputMessage: function(e) {
      if (e.detail) {
        this.setData({"input": e.detail.value});
      }
    }
  }
})
