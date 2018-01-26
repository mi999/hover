/**
 * Created by Administrator on 2017/11/28 0028.
 */

$.fn.extend({
    myPic:function(obj){
        if(obj)
            this.addClass(obj.effect);
    }
});

$("#pic1").myPic({effect:"effect-lily"});
$("#pic2").myPic({effect:"effect-sadie"});
$("#pic3").myPic({effect:"effect-honey"});
$("#pic4").myPic({effect:"effect-layla"});
$("#pic5").myPic({effect:"effect-zoe"});
$("#pic6").myPic({effect:"effect-oscar"});