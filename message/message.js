$(function () {

    //导航充值按钮
    $(".inter-cz").click(function () {
        $(".cz-topup").show();
    })
    //选择哪种支付方式
    $(".method-img").click(function () {
        $(this).css({ boxShadow: "0 0 1px blue" }).siblings().css({ boxShadow: "0 0 0" });
    })
    //取消支付
    $(".canel").click(function () {
        $(".popup-recharge").css({ display: "none" });
    })

    // 切换左边导航
    $('.report').click(function () {
        $(this).addClass('reporte8').siblings().removeClass('reporte8');
        $('.meg-wrap-box').show();
        $('.message-div').hide();
        var a = $(this).attr('id');
        $('#' + a + '-' + 'id').show().siblings().hide();
    });
    // 点击消息列表栏增加类
    $('.meg-list-title button').click(function () {
        $(this).addClass('bton-class').siblings().removeClass('bton-class');
    });
    //分页
    $('#paging-message').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 5,
        //当前页
        currentPage: 1,
        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i>上一页<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页<i class="arrow arrow3"><\/i><\/a><\/li>',
        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>", n, "页");
        }
    });


    //分页
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
    $('#paging-x').jqPaginator({
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
    $('#paging2').jqPaginator({
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
            var num = $(".get-page-x").val();
            if (num) {
                $('#paging-x').jqPaginator({
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
                $(".get-page-x").val("");
            }
            var num1 = $(".get-page1").val();
            if (num1) {
                $('#paging1').jqPaginator({
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
                $(".get-page1").val("");
            }
            var num2 = $(".get-page2").val();
            if (num2) {
                $('#paging2').jqPaginator({
                    //总页数
                    totalPages: 100,
                    //显示多少个页码
                    visiblePages: 1,
                    //当前页
                    currentPage: Number(num2),
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


    $('.meg-state .note-lis').click(function () {
        $('.meg-wrap-box').hide();
        $('.message-div').show();
        let atitle = $(this).parents('.meg-ul-box').siblings('.meg-table-title').find('.note-li').text();
        $('.head-title').text(atitle);
        let atime = $(this).siblings('.data-li').text();
        $('.toplast-p').text('发布时间: ' + atime);
        let acontent = $(this).text();
        $('.meg-main-content').text(acontent)
    })

    // 点击消息弹出框返回
    $('.meg-return,.masge-delet').click(function () {
        $('.meg-wrap-box').show();
        $('.message-div').hide();
    })

    //选择消息类型的
    $(".mes-typecli1").on('click', 'a', function () {
        $(".select-type1").text($(this).find("label").text())
    })
    //选择消息类型的
    $(".mes-typecli2").on('click', 'a', function () {
        $(".select-type2").text($(this).find("label").text())
    })
    //选择消息类型的
    $(".mes-typecli3").on('click', 'a', function () {
        $(".select-type3").text($(this).find("label").text())
    })
    //选择消息类型的
    $(".mes-typecli4").on('click', 'a', function () {
        $(".select-type4").text($(this).find("label").text())
    })
    //选择消息类型的
    $(".mes-typecli5").on('click', 'a', function () {
        $(".select-type5").text($(this).find("label").text())
    })
    //选择消息类型的
    $(".mes-typecli6").on('click', 'a', function () {
        $(".select-type6").text($(this).find("label").text())
    })


    // 系統公告顯示
    $('.headright-bot .system-ancement').click(function () {
        $('.ancement-play-box').show();
    })

    $('.play-right .delet,.delet-unread').click(function () {
        $('.ancement-play-box').hide();
    })

    // 公告左边导航切换
    $('.play-left-nav li').click(function () {
        $(this).addClass('skyblue-color').siblings().removeClass('skyblue-color');
        var a = $(this).attr('id');
        $('#' + a + '-' + 'id').show().siblings().hide();
    })

    // 未读公告内容详情
    $('.noread-div li').click(function () {
        $(this).parents('.noread-div').hide();
        var a = $(this).attr('id');
        $('.title-mains').show();
        $('#' + a + '-' + 'id').show().siblings().hide();
    })


    $('.title-mains .return').click(function () {
        $(this).parents('.tilte-li').hide().parents().siblings('.noread-div').show();
    })


    // 已读公告内容详情
    $('.hasread-div li').click(function () {
        $(this).parents('.hasread-div').hide();
        var a = $(this).attr('id');
        $('.hasread-title-mains').show();
        $('#' + a + '-' + 'id').show().siblings().hide();
    })


    $('.hasread-title-mains .return').click(function () {
        $(this).parents('.tilte-li').hide().parents().siblings('.hasread-div').show();
    })


    // 所有公告内容详情
    $('.allread-div li').click(function () {
        $(this).parents('.allread-div').hide();
        var a = $(this).attr('id');
        $('.allread-title-mains').show();
        $('#' + a + '-' + 'id').show().siblings().hide();
    })

    $('.allread-title-mains .return').click(function () {
        $(this).parents('.tilte-li').hide().parents().siblings('.allread-div').show();
    })


    $("input[name=ads]").click(function () {
        if ($("input[name=ads]:checked").length > 0) {
            $(this).parents('.meg-table-title').siblings('.meg-ul-box').children().children().children().find("input[type=checkbox]").attr("checked", true);

        } else {
            $(this).parents('.meg-table-title').siblings('.meg-ul-box').children().children().children().find("input[type=checkbox]").attr("checked", false);
        }
    })

    $("input[name=adstwo]").click(function () {
        if ($("input[name=adstwo]:checked").length > 0) {
            $(this).parents('.meg-table-title').siblings('.meg-ul-box').children().children().children().find("input[type=checkbox]").attr("checked", true);

        } else {
            $(this).parents('.meg-table-title').siblings('.meg-ul-box').children().children().children().find("input[type=checkbox]").attr("checked", false);
        }
    })

    $("input[name=adsthree]").click(function () {
        if ($("input[name=adsthree]:checked").length > 0) {
            $(this).parents('.meg-table-title').siblings('.meg-ul-box').children().children().children().find("input[type=checkbox]").attr("checked", true);

        } else {
            $(this).parents('.meg-table-title').siblings('.meg-ul-box').children().children().children().find("input[type=checkbox]").attr("checked", false);
        }
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
    $('.nice').mouseenter(function () {
        $('.userset-namerenbox').slideDown();
        $('.meg-pop-up,.accout-box').slideUp();
    });

    $('.userset-namerenbox').mouseleave(function () {
        $('.userset-namerenbox').slideUp();
    });

    // 账户余额
    $('.accout').mouseenter(function () {
        $('.accout-box').slideDown();
        $('.userset-namerenbox,.meg-pop-up').slideUp();
    });
    $('.accout-box').mouseleave(function () {
        $('.accout-box').slideUp();
    });
})