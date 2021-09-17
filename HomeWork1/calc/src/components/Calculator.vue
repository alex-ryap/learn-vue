<template>
  <div class="calculator">
    <h1>Calculator</h1>
    <input v-model.number="num1" type="number" placeholder="First number" />
    <br />
    <input v-model.number="num2" type="number" placeholder="Second number" />
    <p class="result">Result: {{ res }}</p>
    <div class="operations">
      <button class="btn btn-operation" @click="calculate('+')">+</button>
      <button class="btn btn-operation" @click="calculate('-')">-</button>
      <button class="btn btn-operation" @click="calculate('/')">/</button>
      <button class="btn btn-operation" @click="calculate('*')">x</button>
      <button class="btn btn-operation" @click="calculate('x^')">
        x<sup>y</sup>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data: () => ({
    num1: 0,
    num2: 0,
    res: 0,
  }),
  methods: {
    calculate(operator) {
      switch (operator) {
        case '+': {
          this.res = this.num1 + this.num2;
          break;
        }
        case '-': {
          this.res = this.num1 - this.num2;
          break;
        }
        case '/': {
          this.res =
            this.num2 === 0
              ? 'Error. You can not divide by zero'
              : this.num1 / this.num2;
          break;
        }
        case '*': {
          this.res = this.num1 * this.num2;
          break;
        }
        case 'x^': {
          this.res = Math.pow(this.num1, this.num2);
          break;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  font-size: 20px;
  padding: 5px;
  text-align: center;
}

input:not(:last-child) {
  margin-top: 10px;
}

.result {
  font-size: 30px;
  margin: 20px 0;
}

.operations {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  font-size: 20px;
  padding: 10px 15px;
  color: white;
  background-color: orange;
  border: none;
  outline: none;
  border-radius: 10px;
  min-width: 50px;
  min-height: 50px;
}

.btn:active {
  opacity: 0.7;
}

.btn:not(:last-child) {
  margin-right: 5px;
}
</style>
