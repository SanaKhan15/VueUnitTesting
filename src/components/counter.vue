<template>
  <div>
    <div>counter: {{counter}}</div>
    <button @click="counter++">Increment</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  }
}
</script>

<style>
</style>
