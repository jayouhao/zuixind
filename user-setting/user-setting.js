$(function(){
    //返回    
    $(".setting-submit").click(function(){
        window.history.back(-1);
    })

    //个人认证资料
    $(".remove-x").click(function(){
        $(".popup-recharge").hide();
    })
    //个人信息
    $(".message-remove-x").click(function(){
        $(".popup-message").hide();
    })
    //企业信息
    $(".firm-message-remove").click(function(){
        $(".firm-message").hide();
    })        
    //提示的    
    $(".hint-amend").click(function(){
        $(".popup-hint").hide();
    })
    //企业提示的    
    $(".firm-amend").click(function(){
        $(".firm-hint").hide();
    })    
    //企业认证的
    $(".firm-remove-x").click(function(){
        $(".firm-recharge").hide();
    })
    
    // 系統公告顯示
    $('.headright-bot .system-ancement').click(function(){
        $('.ancement-play-box').show();
    })

    $('.play-right .delet,.delet-unread').click(function(){
        $('.ancement-play-box').hide();
    })

    // 公告左边导航切换
    $('.play-left-nav li').click(function(){
        $(this).addClass('skyblue-color').siblings().removeClass('skyblue-color');
        var a= $(this).attr('id');
        $('#'+a+'-'+'id').show().siblings().hide();
    })


    // 未读公告内容详情
    $('.noread-div li').click(function(){
        $(this).parents('.noread-div').hide();
        var a=$(this).attr('id');
        $('.title-mains').show();
        $('#'+a+'-'+'id').show().siblings().hide();
    })


    $('.title-mains .return').click(function(){
        $(this).parents('.tilte-li').hide().parents().siblings('.noread-div').show();
    })


    // 已读公告内容详情
    $('.hasread-div li').click(function(){
        $(this).parents('.hasread-div').hide();
        var a=$(this).attr('id');
        $('.hasread-title-mains').show();
        $('#'+a+'-'+'id').show().siblings().hide();
    })


    $('.hasread-title-mains .return').click(function(){
        $(this).parents('.tilte-li').hide().parents().siblings('.hasread-div').show();
    })


    // 所有公告内容详情
    $('.allread-div li').click(function(){
        $(this).parents('.allread-div').hide();
        var a=$(this).attr('id');
        $('.allread-title-mains').show();
        $('#'+a+'-'+'id').show().siblings().hide();
    })

    $('.allread-title-mains .return').click(function(){
        $(this).parents('.tilte-li').hide().parents().siblings('.allread-div').show();
    })

    // 用户设置弹出框隐藏
    $('.set-delet,.change-delet').click(function(){
        $(this).parent().parent().hide();
    })

    // 点击消息中心切换
    $('.meg-click').mouseenter(function () {
        if( $('.meg-pop-up').css('display')=='block'){
            $('.meg-pop-up').slideUp();
        }else{
            $('.meg-pop-up').slideDown();
        }
    });
    $('.meg-pop-up').mouseleave(function () {
        if( $('.meg-pop-up').css('display')=='block'){
            $('.meg-pop-up').slideUp();
        }else{
            $('.meg-pop-up').slideDown();
        }
    });


     // 昵称
     $('.nice').click(function(){
        $('.userset-namerenbox').toggle();
    })

    // 账户余额
    $('.accout').click(function(){
        $('.accout-box').toggle();
    })
})