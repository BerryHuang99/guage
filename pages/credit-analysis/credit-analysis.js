// pages/credit-analysis/credit-analysis.js
var numCount = 6;
var numSlot = 5;
var mW = 350;
var mH = 350;
var mCenter = mW / 2; //中心点
var mAngle = Math.PI * 2 / numCount; //角度
var mRadius = mCenter - 60; //半径(减去的值用于给绘制的文本留空间)
//获取Canvas

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepText: 5,
    radCtx: {},
    chanelArray: [["身份", 50], ["热心", 20], ["守信", 10], ["活跃", 30], ["评价", 10], ["经济", 20]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.radCtx = wx.createCanvasContext("radarCanvas");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.drawRadar();
  },
  // 雷达图
  drawRadar: function () {
    let sourceData = this.data.chanelArray;
    let radCtx = this.data.radCtx;

    //调用
    this.drawEdge() //画六边形
    
    this.drawLinePoint()
    //设置数据
    this.drawRegion(sourceData, 'rgba(180, 255, 0, 0.5)') 
    //设置文本数据
    this.drawTextCans(sourceData)
    //开始绘制
    radCtx.draw()
  },
  // 绘制6条边
  drawEdge: function () {
    let radCtx = this.data.radCtx;

    radCtx.setStrokeStyle("white")
    radCtx.setLineWidth(2)  //设置线宽
    for (var i = 0; i < numSlot; i++) {
      //计算半径
      radCtx.beginPath()
      var rdius = mRadius / numSlot * (i + 1)
      //画6条线段
      for (var j = 0; j < numCount; j++) {
        //坐标
        var x = mCenter + rdius * Math.cos(mAngle * j);
        var y = mCenter + rdius * Math.sin(mAngle * j);
        radCtx.lineTo(x, y);
      }
      radCtx.closePath()
      radCtx.stroke()
    }
  },
  // 绘制连接点
  drawLinePoint: function () {
    let radCtx = this.data.radCtx;

    radCtx.beginPath();
    for (var k = 0; k < numCount; k++) {
      var x = mCenter + mRadius * Math.cos(mAngle * k);
      var y = mCenter + mRadius * Math.sin(mAngle * k);

      radCtx.moveTo(mCenter, mCenter);
      radCtx.lineTo(x, y);
    }
    radCtx.stroke();
  },
  //绘制数据区域(数据和填充颜色)
  drawRegion: function (mData, color) {
    let radCtx = this.data.radCtx;

    radCtx.beginPath();
    for (var m = 0; m < numCount; m++) {
      var x = mCenter + mRadius * Math.cos(mAngle * m) * mData[m][1] / 100;
      var y = mCenter + mRadius * Math.sin(mAngle * m) * mData[m][1] / 100;

      radCtx.lineTo(x, y);
    }
    radCtx.closePath();
    radCtx.setFillStyle(color)
    radCtx.fill();
  },

  //绘制文字
  drawTextCans: function (mData) {
    let radCtx = this.data.radCtx;

    radCtx.setFillStyle("white")
    radCtx.font = 'bold 18px heiti'  //设置字体
    for (var n = 0; n < numCount; n++) {
      var x = mCenter + mRadius * Math.cos(mAngle * n);
      var y = mCenter + mRadius * Math.sin(mAngle * n);
      // radCtx.fillText(mData[n][0], x, y);
      //通过不同的位置，调整文本的显示位置
      if (mAngle * n >= 0 && mAngle * n <= Math.PI / 2) {
        radCtx.fillText(mData[n][0], x + 5, y + 5);
      } else if (mAngle * n > Math.PI / 2 && mAngle * n <= Math.PI) {
        radCtx.fillText(mData[n][0], x - radCtx.measureText(mData[n][0]).width - 7, y + 5);
      } else if (mAngle * n > Math.PI && mAngle * n <= Math.PI * 3 / 2) {
        radCtx.fillText(mData[n][0], x - radCtx.measureText(mData[n][0]).width - 5, y);
      } else {
        radCtx.fillText(mData[n][0], x + 7, y + 2);
      }

    }
  }
})