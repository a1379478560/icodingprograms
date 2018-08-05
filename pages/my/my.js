// pages/my/my.js
//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onShow: function () {
    this.getStuInfo()
    this.getStuStatus()
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getStuInfo:function(){
    wx.request({
      url: 'https://wx.4k12stem.com/api/getinfo/',
      method: 'post',
      data: {
        'openid': wx.getStorageSync('openId'),
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        //console.log(res.data)
        var res_json = util.str2json(res.data);
          if (res_json["err_no"] === 0) {
            this.setData({
              hasStuInfo: true,
              stuName: res_json["name"],
              stuId: res_json["stuid"]
            })
          } else {
            this.setData({
              hasStuInfo: false,
            })
          }
        }
      }
    )
  },
  bindTosignin: function () {   //签到
    wx.request({
      url: 'https://wx.4k12stem.com/api/signin/',
      method: 'post',
      data: {
        'openid': wx.getStorageSync('openId'),
        'operation':"signIn",
        "feedback":"0",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    this.getStuStatus();//刷新数据
  }, 
  bindToLeave: function () {     //请假
    wx.request({
      url: 'https://wx.4k12stem.com/api/signin/',
      method: 'post',
      data: {
        'openid': wx.getStorageSync('openId'),
        'operation': "leave",
        "feedback": "0",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    this.getStuStatus(); //刷新数据
  },


  feedbackSubmit: function (e) {  //反馈
    var that = this
    wx.request({
      url: 'https://wx.4k12stem.com/api/signin/',
      method: 'post',
      data:{
        openid: wx.getStorageSync('openId'),
        operation: 'feedback',
        feedback:e.detail.value.feedback,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '反馈成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      },
      fail:function(res){
        wx.showToast({
          title: '网络出问题了',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      }
    })
    console.log('feedback：form发生了submit事件，携带数据为：', e.detail.value)
  },


  bindToFeedback: function () {     
    wx.request({
      url: 'https://wx.4k12stem.com/api/signin/',
      method: 'post',
      data: {
        'openid': wx.getStorageSync('openId'),
        'operation': "leave",
        "feedback": "0",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  bindTobindstu: function () {
    wx.navigateTo({
      url: '../myDir/bindstu/bindstu',
    })
    
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
  //获取绑定的学生信息存到data
    this.getStuInfo()
    this.getLessonNote();
  },
  getLessonNote: function () {   //获取讲义内容然后setData
    wx.request({
      url: 'https://wx.4k12stem.com/api/getlessonNote/',
      method: 'post',
      data: {
        'openid': wx.getStorageSync('openId'),
        'operation': "leave",
        "feedback": "0",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:  res=> {
        console.log(res.data)
        var res_json = util.str2json(res.data);
        wx.setStorageSync('LessonNoteErr_no', res_json['err_no']);
        wx.setStorageSync('lessonNote', res_json['lessonrecord']);
        this.setData({
          LessonNoteErr_no: res_json['err_no'],
          lessonNote: res_json['lessonrecord'],  
        })
      }
    })
  },
  bindToSeeLessonNote:function(){   //查看讲义按钮
    console.log(this.data.lessonNote)
    wx.downloadFile({
      url: this.data.lessonNote[0]['note_pic'],
      success: function (res) {
        console.log(res.tempFilePath)
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          },
          fail:res=>{
          wx.showToast({
            title: '暂时没有讲义',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
            console.log('打开文档失败')
          },
        })
      },
      fail: res => {
        wx.showToast({
          title: '暂时没有讲义',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        },
    },
    )
  },
  getStuStatus: function () {   //获取学生的参加课程，请假，签到,教师评价,上课时间状态
    wx.request({
      url: 'https://wx.4k12stem.com/api/getstustatus/',
      method: 'post',
      data: {
        'openid': wx.getStorageSync('openId'),
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        console.log(res.data)
        var res_json = util.str2json(res.data);
        wx.setStorageSync('Class', res_json['Class']);
        wx.setStorageSync('isLeave', res_json['isLeave']);
        wx.setStorageSync('isSignin', res_json['isSignin']);
        wx.setStorageSync('teacher_evaluation', res_json['teacher_evaluation']);
        wx.setStorageSync('LessonTime', res_json['LessonTime']);
        this.setData({
          Class: res_json['Class'],
          isSignin: res_json['isSignin'],
          isLeave: res_json['isLeave'],
          teacher_evaluation: res_json['teacher_evaluation'],
          LessonTime:res_json['LessonTime'],
        })
        console.log(this.data.LessonTime)
      }
    })
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
