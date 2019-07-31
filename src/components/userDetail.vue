<template>
  <v-container fluid grid-list-md>
    <app-user-edit :heading="heading">This content belongs to Heading Card</app-user-edit>
    <app-user-edit :heading="'Test'" :btn-type="'add'">This is a test content</app-user-edit>
    <app-user-edit :heading="'Test'" :btn-type="'edit'">This is a test content</app-user-edit>
  </v-container>
</template>

<script>
import UserEdit from "./userEdit.vue";
export default {
  data: function() {
    return {
      heading: "First Card"
    };
  },
  components: {
    appUserEdit: UserEdit
  }
};
</script>

<style>
</style>
