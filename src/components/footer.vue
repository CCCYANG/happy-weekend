<template name="Foot">
    <ul class="footer">
        <li>首页</li>
        <li>精选</li>
        <li>搜索</li>
        <li>分类</li>
        <li>用户</li>
    </ul>
</template>

<script>
export default {
    name: 'Foot',
}
</script>

<style lang="scss">
.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;

    li {
        flex: 1;
        // width: 20%;
    }
}
</style>
