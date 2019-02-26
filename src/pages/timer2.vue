<template>


  <div id="timer2">
    <div class="margTop container myContStyle ">
      <div class="loadCont">

        <div class="mt-3">Таймер запущен уже: <div class="timerDiv">
          <span v-if="days > 0">{{ days }} дн.</span>
          <span v-if="hours > 0">{{ hours }} час.</span>
          <span v-if="minutes > 0">{{ minutes }} мин.</span>
          <span>{{ sec }} сек.</span>

        </div></div>

        <button @click="reset" class="btn btn-primary mb-3">Сбросить</button> Обнулен уже {{ id }} раз(а)


      </div>
    </div>
  </div>
</template>

<script>
  export default {

    data(){
      return {
        resource: null,
        timer: 0,
        seconds: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        sec: 0,
        value: 2,
        id: 0,
        intervalId: 0
      }
    },
    methods:{

      loadTimer2(){

            this.intervalId = setInterval(() => {
              this.resource.get().then(response => {
                  return response.json()
                })
                .then(ob => {
                  this.seconds = ob[ob.length - 1].value
                  this.id = ob[ob.length - 1].id
                  console.log('loadTimer')

                  this.recalculation()
                })

            }, 1000);
      },

      recalculation(){
        this.timer = ((new Date()).getTime()/1000).toFixed(0) - (this.seconds / 1000).toFixed(0)
        this.minutes = Math.floor(this.timer / 60)
        this.hours = Math.floor(this.minutes / 60)
        this.minutes = this.minutes % 60
        this.days = Math.floor(this.hours / 24)
        this.sec = this.timer % 60
      },

      reset(){
        const timer2 ={
          value: (new Date()).getTime()
        }
        this.resource.save({}, timer2)
        console.log('reset')
      },
      clearIntId(){
        clearInterval(this.intervalId)
      }

    },
    created(){
      this.resource = this.$resource('http://localhost:3000/timer2')
      this.loadTimer2()
    },
    beforeDestroy(){
      this.clearIntId()

    }
  }

</script>

<style scoped>

</style>
