<template>
  <div class="create-user">
    <NewUserForm />
  </div>
</template>

<script>
import NewUserForm from '@/components/NewUserForm.vue';

export default {
  name: 'user-form',
  components: {
    NewUserForm,
  },
};
</script>
