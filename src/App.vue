<template>
  <div>
    <user-detail></user-detail>
  </div>
</template>

<script>
import User from './components/UserDetail';

export default {
  name: 'App',
  components: {
    userDetail: User
  },
  data () {
    return {
      //
    }
  }
}
</script>
