<template>
  <div class="dropdown">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      All biobanks
    </button>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#" v-for="option in options">{{option.label}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DropdownFilterComponent',
    props: ['options']
  }
</script>
