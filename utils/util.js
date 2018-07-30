module.exports = {
  formatTime: formatTime,
  TxVideoData:TxVideoData,
  teacherIntroPic: teacherIntroPic,
  json2Form: json2Form
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}

function TxVideoData(id) {
  var arr = {
    videolist: {
      jieshao0: {
        vid: "l0725g7cg2m", caption: "从小学到大学的课程体系", introduce: "icoding青少年编程课程体系是以编程为驱动的系统的计算机科学课程体系，经历五年教育教学实践，汲取了英国CAS、美国Code.org，可汗学院、日本、台湾等国家地区的课程体系，不断进行本土化实践、总结，最终形成了从小学到大学系统的计算机科学课程体系基于PBL五段教学体系。", teacher_pic: 'https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shi.jpg', teacher_intro: "石老师具有丰富的教学经验以及开发经验十分嘎嘎额而发VRvase是额VB宝贝啊无法让我发。" ,show_teacher:false},

      jieshao1: { vid: "d073024kp0f", caption: "基于PBL五段教学体系", introduce: "系统的课程体系需要系统的教学手段进行支撑与实施，PBL（基于项目学习）是当下在教育教学中全球教育教学中不断探索践行的教学手段与方法，icoding青少年编程将PBL核心通过understand--plan--solve--check—update五个阶段进行拆解并进行循环迭代，将PBL教学理念与系统的课程体系进行有效的连接与实施。", teacher_pic: 'https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shi.jpg', teacher_intro: "石老师具有丰富的教学经验以及开发经验十分嘎嘎额而发VRvase是额VB宝贝啊无法让我发。" ,show_teacher: false},

      s1: { vid: "x0728m6v9tz", caption: "Scratch课程纲要", introduce: "Scratch现在已经成为全世界各国进行编程教育的入门语言，包括哈佛的CS50课程从2018年也将Scratch纳入课程。通过对Scratch学习掌握编程的基础理念，步入计算机科学世界之门。", teacher_pic: 'https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/xi.jpg', teacher_intro: "奚老师具有丰富的教学经验以及开发经验十分嘎嘎额而发VRvase是额VB宝贝啊无法让我发。", show_teacher: false},

      s2: { vid: "a0627oxfgvv", caption: "Scratch项目实例", introduce: "icoding青少年编程Scratch课程每个阶段课程都会以项目方式进行评审答辩。通过项目的训练，培养学生设计能力、创新能力、合作能力，知识综合应用能力，表达能力。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/zheng.jpg", teacher_intro: "10年软件开发经验，Google计算思维认证教师，全国创客教育指导教师，全国青少年编程大赛评委" ,show_teacher: true},

      a1: { vid: "u072609ry96", caption: "Arduino课程实例—倒车雷达", introduce: "icodoing青少年编程物联网课程体系通过编程控制Arduino、Micro:bit、Circuit Playground、Raspberry PI等开源智能硬件，让物物连接、物物通信，创造性的开发各种生活智能产品。开源硬件让每个青少年都可以创造出真正应用与生活之中的智能设备，而不只是简单玩具。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/wang.jpg", teacher_intro: "Google计算思维认证教师、全国创客教育指导教师", show_teacher: true},

      a2: { vid: "v0730y4pi68", caption: "Arduino课程实例—无人机控制", introduce: "icoding青少年编程物联网课程不依赖于任何平台、套件，编程控制一切，编程定义一切。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/zheng.jpg", teacher_intro: "Google计算思维认证教师，全国创客教育指导教师，全国青少年编程大赛评委", show_teacher: true},

      micro1: { vid: "g0519apk5u3", caption: "加速度感应", introduce: "icodoing青少年编程物联网课程体系通过编程控制Arduino、Micro:bit、Circuit Playground、Raspberry PI等开源智能硬件，让物物连接、物物通信，创造性的开发各种生活智能产品。对于硬件的编程控制方式不限编程语言，根据不同的学习进度采取对应的编程语言进行物联网技术的学习。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/wang.jpg", teacher_intro: "Google计算思维认证教师、全国创客教育指导教师", show_teacher: true},

      micro2: { vid: "j0523hsvqr1", caption: "石头剪刀布", introduce: "icodoing青少年编程物联网课程体系通过编程控制Arduino、Micro:bit、Circuit Playground、Raspberry PI等开源智能硬件，让物物连接、物物通信，创造性的开发各种生活智能产品。icoding物联网课程案例与软件编程案例紧密结合，如在软件编程学习中会编写石头剪刀布游戏，而后从虚拟世界游戏转化到硬件设备物理实现。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/wang.jpg", teacher_intro: "3年软件开发经验，Google计算思维认证教师、全国创客教育指导教师", show_teacher: true},

      p1: { vid: "x07252bjgf8", caption: "无所不能的python", introduce: "Python语言是人工智能时代的第一语言，Python语言从桌面、互联网、移动互联网、大数据、人工智能到图形图像处理乃至航空航天无处不在，无所不能。人工智能时代必学python。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shi.jpg", teacher_intro: "12年软件开发经验，英国BCS计算机协会认证教师、CodeMonkey认证教师、全国创客教育指导教师", show_teacher: false},

      p2: { vid: "r0723bpn4sg", caption: "课程实例—打砖块游戏", introduce: "icoding青少年编程Python课程涉及从Python基础学习、Python网络编程、Python移动互联网编程到Python爬虫、大数据处理、人工智能（机器学习、深度学习）以至于Python加密与破解的学习，涵盖从基础学习到工作实战，为青少年从事计算机科学工作打下坚实的基础。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shi.jpg", teacher_intro: "12年软件开发经验，英国BCS计算机协会认证教师、CodeMonkey认证教师、全国创客教育指导教师", show_teacher: true },

      app1: { vid: "p0724gmyd4j", caption: "AppInventor介绍", introduce: "手机、平板等电子设备已经成为生活中的必须品，移动互联网已经无处不在。移动互联网编程也是计算机科学中非常重要的一部分，通过APP Inventor创意开发各种手机应用程序，让移动设备更好的服务生活，从而让青少年步入移动互联网科学之门。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shi.jpg", teacher_intro: "12年软件开发经验，英国BCS计算机协会认证教师、CodeMonkey认证教师、全国创客教育指导教师", show_teacher: false},

      app2: { vid: "w0722vhbgjm", caption: "课程案例--招猫逗狗", introduce: "icoding青少年编程移动互联网课程通过APP Inventor学习开发各种手机应用程序，掌握移动物联网编程开发核心技术，从而学会科学的使用移动互联网设备，让移动设备更好的服务生活，而不是被移动设备绑架。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shi.jpg", teacher_intro: "12年软件开发经验，英国BCS计算机协会认证教师、CodeMonkey认证教师、全国创客教育指导教师", show_teacher: true },

      rasp2: { vid: "j0678xj2y85", caption: "树莓派视觉跟踪", introduce: "icoding青少年编程移动互联网课程通过APP Inventor学习开发各种手机应用程序，掌握移动物联网编程开发核心技术，从而学会科学的使用移动互联网设备，让移动设备更好的服务生活，而不是被移动设备绑架。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shi.jpg", teacher_intro: "12年软件开发经验，英国BCS计算机协会认证教师、CodeMonkey认证教师、全国创客教育指导教师", show_teacher: true},

      rasp1: { vid: "r0163vcuarh", caption: "什么是树莓派", introduce: "icoding青少年编程移动互联网课程通过APP Inventor学习开发各种手机应用程序，掌握移动物联网编程开发核心技术，从而学会科学的使用移动互联网设备，让移动设备更好的服务生活，而不是被移动设备绑架。", teacher_pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shi.jpg", teacher_intro: "12年软件开发经验，英国BCS计算机协会认证教师、CodeMonkey认证教师、全国创客教育指导教师", show_teacher: false },
    }
  }
  return arr.videolist[id]
}

function teacherIntroPic(id) {
  var arr = {
    teachers: {
      shi: {pic:"https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/shi_full.jpg" },
      yan: {pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/yan_full.jpg"},
      wang: { pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/wang_full.jpg" },
      zheng: { pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/zheng_full.jpg" },
      mao: { pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/mao_full.jpg" },
      feng: { pic: "https://lg-ow2dtydc-1257048177.cos.ap-shanghai.myqcloud.com/feng_full.jpg" },
  }
  }
  return arr.teachers[id]
}


