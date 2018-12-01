/* 
 * Author: eckoqzhang 
 * Date: 2018-11-11
 * Desc: any question Pls contact eckoqzhang@163.com
 */
App({
    onLaunch: function () {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
    
    getUserInfo:function(cb) 
    {
        var that = this;
        if (this.globalData.userInfo) 
        {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } 
        else
        {
            //调用登录接口
            wx.login({
                success: function(res) {
                    if (res.code) 
                    {
                        wx.request({
                            url: "https://nextecko.com/login/",
                            data : {
                                code: res.code
                            },
                            success: function(data) {
                                console.log(data); 
                            },
                            fail: function(data) {
                                console.log("requst failed");
                            }
                        });
                    }
                    else
                    {
                        console.log("login failed"); 
                    }
                }
            });
        }
    },
    
    
    globalData:{
        userInfo:null
    }
})
