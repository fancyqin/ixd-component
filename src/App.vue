<style lang="scss">
    @import './assets/css/demo.css';
    @import './assets/css/ob.scss';
    body,div{
        margin: 0;
        padding: 0;
        font: 12px/1.5 'Roboto',Roboto,Arial,'Microsoft Yahei',sans-serif;
    }
    *{
        box-sizing: border-box;
    }
    .content{
        position: fixed;
        top: 60px;
        bottom: 30px;
        left: 0;
        right: 0;
        background: #f0f1f2;
        .main{
            position: absolute;
            top: 0;
            left: 200px;
            right: 0;
            bottom: 0;
            overflow-y: auto;
        }
    }
</style>

<template>
    <div id="app">
        <i-header></i-header>
        <div class="content">
            <i-sider></i-sider>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
        <i-footer></i-footer>
    </div>
</template>

<script>
    import IHeader from './components/header.vue';
    import IFooter from './components/footer.vue';
    import ISider from './components/sider.vue';

    export default {
        name: 'app',
        components:{
            IHeader,
            IFooter,
            ISider
        }
    }
</script>

