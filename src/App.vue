<template>
    <div class="container" >

      <header class="margTop">
        <div class="container nonPadding  ">
          <nav class="navbar navbar-expand-lg navbar-light bg-light myNavStyle">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse myNavStyle" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto  col nonPadding">
                <router-link class="nBtn nav-link myNavItem" to="/" >Резюме</router-link>
                <router-link class="nBtn nav-link myNavItem" to="/#/maps" >Карта</router-link>
                <router-link class="nBtn nav-link myNavItem" to="/#/timer" >Таймер</router-link>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <!---------------->
      <router-view></router-view>
      <!---------------->
    </div>
</template>

<script>

  export default {
    methods:{
      setCookie: function(){
        if(this.$session.get('timer')){
          this.$cookie.set('timer', this.$session.get('timer'))

        } else {
          this.$cookie.set('timer', (new Date()).getTime())
          this.$session.set('timer', (new Date()).getTime())

        }
      }
    },
    beforeMount(){
      this.setCookie()
    }
  }


</script>

<style >

  body{
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    color: #868585;
    background: #fdfcfb;
    font-weight: normal;
  }

  img{
    max-width: 100%;
    height: auto;
  }

  .myNavStyle{
    background-color: white;
    padding: 0px;
  }

  .myNavItem{
  //padding-left: 100px;
  //padding-right: 100px;
  //outline: 1px solid gray;
  //width: 140px;
  //width: 100%;
    border: 1px dashed #A2A2A2;
    text-align: center;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .router-link-exact-active{
    background-color: #E6E6E6;
  }

  .myContStyle{
    border-radius: 14px;
    border: 1px dashed #A2A2A2;

  }

  .myImg{
    display: block;
    max-width: 70%;
    margin: 0 auto;
  }

  .myH1{
    text-align: center;
  //outline: 1px solid gray;
    margin: 20px auto;
    color: black;
    font-size: 26px;
  }

  .myH2{
    color: black;
    font-size: 20px;
    text-decoration: underline;
  }

  .mySpan{
    font-weight: bold;
  }

  .myP{
    color: black;
    font-size: 16px;
  }

  .timerDiv{
    color: black;
    font-size: 36px;
  }

  .content{
    display: none;
  }

  .myDisplay {
    display: block;
  }

  .margTop{
    margin-top: 35px;
  }

  .nonPadding{
    padding-left: 0px;
    padding-right: 0px;
  }

  .outline{
    outline: 1px solid gray;
  }


  .myMap{
    padding-top: 15px;
    padding-bottom:15px;
    position: relative;
  }

  @media only screen and (max-width: 1200px) {

  }

  @media only screen and (max-width: 1200px) {

  }

  @media only screen and (max-width: 1200px) {

  }

  @media only screen and (max-width: 1200px) {

  }

</style>
