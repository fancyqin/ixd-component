<style lang="scss">
    .sider{
        position: absolute;
        top: 0;
        left: 0;
        bottom:0;
        float: left;
        width: 200px;
        border-right: 1px #ddd solid;
        background: #fff;
        .list{
            margin: 0;
            padding: 20px 0;
            list-style: none;
            font-size: 14px;
            > li{
                a{
                    display: block;
                    height: 30px;
                    line-height: 30px;
                    padding: 0 20px;
                    text-decoration: none;
                    color: #333;
                    
                }
                .router-link-active{
                    background: #f3f5f7;
                }
                span{
                    display: block;
                    height: 30px;
                    line-height: 30px;
                    padding: 0 20px;
                }
            }
            
            .list-jr{
                list-style: none;
                margin: 0;
                padding: 0;
                li{
                    a{
                        padding-left: 40px;
                    }
                    .router-link-active{
                        background: #f3f5f7;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="sider">
        <ul class="list">
            <li><router-link to="/">Home</router-link></li>
            <li>
                <span>表单</span>
                <ul class="list-jr">
                    <li><router-link to="/form/input">文本框</router-link></li>
                    <li><router-link to="/form/input-associate">联想文本框</router-link></li>
                    <li><router-link to="/form/textarea">文本域</router-link></li>
                    <li><router-link to="/form/placeholder">暗注释</router-link></li>
                </ul>
            </li>
        </ul>
    </div>
</template>