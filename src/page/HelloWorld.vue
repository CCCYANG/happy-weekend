<template>
  <div class="home">
    <ul class="homeHeader">
      <li>
        <a href="javascript:;">全国站▼</a>
      </li>
      <li>
        <img src="../assets/mlogo.png" />
      </li>
      <li>
        <div>登陆</div>
        <div>注册</div>
      </li>
    </ul>
  </div>  
</template>

<script>
import { XButton } from 'vux'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    XButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.homeHeader {
  display: flex;
  background-color: #41CCB4;

  li {
    flex: 1;
    line-height: 5.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #fff;
    }

    img {
      display: block;
      height: 5.2rem;
    }
    
    div {
      background-color: #41CCB4;
      color: #fff;
      cursor: pointer;
      padding: 0 0.5rem;
      border: 1px solid #fff;
      height: 3rem;
      line-height: 3rem;
      box-sizing: border-box;
      border-radius: 3px;
      margin-left: 0.5rem
    }
  }
}
</style>
