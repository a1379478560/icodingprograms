// pages/faxian/faxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  bindTozixun1: function () {
    wx.navigateTo({
      url: 'zixun/zixun1',
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
      url: 'zixun/zixun2',
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
      url: 'zixun/zixun3',
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