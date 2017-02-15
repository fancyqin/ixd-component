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
        }
    }
</style>
<template>
    <div class="sider">
        <ul class="list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/form/text">Text</router-link></li>
        </ul>
    </div>
</template>