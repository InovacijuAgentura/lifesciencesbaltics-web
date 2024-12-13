<template lang="pug">
.countdown
  .timeleft {{$t('lefttime')}}
  .grid
    .mt
      .val {{ days }}
      .lbl {{$t('days')}}
    .mt
      .val {{ hours }}
      .lbl {{$t('hours')}}
    .mt
      .val {{ minutes }}
      .lbl {{$t('minuts')}}
    .mt
      .val {{ seconds }}
      .lbl {{$t('seconds')}}
</template>

<script>

export default {

  name: 'Countdown',
  props: ['endDate'],
  components: {
  },
  created() {
  },
  data() {
    return {

      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      isEnded: null
    };
  },

  methods: {
    updateRemaining (distance) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
    },
    
    tick () {
      const currentTime = new Date()
      const endTime = new Date(this.endDate)
      const distance = Math.max(endTime - currentTime, 0)
      this.updateRemaining(distance)
      
      if (distance === 0) {
        clearInterval(this.timer)
        this.isEnded = true
      }
    }
  },
  
  mounted () {
    this.tick()
    this.timer = setInterval(this.tick.bind(this), 1000)
  },
  
  destroy () {
    clearInterval(this.timer)
  }
};
</script>

<style scoped lang="scss">

.grid {
    display: flex;
    flex-wrap: wrap;
}

.timeleft {
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: 14px;
}

.mt {
    text-align: center;
    width: 23%;
    position: relative;

    &:not(:last-child) {
        &:before {
            content: '';
            position: absolute;
            height: 66px;
            width: 1px;
            background: #8E9EA7;
            z-index: 1;
            top: 0;
            right: 0;
            transform: rotate(35deg);
        }
    }

    &:first-child {
        width: 31%;
    }
    .val {
        font-size: 75px;
        line-height: 67px;
        font-family: 'MyriadPro'; 
    }
    .lbl {
        font-size: 14px;
    }

    &:last-child {
        color: #DA85B6;
    }
}

@media screen and (max-width: 1024px) {
    .mt {
        width: 25%;

        &:first-child {
            width: 25%;
        }

        &:not(:last-child) {
            &:before {
                height: 100%;
                transform: rotate(0);
            }
        }
        .val {
            font-size: 50px;
        }
    }
}
@media screen and (max-width: 768px) {
    .timeleft {
        font-size: 16px;
    }

    .mt {
        .val {
            font-size: 40px;
            line-height: 36px;
        }

        .lbl {
            font-size: 12px;
        }
    }
}

</style>
