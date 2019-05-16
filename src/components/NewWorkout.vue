<template>
  <div>
    <Timer
        :finalTime="finalTime"
        @stoppedTimer="stoppedTimer"
    >
    </Timer>
    <div class="moves-wrapper">
      <h1>{{lowerCaseWeekDay}} workout</h1>
      <p v-if="moves.length === 0"><i>no moves yet... add one below!</i></p>
      <table v-else>
        <thead>
          <tr>
            <th>move</th>
            <th>reps</th>
            <th>sets</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="move in moves" v-bind:key="move.name">
            <td>{{move.name}}</td>
            <td>{{ move.reps}}</td>
            <td>{{ move.sets}}</td>
            <button class="btn-delete" @click="deleteMove(move.id)">x</button>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="form-wrapper">
      <button class="btn-primary" @click="toggleOpenForm()">add a new move {{formIcon}}</button>
      <form v-if="openForm" @submit.prevent="addMove">
        <div class="input-group">
          <label for="name"> name</label>
          <input type="text" name="name" v-model="form.name" id="name" placeholder="Leg raises">
        </div>

        <div class="input-group">
          <label for="reps"> reps</label>
          <input type="text" name="reps" v-model="form.reps" id="reps" placeholder="8 to 10">
        </div>

        <div class="input-group">
          <label for="sets"> sets</label>
          <input type="text" name="sets" v-model="form.sets" id="sets" placeholder="4">
        </div>

        <div>
          <button class="btn-secondary" type="submit">add move</button>
          <button class="btn-secondary" @click="cancelMove">cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .moves-wrapper {
    margin: 30px auto;
    .btn-delete {
      background-color: #ff7373;
      width: 20px;
      padding: 8px;
      border-radius: 0px;
      color: #ffffff;
      font-weight: 800;
    }
  }
  .form-wrapper {
    .input-group {
      margin: 8px auto;
      label, input {
        width: 100px;
        display: inline-block;
      }
      input {
        border: none;
        padding: 8px;
      }
    }
  }
  table {
    margin: 0 auto;
    border-collapse: collapse;
    theader {
      tr {
        background: #80b5eb;
      }
    }
    th, td {
      border: solid #2c3e50;
      padding: 2px 5px;
      text-align: left;
      width: 40px;
    }
  }
</style>


<script>
import db from '../firebase'
import moment from 'moment';
import Timer from './Timer'

export default {
  name: 'NewWorkout',
  components: {
    Timer
  },
  data() {
    return {
      uid: this.uidFormat(),
      duration: Timer.time,
      overallFeels: '',
      weekDay: moment().format('dddd'),
      form: this.formDefaults(),
      workout: '',
      moves: [],
      finalTime: {},
      openForm: false
    }
  },
  firestore() {
    return {
      workout: db.collection('workouts').doc(this.uid),
      moves: db.collection('workouts').doc(this.uid).collection('moves')
    }
  },
  mounted() {
    this.getOrSetWorkout()
  },
  computed: {
    lowerCaseWeekDay() {
      return this.weekDay.toLowerCase()
    },
    formIcon() {
      return this.openForm ? '☝️' : '👇'
    }
  },
  methods: {
    toggleOpenForm() {
      this.openForm = !this.openForm
    },
    uidFormat() {
      return moment().format("MMM Do YY").replace(/\s/g, '-')
    },
    getOrSetWorkout() {
      db.collection('workouts').doc(this.uid).get().then( doc => {
        if (!doc.exists) {
          this.addWorkout()
        }
      })
    },
    addWorkout() {
      db.collection('workouts').doc(this.uid).set(this.workoutDefaults())
    },
    addMove() {
      db.collection('workouts').doc(this.uid).collection('moves').add({...this.form})
    },
    cancelMove() {
      this.form = this.formDefaults()
    },
    deleteMove(id) {
      db.collection('workouts').doc(this.uid).collection('moves').doc(id).delete()
    },
    completeWorkout() {
      db.doc(`workouts/${this.uid}`).update({complete: true, time: this.time})
    },
    stoppedTimer(time) {
      this.time = time
      this.completeWorkout()
    },
    formDefaults() {
      return {
        name: '',
        reps: '',
        sets: ''
      }
    },
    workoutDefaults() {
      return {
        createdAt: this.uid,
        weekDay: this.weekDay,
        moves: [],
        complete: false
      }
    }
  }
}
</script>
