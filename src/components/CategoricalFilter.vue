<template>
  <div class="dropdown">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      All biobanks
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#" v-for="option in refOptions">{{option}}</a>
    </div>
  </div>
</template>
<script>
  import api from '@molgenis/molgenis-api-client'

  export default {
    name: 'boolean-filter',
    props: [
      'label',
      'id',
      'optionsRef'
    ],
    computed: {
      refOptions () {
        return api.get(this.optionsRef).then(response => {
          const options = response.items.map(option => {
            return option.id
          })
          console.log(options)
          return options
        })
      }
    }
  }
</script>
