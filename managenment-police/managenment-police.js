$(function () {
    //导航充值按钮
    $(".inter-cz").click(function () {
        $(".cz-topup").show();
    })
    // 切换左边导航
    $('.contenleft p').click(function () {
        $(this).addClass('report').siblings().removeClass('report');
        var a = $(this).attr('id');
        console.log(a + '-id', '000')
        $('#' + a + '-' + 'id').show().siblings().hide();
    });
    // 充值弹出框
    $('.wapspan').click(function () {
        $('.cz-topup').show();
    });
    //选择哪种支付方式
    $(".method-img").click(function () {
        $(this).css({ boxShadow: "0 0 1px blue" }).siblings().css({ boxShadow: "0 0 0" });
    });

    //取消支付
    $(".canel").click(function () {
        $(".popup-recharge").css({ display: "none" });
    });

    //充值
    $(".recharge-button").click(function () {
        $(".popup-recharge").css({ display: "block" });
    });

    // 测币算法
    $('.inputborder input').keyup(function () {
        var a = Number($(this).val());
        $('.cemoneys').val(a * 100);
    })

    // 分页
    // 最新监控告警的分页
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
    //我的账单分页
    // 最新监控告警的分页
    $('#paging-id').jqPaginator({
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
    //选择任务类型
    $(".mes-typecli").on('click', 'a', function () {
        $(".select-type").text($(this).find("label").text())
    });

    // 收支明细导出弹出框
    $('.paymentdtails').click(function () {
        $('.balance-detail').show();
    });
    $(".delet-x").click(function () {
        $(".popup-recharge").css({ display: "none" });
    });
    $('.pay-button').click(function () {
        $('.mes-typecli-d').show();
    });


    //选择交易类型
    $(".mes-typecli-d").on('click', 'a', function () {
        $(".select-type-d").text($(this).find("label").text());
        $('.mes-typecli-d').hide();
    });

    // 发票退票原因选择
    $(".refund-reason").on('click', 'a', function () {
        $(".reason-result").text($(this).find("label").text())
    });
    //发票管理选择区县
    $(".select-type-ul").on('click', 'a', function () {
        $(".invoice-type-li").text($(this).find("label").text());
        $(".select-type-ul").hide()
    });

    // 到处个人明细
    $('.up-export').click(function () {
        $('.person-detail').show();
    })
    //点击返回
    $(".detail-return").click(function () {
        $(".person-detail").hide();
    });

    // 发票列表详情
    $('.details').click(function () {
        $('.lists-detail').show();
    });

    //发票列表详情分页
    // 最新监控告警的分页
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

    // 点击返回
    $('.lists-return').click(function () {
        $('.lists-detail').hide();
    })


    // 选择省区县隐藏
    $('.invoic-province').click(function () {
        $(".select-li-d").show().siblings('.select-type-ul').hide();
    });
    $('.invoice-county').click(function () {
        $(".select-type-ul").show().siblings('.select-li-d').hide();
    })


    // 新增收货地址
    $('.new-adrees').click(function () {
        $('.new-adr-box').show();
    });


    //新增收货地址选择省
    $(".new-adr-province").on('click', 'a', function () {
        $(".new-province-value").text($(this).find("label").text());
        $(".new-adr-city,.new-adr-area,.new-adr-province").hide()
    });
    //新增收货地址选择市
    $(".new-adr-city").on('click', 'a', function () {
        $(".new-city-value").text($(this).find("label").text());
        $(".new-adr-city,.new-adr-area,.new-adr-province").hide()
    });

    //新增收货地址选择区县
    $(".new-adr-area").on('click', 'a', function () {
        $(".new-area-value").text($(this).find("label").text());
        $(".new-adr-city,.new-adr-area,.new-adr-province").hide()
    });
    // 选择省区县隐藏
    $('.province-bton').click(function () {
        $(".new-adr-province").show().siblings('.new-adr-city,.new-adr-area').hide();
    });
    $('.city-bton').click(function () {
        $(".new-adr-city").show().siblings('.new-adr-province,.new-adr-area').hide();
    });
    $('.area-bton').click(function () {
        $(".new-adr-area").show().siblings('.new-adr-city,.new-adr-province').hide();
    });


    //省份选择器
    var $distpicker = $('#distpicker');
    $distpicker.distpicker({
        province: '福建省',
        city: '厦门市',
        district: '思明区'
    });
    //修改的初始化值
    $('#distpicker3').distpicker({
        province: "浙江省",
        city: "杭州市",
        district: "西湖区"
    });


    $('.pay-type button').click(function () {
        $(this).css({ 'color': '#BEBEBE', 'background': 'none', 'border-color': '#BEBEBE' });
    })
    // 修改收货地址
    $('.change-bton').click(function () {
        $('.change-adrbox').show();
        var a = $('.in-personame').val();
        var b = $('.in-iphone-num').val();
        var c = $('.in-yz-number').val()
        $('.personame').val(a);
        $('.iphone-num').val(b);
        $('.yz-number').val(c)
    });

    // 发票管理头部导航切换
    $('.invoice-b li').click(function () {
        $(this).addClass('adrclass').siblings().removeClass('adrclass');
        var a = $(this).attr('id');
        $('#' + a + '-' + 'id').show().siblings().hide();
        var b = $(this).text();
        $('.change-span').text(b);
        $('#invoice-list-id').css('margin-top', '40px');
    });

    // 发票列表分页
    //我的账单分页
    // 最新监控告警的分页
    $('#paging-invoice').jqPaginator({
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
    $('.refund').click(function () {
        $('.invoice-box-tan').show();
    });
    //类型选择
    $(".prot-type").click(function () {
        $(this).addClass("typeclass").siblings().removeClass("typeclass");
    });

    $('.switch-en-per .prot-type').click(function () {
        let a = $(this).text();
        console.log(a);
        $('.personage input').val(a);
    })

    $('.poseren').click(function () {
        $('.in-type-choice').hide();
        $('.personage input').attr('disabled', true);
        $('.personage input').css({ 'border': 'none' });
    })

    $('.enterprise').click(function () {
        $('.in-type-choice').show();
        $('.personage input').attr('disabled', false);
        $('.personage input').css({
            'border': '1px solid #DCDCDC'
            , 'width': '498px', 'height': '28px', 'padding-left': '10px'
        });
    });




    // 分页
    // 最新监控告警的分页
    $('#apply-fenye').jqPaginator({
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

    // 时间日期选择
    var mySchedule = new Schedule({
        el: '#schedule-box1',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time1").val(y + '-' + m + '-' + d);
        }
    });

    $(".start-time1").focus(function () {
        $(this).siblings("#schedule-box1").show();
        $(this).siblings(".xkes1").show();
    })


    //曲线图
    var title = {
        text: ''
    };
    var subtitle = {
        text: ''
    };
    var xAxis = {
        categories: ['2018/1/1', '2018/1/1', '2018/1/1', '2018/1/1', '2018/1/1', '2018/1/1', '2018/1/1',
            '2018/1/1', '2018/1/1', '2018/1/1', '2018/1/1', '2018/1/1']
    };


    var yAxis = [{ // 左边 Y 轴
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: -10,
            y: -2
            //    format: '{value:0,0f}'
        },
        // showFirstLabel: false,
        categories: [-6, -5, -4 - 3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }];

    var tooltip = {
        // valueSuffix: '\xB0C'
    }

    var legend = {
        // layout: 'vertical',
        // align: 'right',
        // verticalAlign: 'middle',
        // borderWidth: 0
    };

    var series = [
        {
            name: '',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
                26.5, 23.3, 18.3, 13.9, 9.6]
        }
    ];

    var json = {};

    json.title = title;
    json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;

    $('#container').highcharts(json);




    // input全选
    $("input[name=ads]").click(function () {
        if ($("input[name=ads]:checked").length > 0) {
            $("input[type=checkbox]").attr("checked", true);
        } else {
            $("input[type=checkbox]").attr("checked", false);
        }
    })




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

            if ($(".myolder").css("display") == "list-item") {
                var num = $(".get-page2").val();
                if (num) {
                    $('#paging-id').jqPaginator({
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
                    $(".get-page2").val("");
                }
            } else if ($(".older").css("display") == "list-item") {
                var num = $(".get-page1").val();
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
                    $(".get-page1").val("");
                }
            } else if ($("#invoice-s-id").css("display") == "block") {
                var num = $(".get-page-s2").val();
                if (num) {
                    $('#apply-fenye').jqPaginator({
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
                    $(".get-page-s2").val("");
                }
            } else if ($("#invoice-list-id").css("display") == "block") {
                var num = $(".get-page3").val();
                if (num) {
                    $('#paging-invoice').jqPaginator({
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
                    $(".get-page3").val("");
                }
            };
            if ($(".lists-detail").css("display") == "block") {
                var num = $(".get-page4").val();
                if (num) {
                    $('#lists-paing').jqPaginator({
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
                    $(".get-page4").val("");
                }
            }

            var num3 = $(".get-page33").val();
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
                $(".get-page33").val("");
            }
            var num4 = $(".get-page44").val();
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
                $(".get-page44").val("");
            }
            var num5 = $(".get-page55").val();
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
                $(".get-page55").val("");
            }
        }
    }


    // 分时间
    $('#datetimepicker1').datetimepicker({
        datepicker: false,
        format: 'H:i',
        step: 1
    });
    $('#datetimepicker2').datetimepicker({
        datepicker: false,
        format: 'H:i',
        step: 1
    });
    $('#datetimepicker3').datetimepicker({
        datepicker: false,
        format: 'H:i',
        step: 1
    });
    $('#datetimepicker4').datetimepicker({
        datepicker: false,
        format: 'H:i',
        step: 1
    });


    // 
    $(".xkes1").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box1").hide();
    })
    $(".xkes2").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box2").hide();
    })
    $(".xkes3").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box3").hide();
    })
    $(".xkes4").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box4").hide();
    })
    $(".xkes5").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box5").hide();
    })
    $(".xkes6").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box6").hide();
    })
    $(".xkes7").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box7").hide();
    })
    $(".xkes8").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box8").hide();
    })

    // 
    $(".start-time2").focus(function () {
        $(this).siblings("#schedule-box2").show();
        $(this).siblings(".xkes2").show();
    })
    $(".start-time3").focus(function () {
        $(this).siblings("#schedule-box3").show();
        $(this).siblings(".xkes3").show();
    })
    $(".start-time4").focus(function () {
        $(this).siblings("#schedule-box4").show();
        $(this).siblings(".xkes4").show();
    })
    $(".start-time5").focus(function () {
        $(this).siblings("#schedule-box5").show();
        $(this).siblings(".xkes5").show();
    })
    $(".start-time6").focus(function () {
        $(this).siblings("#schedule-box6").show();
        $(this).siblings(".xkes6").show();
    })
    $(".start-time7").focus(function () {
        $(this).siblings("#schedule-box7").show();
        $(this).siblings(".xkes7").show();
    })
    $(".start-time8").focus(function () {
        $(this).siblings("#schedule-box8").show();
        $(this).siblings(".xkes8").show();
    })

    // 时间日期选择
    var mySchedule = new Schedule({
        el: '#schedule-box2',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time2").val(y + '-' + m + '-' + d);
        }
    })
    var mySchedule = new Schedule({
        el: '#schedule-box3',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time3").val(y + '-' + m + '-' + d);
        }
    })
    var mySchedule = new Schedule({
        el: '#schedule-box4',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time4").val(y + '-' + m + '-' + d);
        }
    })
    var mySchedule = new Schedule({
        el: '#schedule-box5',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time5").val(y + '-' + m + '-' + d);
        }
    })
    var mySchedule = new Schedule({
        el: '#schedule-box6',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time6").val(y + '-' + m + '-' + d);
        }
    })
    var mySchedule = new Schedule({
        el: '#schedule-box7',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time7").val(y + '-' + m + '-' + d);
        }
    })
    var mySchedule = new Schedule({
        el: '#schedule-box8',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time8").val(y + '-' + m + '-' + d);
        }
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