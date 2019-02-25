$(function () {
    if (location.search.includes("?1")) {
        console.log($(".report").eq(1))
        $(".reporte8").removeClass("reporte8");
        $(".report").eq(1).addClass("reporte8");
        $(".centen-police-message").hide();
        $(".centen-police-set").show();
        $(".update").show();
    }
    //左边导航的
    $(".report").click(function () {
        $(".reporte8").removeClass("reporte8");
        $(this).addClass("reporte8");
        if ($(this).text() == "报警信息") {
            $(".centen-police-set").hide();
            $(".centen-police-message").show();
        } else {
            $(".centen-police-message").hide();
            $(".centen-police-set").show();
        }
    })
    //选择报警类型
    $(".mes-typecli").on('click', 'a', function () {
        $(".select-type").text($(this).find("label").text())
    })
    //选择状态 (Status)
    $(".mes-state1").on('click', 'a', function () {
        $(".select-type1").text($(this).find("label").text())
    })

    //分页信息的
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



    //分页报警设置的
    $('#paging1').jqPaginator({
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

    //分页
    $('#paging3').jqPaginator({
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
    //分页
    $('#paging4').jqPaginator({
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
    //分页
    $('#paging5').jqPaginator({
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
            //分页消息的
            if ($(".centen-police-message").css("display") == "block") {
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
                    $(".get-page").val("")
                }
            }else{
                var num = $(".get-page1").val();
                if (num) {
                    $('#paging1').jqPaginator({
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
                    $(".get-page1").val("")
                }
            }

            var num3 = $(".get-page3").val();
            if (num3) {
                $('#paging3').jqPaginator({
                    //总页数
                    totalPages: 100,
                    //显示多少个页码
                    visiblePages: 1,
                    //当前页
                    currentPage: Number(num3),
                    prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
                    next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
                    page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
                    onPageChange: function (n) {
                        $("#demo2-text").html("当前第" + n + "页");
                        console.log("你选择的=>", n, "页");
                    }
                });
                $(".get-page3").val("");
            }
            var num4 = $(".get-page4").val();
            if (num4) {
                $('#paging4').jqPaginator({
                    //总页数
                    totalPages: 100,
                    //显示多少个页码
                    visiblePages: 1,
                    //当前页
                    currentPage: Number(num4),
                    prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
                    next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
                    page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
                    onPageChange: function (n) {
                        $("#demo2-text").html("当前第" + n + "页");
                        console.log("你选择的=>", n, "页");
                    }
                });
                $(".get-page4").val("");
            }
            var num5 = $(".get-page5").val();
            if (num5) {
                $('#paging5').jqPaginator({
                    //总页数
                    totalPages: 100,
                    //显示多少个页码
                    visiblePages: 1,
                    //当前页
                    currentPage: Number(num5),
                    prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
                    next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
                    page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
                    onPageChange: function (n) {
                        $("#demo2-text").html("当前第" + n + "页");
                        console.log("你选择的=>", n, "页");
                    }
                });
                $(".get-page5").val("");
            }
        }
    }


    //重置按钮
    $(".reset").click(function(){
        $(".police-input input").val('');
        $(".select").text("全部")
    })

    //头部选择的
    $(".esta-but").click(function () {
        $(this).css({ color: "#fff", background: "#2BA7E0" }).siblings()
            .css({ color: "#2BA7E0", background: "#fff" });
        if ($(this).text() == "新增报警设置") {
            $(".police-box").hide();
            $(".add-update").show();
        } else {
            $(".add-update").hide();
            $(".police-box").show();
        }
    })
    //查看返回按钮
    $(".check-button").click(function () {
        $(".check").hide();
    })

    //查看详情显示
    $(".data-operationg").on("click", ".seek1-img", function () {
        $(".check").show();
    })
    //修改返回的
    $(".base").click(function () {
        $(".update").hide();
    })
    //点击修改
    $(".data-operationg").on("click", ".amend-img", function () {
        $(".update").show();
    })

    //单选框点击 不可报警
    $("input[name=police]").click(function () {
        $(".radio-police .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>", $(this).attr("value"))
    })
    //单选框点击 文件大小不一致报警
    $("input[name=file]").click(function () {
        $(".radio-file .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>", $(this).attr("value"))
    })
    //单选框点击 故障恢复发送邮件
    $("input[name=malfunction]").click(function () {
        $(".radio-malfunction .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>", $(this).attr("value"))
    })
    //单选框点击 速度报警
    $("input[name=speed]").click(function () {
        $(".radio-speed .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>", $(this).attr("value"))
    })
    //单选框点击 返回码不一致报警
    $("input[name=return]").click(function () {
        $(".radio-return .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>", $(this).attr("value"))
    })
    //单选框点击 md5不一致
    $("input[name=md5]").click(function () {
        $(".radio-md5 .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>", $(this).attr("value"))
    })
    //单选框点击 302劫持
    $("input[name=hijack]").click(function () {
        $(".radion-hijack .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>", $(this).attr("value"))
    })
    //单选框点击 短信报警
    $("input[name=note]").click(function () {
        $(".radio-note .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>", $(this).attr("value"))
    })
    //更新页面关闭
    $(".remove-x").click(function () {
        $(".update").hide();
        location.search = "";
    })
    //点击删除返回的
    $(".remove-base,.remove-x").click(function () {
        $(".remove").hide();
    })
    //点击删除显示
    $(".data-operationg").on("click", ".delete-img", function () {
        $(".remove").show();
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

    // 提示框
    $('.promptplay-box .return').click(function(){
        $(this).parent().parent().hide();
    })


        // 点击消息中心切换
    $('.meg-click').mouseenter(function () {
        $('.meg-pop-up').slideDown();
        $('.userset-namerenbox,.accout-box').slideUp();
    });
    $('.meg-pop-up').mouseleave(function () {
            $('.meg-pop-up').slideUp();
    });
        

    // 昵称
    $('.nice').mouseenter(function(){
        $('.userset-namerenbox').slideDown();
        $('.meg-pop-up,.accout-box').slideUp();
    });

    $('.userset-namerenbox').mouseleave(function(){
        $('.userset-namerenbox').slideUp();
    });

    // 账户余额
    $('.accout').mouseenter(function(){
        $('.accout-box').slideDown();
        $('.userset-namerenbox,.meg-pop-up').slideUp();
    });
    $('.accout-box').mouseleave(function(){
        $('.accout-box').slideUp();
    });
})