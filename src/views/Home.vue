<template>
  <div class="footwear">
    <transition name="fade">
      <h2>
        {{ messageNew () }}
      </h2>
    </transition>
    <select class="footwear__select" v-model="selectedValue">
      <option disabled value="">Enter brand</option>
      <option value="1">Adidas</option>
      <option value="2">ASICS</option>
      <option value="3">Nike</option>
      <option value="4">Reebok</option>
    </select>
    <input
      type="text"
      class="footwear__input"
      v-bind:value="inputValue"
      v-on:input="inputChange"
      placeholder="Enter the length of the foot in mm"
    />
    <transition name="fade">
      <div
        class="container"
        v-if="inputValue > 0 && selectedValue.length !== 0"
      >
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
      selectedValue: '',
      sizes: ({
        sizeEUR: '',
        sizeUK: '',
        sizeUS: '',
        sizeCM: ''
      })
    }
  },
  methods: {
    inputChange (event) {
      this.inputValue = event.target.value
    },
    messageNew () {
      if (this.selectedValue === '' && this.inputValue > 0) {
        return 'Enter brand'
      } else if (this.selectedValue !== '' && this.inputValue <= 0) {
        return "You have't entered the length of the foot"
      } else if (this.selectedValue !== '' && this.inputValue !== 0) {
        return 'Yor size is...'
      } else if (this.selectedValue === '' && this.inputValue === '') {
        return 'Enter values'
      }
    }
  },
  computed: {
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
.fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  transition: .5s;
  opacity: 0;
}
.fade-enter{
  transition: opacity .5;
  transition: .5s;
}
.fade-enter-to{
 transition: .5s;
 transition: opacity .5;
}
</style>
