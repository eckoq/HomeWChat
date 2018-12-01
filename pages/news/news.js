/**
 *  Author:eckoqzhang
 *  Date:2018-09-30
 *  Desc: Any question Pls contact eckoqzhang@163.com
 */

var sliderWidth = 96;

Page({
    data: {
        tabs: [
            "最新",
            "热点"
        ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        inputShowed: false,
        inputVal : ""
    },

    onLoad: function(){
           var that = this;
            wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        }); 
    },

    tabClick: function(e){
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        }); 
    },

    //for search func
    inputTyping: function(e) {
        this.setData({
            inputVal: e.detail.value 
        }); 
    },
    showInput:function() {
        this.setData({
            inputShowed: true 
        }); 
    },
    hideInput: function(e) {
        this.setData({
            inputShowed: false ,
            inputVal: ""
        }); 
    },
    clearInput: function() {
        this.setData({
            inputVal: "" 
        }); 
    }

});


