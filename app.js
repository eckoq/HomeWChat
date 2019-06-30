/* 
 * Author: eckoqzhang 
 * Date: 2018-11-11
 * Desc: any question Pls contact eckoqzhang@163.com
 */
App({
    navigateToLogin: false,
    onLaunch: function () {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
    },
    goLoginPageTimeOut: function() {
        if (this.navigateToLogin){
          return;
        }
        wx.removeStorageSync('token');
        this.navigateToLogin = true;
        setTimeout(function() {
          wx.navigateTo({
            url: "/pages/authorize/authorize"
          });
        }, 1000);
    },
    onShow(e) {
        const _this = this;
        const token = wx.getStorageSync('token');
        if (!token) {
          _this.goLoginPageTimeOut();
          return;
        }
        WXAPI.checkToken(token).then(function (res) {
          if (res.code != 0) {
            wx.removeStorageSync('token');
            _this.goLoginPageTimeOut();
          }
        })
        wx.checkSession({
          fail() {
            _this.goLoginPageTimeOut();
          }
        })
        this.globalData.launchOption = e;
    },
    globalData:{
        userInfo:null,
        isConnected : true
    }
})
