// pages/myDir/bindstu/bindstu.js
const app = getApp()
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  bindSubmit: function (e) {
    var data=e.detail.value
    data["openid"] = wx.getStorageSync('openId')
    wx.request({
      url: 'https://wx.4k12stem.com/api/bindstu/',
      method: 'post',
      data: util.json2Form(data),
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        var res_json=util.str2json(res.data)
        if (res_json["err_no"]==1){
          wx.showToast({
            title: '学生已被绑定',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        }
        else if (res_json["err_no"] == 2){
        wx.showToast({
          title: '学号不存在',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        }
        else{
          wx.showToast({
            title: '绑定成功',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        }
      }
    })

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log("****************************")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})





// // pages/myDir/bindstu/bindstu.js
// const app = getApp()
// var util = require('../../utils/util.js');
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   bindSubmit: function (e) {
//     wx.request({
//       url: 'http://api.4k12stem.com/api/bindstu',
//       method: 'post',
//       data: util.json2Form(data),
//       header: {
//         'content-type': 'application/x-www-form-urlencoded'
//       },
//       success: function (res) {
//         console.log(res.data)
//       }
//     })
//     wx.showToast({
//       title: '预约成功',
//       icon: 'succes',
//       duration: 1000,
//       mask: true
//     })
//     console.log('form发生了submit事件，携带数据为：', e.detail.value)
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     console.log("*********************************")
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
//     console.log("*********************************")
//   }
// })