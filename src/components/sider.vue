<style lang="scss">
    .sider{
        position: absolute;
        top: 0;
        left: 0;
        bottom:0;
        float: left;
        width: 200px;
        border-right: 1px saddlebrown solid;
        .list{
            margin: 0;
            padding: 10px;
            list-style: none;
            .list-jr{
                
                li{
                    
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
                    <li><router-link to="/form/placeholder">暗注释</router-link></li>
                    <li><router-link to="/form/placeholder">暗注释</router-link></li>
                    <li><router-link to="/form/placeholder">暗注释</router-link></li>
                    <li><router-link to="/form/placeholder">暗注释</router-link></li>
                    <li><router-link to="/form/placeholder">暗注释</router-link></li>
                    <li><router-link to="/form/placeholder">暗注释</router-link></li>
                </ul>
            </li>
            <li></li>
        </ul>
    </div>
</template>