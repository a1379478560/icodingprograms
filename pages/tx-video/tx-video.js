// pages/tx-video/tx-video.js
var utilData = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  to_tx_video: function (event) {
    wx.navigateTo({
      url: '../tx-video/tx-video?id=' + event.currentTarget.id,
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var tx_videos = utilData.TxVideoData(options.id)
    console.log(tx_videos)
    this.setData({
      vid: tx_videos.vid,
      caption: tx_videos.caption,
      introduce: tx_videos.introduce,
      teacher_intro:tx_videos.teacher_intro,
      teacher_pic: tx_videos.teacher_pic,
      show_teacher: tx_videos.show_teacher,
    }) 
    wx.setNavigationBarTitle({
      title: that.data.caption//页面标题为路由参数
    })
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