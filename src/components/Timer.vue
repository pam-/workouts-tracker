<template>
  <div>
    <div class="workout-buttons">
      <button class="btn-primary" @click="start()">start workout</button>
      <button class="btn-primary" @click="pause()">pause workout</button>
      <button class="btn-primary" @click="stop()">complete workout</button>
    </div>
    <div class="timer-buttons">
      <div class="timer">{{formatTime(this.time.minutes)}}:{{formatTime(this.time.seconds)}}</div>
      <button class="btn-secondary" @click="restart()">restart timer</button>
      <button class="btn-secondary" @click="reset()">reset timer</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timer {
  padding: 10px;
  background: #2c3e50;
  width: 200px;
  margin: 0 auto;
  border-radius: 10px;
  color: #fff;
  font-size: 2em;
  font-weight: 800;
}
</style>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      time: {
        minutes: 0,
        seconds: 0
      },
      timerInterval: null,
    }
  },
  methods: {
    formatTime(time) {
      return time > 9 ? time : '0' + time
    },
    start() {
      this.timerInterval = setInterval(() => {
        if (this.time.seconds === 60) {
          this.time.minutes++
          this.time.seconds = 0;
        }
        this.time.seconds++
      }, 1000);
    },
    pause() {
      clearInterval(this.timerInterval)
    },
    restart() {
      this.pause()
      this.time.seconds = this.time.minutes = 0
      this.start()
    },
    reset() {
      clearInterval(this.timerInterval)
      this.time.seconds = this.time.minutes = 0
    },
    stop() {
      clearInterval(this.timerInterval)
      this.$emit('stoppedTimer', this.time)
    }
  }
}
</script>
