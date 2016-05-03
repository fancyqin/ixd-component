<style lang="sass">
    .mail-wrap{
    padding: 20px;
    .mail-ctrl{
        text-align: center;
        margin-bottom: 20px;
        .btn{
            position: relative;
            width: 360px;
            height:60px;
            line-height: 60px;
            font-size: 20px;
            font-weight: bold;
            border-radius: 30px;
            overflow: hidden;
            &:before{
                content: '';
                position: absolute;
                width: 120px;
                height: 30px;
                left: 380px;
                top: 15px;
                background: #F4EAD5;
                transform: rotate(-45deg);
                transition: all .4s;
            }
            &:hover:before{
                transform: translate(-500px) rotate(-45deg);
            }
        }
    }
    .mail-title{
        font-size: 24px;
        color: #9E7C72;
    }
    .mail-box{
        .select-month{
            padding: 10px 0;
            select{
                width: 200px;
                height: 30px;
                padding-left: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
        }
        .m-table{
            width: 100%;
            border: 1px solid #ccc;
            margin-top: 10px;
            td,th{
                text-align: left;
                padding: 10px;
                border:1px solid #ccc;
            }
            th{
                background: #F4EAD5;
            }
            tr:nth-child(2n + 1){
                background: #f2f2f2;
            }
        }
    }
}
</style>

<template>
    <div class="wrap">
        <comp-header></comp-header>
        <div class="content">
        <div class="mail-wrap">
            <div class="mail-ctrl">
                <a href="choose-demo.html" class="btn btn-main">开始制作邮件！</a>
            </div>
            <h2 class="mail-title">邮件列表</h2>
            <div class="mail-box">
                <div class="select-month">
                    <select name="" id="">
                        <option value="1601">2016年1月</option>
                        <option value="1602">2016年2月</option>
                        <option value="1603">2016年3月</option>
                        <option value="1604">2016年4月</option>
                        <option value="1605">2016年5月</option>
                        <option value="1606">2016年6月</option>
                    </select>
                </div>
                <div class="list-table J-table">
                    <table class="m-table">
                        <tr>
                            <th width="180">邮件名</th>
                            <th width="90">邮件类型</th>
                            <th>邮件标题</th>
                            <th width="100">制作人</th>
                            <th width="120">修改时间</th>
                            <th width="350">操作</th>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="J-del btn">删除</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="btn">删除</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="btn">删除</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="btn">删除</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="btn">删除</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="btn">删除</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="btn">删除</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="btn">删除</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="btn">删除</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>f1601-xms</td>
                            <td>节日类</td>
                            <td>Wish You a Happy Impressive Halloween</td>
                            <td>习近平</td>
                            <td>2016/01/01/ 13:43</td>
                            <td>
                                <div class="do-what">
                                    <a href="" class="btn">修改</a>
                                    <a href="" class="btn">代码</a>
                                    <a href="" class="btn">WEB代码</a>
                                    <a href="" class="btn">删除</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="pager">
                        <a href=""> ← </a>
                        <a class="on" href="">1</a>
                        <a href="">2</a>
                        <a href="">3</a>
                        <a href="">4</a>
                        <a href="">5</a>
                        <a href=""> → </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
        <comp-footer></comp-footer>
    </div>
</template>

<script>


    import CompHeader from '../components/header.vue'
    import CompFooter from '../components/footer.vue'
    export default{
        data(){
            return{
                msg:'Slim Shady'
            }
        },
        components:{
            CompHeader,
            CompFooter
        }
    }
</script>