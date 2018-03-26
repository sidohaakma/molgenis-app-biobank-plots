<template>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" :id="id">
    <label class="custom-control-label" :for="id">{{label}}</label>
  </div>
</template>
<script>
  export default {
    name: 'boolean-filter',
    props: [
      'label',
      'id'
    ]
  }
</script>
