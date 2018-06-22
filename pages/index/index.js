//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    communityModal: true,
    community: '',
    userInfo: {},
    hasUserInfo: false,
    load: true,
    spinAnimation: {},
    turningAnimation: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    provinces: ['请选择省份', '北京市', '上海市', '天津市', '重庆市', '河北省', '山西省', '内蒙古省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西省', '海南省', '四川省', '贵州省', '云南省', '西藏省', '陕西省', '甘肃省', '宁夏省', '青海省', '新疆省', '香港', '澳门', '台湾'],
    customItem: '全部',
    region: ['省份', '城市', '区县', '选择社区'],
    communities: {
      '北京市': {
        '东城区': ['小区1', '小区2'],
      },
      '沈阳市': {
        '和平区': ['社区1', '社区2'],
      }
    },
    recentRequests: [
      {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKrOslZrHKk2yTIX2snNbpQ43RAqHUgeHVmf9dbJVuibjrGIZvVCBxck6tj1ic8fcTXzibh15ic7EoQ5g/132',
        name: '孑岳🤓',
        title: '帮忙做家务',
        content: '地点在A号楼X单元，时间是下午14:00-15:00。帮忙扫地。',
        reward: 25,
        time: '2018-06-08',
        requestClass: '家政',
        state: '待帮忙',
        credit: '较高',
        requestId: '0001'
      },
      {
        avatar: '/resources/01.jpg',
        name: '小虫',
        title: '领快递',
        content: '快递在A号楼X单元蜂巢快递箱****************************************',
        reward: 5,
        time: '2018-06-08',
        requestClass: '代领',
        state: '待帮忙',
        credit: '较高',
        requestId: '0001'
      },
      {
        avatar: '/resources/02.jpg',
        name: 'C++',
        title: '帮忙买一下菜',
        content: '需要猪里脊半斤，猪排骨一斤，嫩豆腐一块，海带一小袋，小白菜一包',
        reward: 10,
        time: '2018-06-08',
        requestClass: '采购',
        state: '待帮忙',
        credit: '较高',
        requestId: '0001'
      },
      {
        avatar: '/resources/03.jpg',
        name: '刘洋',
        title: '看护老人',
        content: '**点**分到**点**分在A号楼**栋**号看护一下老人，扶老人去厕所、休息',
        reward: 50,
        time: '2018-06-08',
        requestClass: '看护',
        state: '待帮忙',
        credit: '较高',
        requestId: '0001'
      }
    ]
  },
  onLoad: function () {
    wx.hideTabBar();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function() {
    let spin = wx.createAnimation({
      duration: 500,
      delay: 500,
      timingFunction: 'ease'
    })
    let turn = wx.createAnimation({
      duration: 300,
      delay: 1500
    })
    spin.rotate(360).step()
    this.setData({spinAnimation: spin.export()})
    turn.skew(45, 45).step()
    this.setData({turningAnimation: turn.export()})
    setTimeout(() => {
      this.setData({ load: false });
      if (wx.getLocation && this.data.region[2] == "区县" && !this.data.hasUserInfo) {
        wx.getLocation({
          success: res => {
            wx.request({
              url: 'https://api.map.baidu.com/geocoder/v2/?ak=	ea2oSfMq3yhVbxK59OmnfpMP8SlVs0ho&location=' + res.latitude + ',' + res.longitude + '&output=json',
              data: {},
              header: {
                'Content-Type': 'application/json'
              },
              success: res => {
                // success
                if (res.data.result) {
                  let address = res.data.result.addressComponent;
                  this.setData({region: [address.province, address.city, address.district, '选择社区']});
                }
              },
            })  
          },
        })
      } else {
        wx.showTabBar();
      }
    }, 1800);
  },
  getUserInfo: function(e) {
    if (this.data.region[3] != '选择社区') {
      if (e.detail.userInfo) {
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        });
        // request
        wx.showTabBar();
        wx.showTabBarRedDot({
          index: 1,
        });
      } else {
        wx.showToast({
          title: '授权失败',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      wx.showToast({
        title: '请完善社区信息',
        icon: 'none',
        duration: 3000
      })
    }
  },
  bindRegionChange: function (e) {
    e.detail.value.push('选择社区')
    this.setData({
      region: e.detail.value
    })
  },
  bindCommunityChange: function (e) {
      let r = this.data.communities[this.data.region[1]][this.data.region[2]][e.detail.value];
      this.data.region[3] = r;
      this.setData({region: this.data.region});
  },
  activateCommunityModal: function() {
    if (this.data.region[2] != '区县') {
      this.setData({communityModal: false});
    } else {
      wx.showToast({
        title: '请选择地区',
        icon: 'none',
        duration: 3000
      })
    }
  },
  addCommunity: function() {
    if (this.data.community) {
      this.data.region[3] = this.data.community;
      if (!this.data.communities.hasOwnProperty(this.data.region[1])) {
        this.data.communities[this.data.region[1]] = {};
      }
      if (!this.data.communities[this.data.region[1]][this.data.region[2]]) {
        this.data.communities[this.data.region[1]][this.data.region[2]] = [];
      }
      if (!this.data.communities[this.data.region[1]][this.data.region[2]].includes(this.data.community)) {
        this.data.communities[this.data.region[1]][this.data.region[2]].push(this.data.community);
        this.setData({region: this.data.region});
        this.setData({communities: this.data.communities});
        this.setData({communityModal: true});
      } else {
        wx.showToast({
          title: '该社区已存在',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      wx.showToast({
        title: '社区名不可为空',
        icon: 'none',
        duration: 2000
      })
    }
  },
  inputCommunity: function(e) {
    this.setData({community: e.detail.value});
  },
  cancelCommunityModal: function() {
    this.setData({communityModal: true});
  },
  toRequestList: function() {
    wx.navigateTo({
      url: '/pages/request-list/request-list',
    });
  },
  toWaiting: function() {
    wx.navigateTo({
      url: '/pages/waiting/waiting',
    })
  },
  toRequest: function() {
    wx.navigateTo({
      url: '/pages/request/request',
    })
  },
  toHistory: function() {
    wx.navigateTo({
      url: '/pages/history/history',
    })
  },
  toSendRequest: function() {
    wx.navigateTo({
      url: '/pages/send-request/send-request',
    })
  }
})
