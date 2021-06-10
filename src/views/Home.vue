<template>
  <div class="footwear">
    <select class="footwear__select" v-model="selectedValue">
      <option disabled value="">Enter brand</option>
      <option value="2">Adidas</option>
      <option value="3">ASICS</option>
      <option value="4">Nike</option>
      <option value="5">Reebok</option>
    </select>
    <input
      type="text"
      class="footwear__input"
      v-bind:value="inputValue"
      v-on:input="inputChange"
      placeholder="Enter the length of the foot in mm"
    />
    <span>Выбрано: {{ selectedValue }}</span>
    <transition name="fade">
      <h2 v-if="inputValue == 0 && selectedValue > 0">
        You have't entered the length of the foot!
      </h2>
    </transition>
    <transition name="fade">
      <h2 v-if="inputValue < 1 && selectedValue == 0">Enter values</h2>
    </transition>
    <transition name="fade">
      <h2 v-if="selectedValue == 0 && inputValue > 0">Enter brand</h2>
    </transition>
    <transition name="fade">
      <div
        class="container"
        v-if="inputValue > 0 && selectedValue.length !== 0"
      >
        <h2>Your size is...</h2>
        <table class="footwear__table">
          <tbody>
            <tr>
              <td>EUR</td>
              <td>US</td>
              <td>UK</td>
              <td>RU</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'footwear',

  data () {
    return {
      inputValue: '',
      selectedValue: ''
    }
  },

  methods: {
    inputChange (event) {
      this.inputValue = event.target.value
    }
  },

  components: {}
}
</script>

<style lang='scss'>
.container {
  margin: 0 10vw;
}
.footwear__select {
  margin-right: 20px;
  font-size: 16px;
}
.footwear__input {
  width: 238px;
  font-size: 16px;
}
.footwear__table {
  width: 100%;
  height: auto;
  margin-top: 20px;
  border-collapse: collapse;
  border-spacing: 0;
  td {
    padding: 10px;
    border: 1px solid #e5e5e5;
  }
}
.fade-enter-active, .fade-leave-active{
  transition-property: opacity;
  transition-duration: .5s;
}
.fade-enter-active{
  transition-delay: .1s;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
}
</style>
