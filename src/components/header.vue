<style lang="sass">
header {
    width: 100%;
    position: absolute;
    top: 0;
    height: 60px;
    line-height: 60px;
    background: #9E7C72;
    color: #F4EAD5;
    .logo-wrap{
        float: left;
        width: 380px;
        padding-left: 20px;
    }
    .logo {
        float: left;
        text-transform: uppercase;
        font-size: 32px;
        font-family: 'Anton', Impact, Arial, sans-serif;
        font-weight: normal;
        .link {
            display: inline-block;
            position: relative;
            -webkit-transition: color 0s 0.5s;
            transition: color 0s 0.5s;
        }
        .link:hover {
            color: transparent;
            -webkit-transition: none;
            transition: none;
        }
        .link::before,
        .link::after {
            content: attr(data-letters);
            position: absolute;
            top: 0;
            left: 0;
            color: #F4EAD5;
            overflow: hidden;
            -webkit-backface-visibility: hidden;
            -webkit-transition: color 0.5s, -webkit-transform 0.5s;
            transition: color 0.5s, transform 0.5s;
        }
        .link::before {
            -webkit-clip-path: url(#cp_up);
            clip-path: url(#cp_up);
        }
        .link::after {
            -webkit-clip-path: url(#cp_down);
            clip-path: url(#cp_down);
        }
        .link:hover::before,
        .link:hover::after {
            color: #fff;
            -webkit-transition: color 0.5s, -webkit-transform 0.5s;
            transition: color 0.5s, transform 0.5s;
        }
        .link:hover::before {
            -webkit-transform: translate3d(1px, 0, 0);
            transform: translate3d(1px, 0, 0);
        }
        .link:hover::after {
            -webkit-transform: translate3d(-1px, 0, 0);
            transform: translate3d(-1px, 0, 0);
        }
        a {
            color: #F4EAD5;
            text-decoration: none;
        }
        a:hover {
            color: #fff;
        }
    }
    .demo-name {
        float: left;
        padding-left: 20px;
        font-size: 14px;
        height: 26px;
        line-height: 26px;
        margin: 17px 0 0 20px;
        border-left: 1px solid #F4EAD5;
    }
    .nav {
        float: left;
        li {
            float: left;
            min-width: 122px;
            box-sizing: border-box;
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            color: #9E7C72;
            text-align: center;
            a {
                display: block;
                padding: 0 25px;
                color: #F4EAD5;
                text-decoration: none;
                font-weight: bold;
            }
        }
        .current {
            background: #F4EAD5;
            a{
                color: #9E7C72;
            }
            //line-height: 24px;
        }

    }
    .login-box{
        float: right;
        margin-right: 20px;
        font-size: 14px;
        a{
            color: #400F00;
        }
    }
}
</style>

<template>
    <header>
        <svg class="hidden" viewBox="-200 0 350 60">
            <defs>
                <clipPath id="cp_up">
                    <polygon id="cp_poly_up" points="-200,0 350,0 350,60"></polygon>
                </clipPath>
                <clipPath id="cp_down">
                    <polygon id="cp_poly_down" points="-200,0 0,60 350,60"></polygon>
                </clipPath>
            </defs>
        </svg>
        <div class="logo-wrap">
            <h1 class="logo"><a class="link" href="" data-letters="Mail Maker">Mail Maker</a></h1>
        </div>
        <div class="nav">
            <ul>
                <li class="current"><a href="list.html">邮件列表</a></li>
                <li><a href="choose-demo.html">制作邮件</a></li>
            </ul>
        </div>
        <div class="login-box">
            <a href="login.html">登录</a>
            <!--after login-->
            <!--Welcome, UserName. <a href="">logout</a>-->
        </div>
    </header>
</template>


<script>
    export default{
        data(){
            return{
                msg:'紫紫紫紫色'
            }
        }
    }
</script>