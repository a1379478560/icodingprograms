module.exports = {
  formatTime: formatTime,
  TxVideoData:TxVideoData
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


function TxVideoData(id) {
  var arr = {
    videolist: {
        s1: { vid: "f0635hnqgwy", caption: "icoding学生作品之邓逸凡", introduce: "icoding学生作品之邓逸凡"  },
        s2: { vid: "f0635hnqgwy", caption: "测试2", introduce: "icoding学生作品之邓逸凡" },
    }
  }
  return arr.videolist[id]
}


