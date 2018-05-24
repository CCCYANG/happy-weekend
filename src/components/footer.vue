<template name="Foot">
    <ul class="footer">
        <li>
            <router-link to="/home">
                <span class="icon icon-home"></span>
                <p class="home">首页</p>
            </router-link>
        </li>
        <li>
            <router-link to="/choice">
                <span class="icon icon-jx"></span>
                <p>精选</p>
            </router-link>
        </li>
        <li>
            <router-link to="/search">
                <img src="../assets/ss.png" alt="" class="search">
            </router-link>
        </li>
        <li>
            <router-link to="/classify">
                <span class="icon icon-fl"></span>
                <p>分类</p>
            </router-link>
        </li>
        <li>
            <router-link to="/user">
                <span class="icon icon-gr"></span>            
                <p>用户</p>
            </router-link>
        </li>
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
    font-size: 12px;
    border-top: 1px solid #ccc;

    li {
        flex: 1;
        height: 45px;
        padding-top: 2px;

        a {
            color: #A8A8A8;
            .icon {
                display: inline-block;
                width: 20px;
                height: 20px;
                background-size: 20px 20px; 
            }
            .icon-home {
                background-image: url("../assets/home1.png");
            }
            .icon-jx {
                background-image: url("../assets/jx1.png");
            }
            .icon-fl {
                background-image: url("../assets/fenlei1.png");
            }
            .icon-gr {
                background-image: url("../assets/geren1.png")
            }   
            .search {
                width: auto;
                height: 40px;
            }
        }

        .router-link-active {
            color: #41CCB4;

            .icon-home, .icon-gr {
                background-image: url('../assets/home2.png');
            }
            .icon-jx {
                background-image: url("../assets/jx2.png");
            }
            .icon-fl {
                background-image: url("../assets/fenlei2.png");
            }
        }
    }
    
}
</style>
