<template>
  <div class='footwear'>
    <select
    class="footwear__select"
    v-model="selectedValue"
    >
      <option disabled value="">Выберите один из вариантов</option>
      <option>0</option>
      <option>1</option>
    </select>
    <input
      type='text'
      class='footwear__input'
      v-bind:value='inputValue'
      v-on:input='inputChange'
      placeholder='Enter the length of the foot in mm'
    />
    <span>Выбрано: {{ selectedValue }}</span>
    <h2 v-if="inputValue < 1 & selectedValue == !'' ">
      You have't entered the length of the foot!
    </h2>
    <h2 v-if="inputValue < 1 & selectedValue == ''">
      Enter values
    </h2>
    <div class='container' v-if='inputValue > 0 && selectedValue == 1'>
      <h2 >Your size is...</h2>
      <table class='footwear__table'>
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
    },
    selectedValueMethod () {
      console.log(this.selectedValue)
    }
  },

  components: {}
}
</script>

<style lang='scss'>
.container {
  margin: 0 10vw;
}
.footwear__select{
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
</style>
