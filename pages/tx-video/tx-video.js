// pages/tx-video/tx-video.js
var utilData = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sfee:"gesg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tx_videos = utilData.TxVideoData(options.id)
    console.log(tx_videos)
    this.setData({
      vid: tx_videos.vid,
      caption: tx_videos.caption,
      introduce: tx_videos.introduce,
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