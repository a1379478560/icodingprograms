//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    pics: [
      { url: 'https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/logo.jpg' },
      { url: 'https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/kechengtixi.jpg' },
      { url: 'https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/jiaoshituandui.jpg' },
      { url: 'https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shishixuexiao.jpg' },
      { url: 'https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/xueshenghuojiang.jpg' },
    ]
  },
  //事件处理函数
  bindTokc: function() {
    wx.switchTab({
      url: '../kecheng/kecheng',
      success: function () {
        console.log("切换页面成功！")
      },
      fail: function () {
        console.log("切换页面失败！")
      },
      complete: function () {
        console.log("complete！")
      }
    })
  },
  bindToonline: function () {
    wx.navigateTo({
      url: '../onlinecourse/onlinecourse',
      success: function () {
        console.log("切换页面成功！")
      },
      fail: function () {
        console.log("切换页面失败！")
      },
      complete:function(){
        console.log("complete！")
      }
    })
  },
  bindTomy: function () {
    wx.switchTab({
      url: '../my/my'
    })
  },
  
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '18132047093', 
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },




  bindTozixun1: function () {
    wx.navigateTo({
      url: '/pages/faxian/zixun/zixun1',
      success: function () {
        console.log("切换页面成功！")
      },
      fail: function () {
        console.log("切换页面失败！")
      },
      complete: function () {
        console.log("complete！")
      }
    })
  },
  bindTozixun2: function () {
    wx.navigateTo({
      url: '/pages/faxian/zixun/zixun2',
      success: function () {
        console.log("切换页面成功！")
      },
      fail: function () {
        console.log("切换页面失败！")
      },
      complete: function () {
        console.log("complete！")
      }
    })
  },
  bindTozixun3: function () {
    wx.navigateTo({
      url: '/pages/faxian/zixun/zixun3',
      success: function () {
        console.log("切换页面成功！")
      },
      fail: function () {
        console.log("切换页面失败！")
      },
      complete: function () {
        console.log("complete！")
      }
    })
  },




  onLoad: function () {
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {
    return {
      title: '青少年编程学院',
      desc: '青少年编程学院欢迎你!',
      path: 'pages/index/index'
    }
  }
})
