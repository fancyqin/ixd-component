<style lang="scss">
    body,div{
        margin: 0;
        padding: 0;
    }
</style>

<template>
    <div id="app">
        <i-header></i-header>
        <div>
            <div class="sider">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/form/text">Text</router-link></li>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/">Home</router-link></li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
        <i-footer></i-footer>
    </div>
</template>

<script>
    import IHeader from './components/header.vue'
    import IFooter from './components/footer.vue'
    export default {
        name: 'app',
        components:{
            IHeader,
            IFooter
        }
    }
</script>

