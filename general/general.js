$(function(){
    // 最新监控告警的分页
    $('#paging').jqPaginator({
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
            console.log("你选择的=>",n,"页");
        }
    });

    // 监控域名或IP的分页
    $('#paging-ip').jqPaginator({
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
            console.log("你选择的=>",n,"页");
        }
    });
    
    //选择哪种支付方式
    $(".method-img").click(function(){
        $(this).css({boxShadow:"0 0 1px blue"}).siblings().css({boxShadow:"0 0 0"});    
    })

    //取消支付
    $(".canel").click(function(){
        $(".popup-recharge").css({display:"none"});
    })

    //充值
    $(".recharge-button").click(function(){
        $(".popup-recharge").css({display:"block"});  
    })

    //API使用统计的分页
    $('#paging-api').jqPaginator({
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
            console.log("你选择的=>",n,"页");
        }
    });

    //曲线图
    var title = {
        text: ''   
     };
     var subtitle = {
        text: ''
     };
     var xAxis = {
        categories: []
     };
     var yAxis = {
        title: {
        //    text: 'Temperature (\xB0C)'
        },
        plotLines: [{
        //    value: 0,
        //    width: 1,
        //    color: '#808080'
        }]
     };   
  
     var tooltip = {
        // valueSuffix: '\xB0C'
     }
  
     var legend = {
        // layout: 'vertical',
        // align: 'right',
        // verticalAlign: 'middle',
        // borderWidth: 0
     };
  
     var series =  [
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
})