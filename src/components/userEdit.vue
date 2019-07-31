<template>
<div>
  <h3>{{heading}}</h3>
  <button  v-if="btnType === 'add'">Increment</button>
  <button  v-if="btnType === 'edit'">Increment</button>
  <slot></slot>
</div>
 
</template>
<script>
export default {
  props: {
    heading: String,
    btnType: String
  }
}
</script>
