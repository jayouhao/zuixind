$(function () {
    //选择语言的
    $(".dropdown-menu").on('click', 'a', function () {
        var dom = $(this).find("label");
        $(".imgok").attr("src", dom.find("img").attr("src"));
        $(".nameok").text(dom.find("span").text())
    })
    //input框聚焦
    $(".new-seek-rigth input").focus(function () {
        $(".new-seek-rigth img").css({ display: "none" });
    })
    $(".new-seek-rigth input").blur(function () {
        var value = $(this).val();
        if (value == "") {
            $(".new-seek-rigth img").css({ display: "block" });
        } else {
            $(".new-seek-rigth img").css({ display: "none" });
        }
    })
    //单选框点击
    $("input[name=dan]").click(function () {
        $(".new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>", $(this).attr("value"))
    })
    // 分页的
    // $('#paging').jqPaginator({
    //      //总页数
    //      totalPages: 100,
    //      //显示多少个页码
    //      visiblePages: 1,
    //      //当前页
    //      currentPage: 1,
    //      prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
    //      next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
    //      page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
    //      onPageChange: function (n) {
    //          $("#demo2-text").html("当前第" + n + "页");
    //          console.log("你选择的=>", n, "页");
    //      }
    // });

    // 帮助中心内容分页的
    $('#paging-main').jqPaginator({
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

    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) { // enter 键  
            //分页消息的            
            var num = $(".get-page").val();
            if (num) {
                $('#paging-main').jqPaginator({
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
        }
    }

    //点击反馈类型的
    $(".button").click(function () {
        $(".buttonBlue").removeClass("buttonBlue");
        $(this).addClass("buttonBlue");
        console.log($(this).text());
    })


    //点击左边导航的
    $(".middle-select").click(function () {
        document.title = $(this).find("p").text();
        var clas = $(this).attr("id");
        $(".select-ok").removeClass("select-ok");
        $(this).addClass("select-ok")
        $(".block").removeClass("block");
        $("." + clas).addClass("block");
        console.log(clas);
    });

    $('.appear').click(function () {
        $('.middle-selecth').css('display', 'block');
    })
    $('.hiddens').click(function () {
        $('.middle-selecth').css('display', 'none');
    })


    $('.middle-left li:nth-of-type(3)').click(function () {
        $('.help-main-li').hide().siblings('.help-ulone').show();
    })

    // /////////
    $('.product-li').click(function () {
        var a = $(this).attr('id');
        console.log(a, 'dsfs')

        $(this).parents('.onprot').hide().siblings('.twopro').eq(0).find('#' + a + '-' + 'id').css('display', 'block');
    })


    // 点击显示子目录的内容
    $('.lidiv a').click(function () {
        $(this).addClass('alit').parent().siblings().children().removeClass('alit');
            var a = $(this).attr('id');
            $('.help-ulone').hide();
            $('#' + a + '-' + 'id').show();
    })

    // 点击左边导航帮助中心显示
    $('.help-center-con p').click(function () {
       $(this).siblings('.lidiv').toggle();
       $(this).parent().siblings().find('.lidiv').hide();

       if( $(this).parent().siblings().find('.lidiv').css("display")=='none'){
            $('.help-center-con img').css('transform', 'rotate(-360deg)');
            $('.help-center-con li').css({ 'border-bottom': '1px solid #E5E5E5' });
       }

       if ($(this).siblings('.lidiv').css('display') == 'block') {
            $(this).parent().css({ 'border-bottom': 'none' });
            $(this).find('img').css('transform', 'rotate(90deg)')
        } else {
            $(this).parent().css({ 'border-bottom': '1px solid #E5E5E5' });
            $(this).find('img').css('transform', 'rotate(-360deg)')
        }

    });
  
})