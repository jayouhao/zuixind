$(function () {
    //左边导航的
    $(".report").click(function () {
        $(".reporte8").removeClass("reporte8");
        $(this).addClass("reporte8");
        $("." + $(this).attr("id")).show().siblings().hide();
    })

    //选择节点
    $(".node-value-li1").on('click', 'a', function () {
        $(".select-type1").text($(this).find("label").text())
    })
    //选择运营商
    $(".node-value-li2").on('click', 'a', function () {
        $(".select-type2").text($(this).find("label").text())
    })
    //省份选择器
    var $distpicker = $('#distpicker');
    $distpicker.distpicker({
        province: '福建省',
        city: '厦门市',
        district: '思明区'
    });

    //关闭节点
    $(".node-remove-x").click(function () {
        $(".node-box").hide();
    })
    //添加节点
    $(".self-add").click(function () {
        $(".node-box").show();
    })
    //节点提示
    $(".node-hint-button").click(function () {
        $(".node-hint").hide();
    })

    //分页
    $('#paging').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 1,
        //当前页
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>", n, "页");
        }
    });

    //输入分页的
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) { // enter 键   

            //任务列表
            if ($(".centent-my-node1").css("display") == "block") {
                var num = $(".get-page").val();
                if (num) {
                    $('#paging').jqPaginator({
                        //总页数
                        totalPages: 100,
                        //显示多少个页码
                        visiblePages: 1,
                        //当前页
                        currentPage: Number(num),
                        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
                        next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
                        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
                        onPageChange: function (n) {
                            $("#demo2-text").html("当前第" + n + "页");
                            console.log("你选择的=>", n, "页");
                        }
                    });
                    $(".get-page").val("");
                }
            } else {
                var num = $(".get-page1").val();
                var num1 = $(".get-page2").val();
                if (num) {
                    $('#paging-api').jqPaginator({
                        //总页数
                        totalPages: 100,
                        //显示多少个页码
                        visiblePages: 1,
                        //当前页
                        currentPage: Number(num),
                        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
                        next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
                        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
                        onPageChange: function (n) {
                            $("#demo2-text").html("当前第" + n + "页");
                            console.log("你选择的=>", n, "页");
                        }
                    });
                    $(".get-page1").val("");
                }
                if (num1) {
                    $('#lists-paing').jqPaginator({
                        //总页数
                        totalPages: 100,
                        //显示多少个页码
                        visiblePages: 1,
                        //当前页
                        currentPage: Number(num1),
                        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
                        next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
                        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
                        onPageChange: function (n) {
                            $("#demo2-text").html("当前第" + n + "页");
                            console.log("你选择的=>", n, "页");
                        }
                    });
                    $(".get-page2").val("");
                }
            }

        }
    }

    //概况分页
    $('#paging-api').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 1,
        //当前页
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>", n, "页");
        }
    });

    //概况地图分页
    $('#lists-paing').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 1,
        //当前页
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>", n, "页");
        }
    });

    //重置
    $(".self-button").click(function () {
        $(".self-input").val("");
    })


    //地图
    console.log(jsMap)
    jsMap.config(".my-atlas", {
        name: "china",
        width: 600,
        height: 400,
        areaName: true
    });
    // setTimeout(function(){
    //     //新疆的
    //     $(".centent-my-node .jsmap-xinjiang").click();
    //     //台湾
    //     $(".centent-my-node .jsmap-taiwan").click();        
    // },1000);


    jsMap.config(".node-show-img", {
        name: "china",
        width: 600,
        height: 400,
        areaName: true
    });
    // setTimeout(function(){
    //     //新疆的
    //     $(".centent-node-general .jsmap-xinjiang").click();
    //     //台湾
    //     $(".centent-node-general .jsmap-taiwan").click();        
    //     //海南
    //     $(".centent-node-general .jsmap-hainan").click();                
    // },1000); 

    //选择哪种支付方式
    $(".method-img").click(function () {
        $(this).css({ boxShadow: "0 0 1px blue" }).siblings().css({ boxShadow: "0 0 0" });
    })
    //取消支付
    $(".canel").click(function () {
        $(".popup-recharge").css({ display: "none" });
    })

    //充值
    $(".recharge-button").click(function () {
        $(".popup-recharge").css({ display: "block" });
    });


    // 转换器
    $('.arrows input').keyup(function(){
        var a=Number($(this).val());
        $('.blue').text(a*100);
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