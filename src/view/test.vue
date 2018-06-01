<template lang="html">
  <div class="test">
      I love you {{$route.params.testId}}
      <!-- I love you {{$route.params.testName}} -->
  </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'hello world'
        }
    }
}
</script>

<style lang="css">
</style>
