// pages/yuyueshiting/yuyueshiting.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  judgeinput:function(data) {
    if(data.name.length===0){
      wx.showToast({
        title: '姓名格式不正确',
        icon: 'succes',
        duration: 1500,
        mask: true
      })
      return 0
    }
    if(data.tel.length<11){
      wx.showToast({
        title: '电话格式不正确',
        icon: 'succes',
        duration: 1500,
        mask: true
      })
      return 0
    }
    if(data.age.length===0){
      //showtoast
      return 0
    }
    return 1
  },
  formSubmit: function (e) {
    var that=this
    var data = e.detail.value
    var smstime = wx.getStorageSync('smstime')
    var num = wx.getStorageSync('num')
    if(!num){num=0;}
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;

    console.log(smstime)
    console.log(num)
    console.log(timestamp)

    if (smstime){
      if (timestamp - smstime < 86400){//一天最多发3次短信
        if(num<3){
          num=num+1;
          wx.setStorage({
            key: 'num',
            data: num,
          })
          data["ifsms"] = "1"
        }else{
          data["ifsms"] = "0"
        }
      }else{
        wx.setStorage({
          key: 'num',
          data: 1,
        });
        wx.setStorage({
          key: 'smstime',
          data: timestamp,
        });
        data["ifsms"] = "1";
      }

    }else{
      wx.setStorage({
        key: 'num',
        data: 1,
      });
      wx.setStorage({
        key: 'smstime',
        data: timestamp,
      });
      data["ifsms"] = "1";
    }
    data['openid'] = wx.getStorageSync('openId');
    if(that.judgeinput(e.detail.value)===0){
      return
    }
    wx.request({
      // url: 'https://wx.4k12stem.com/yuyue', 
      // data: util.json2Form(data),
      url: 'https://wx.4k12stem.com/api/orderaudition/', 
      data: data,
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    wx.showToast({
      title: '预约成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  //事件处理函数
  bindViewTap: function () {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
