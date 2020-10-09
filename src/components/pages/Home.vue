<template>
  <span>
    <template-padrao>
      <span slot="principal">
          <inicial/>
      </span>
  </template-padrao>
  </span>
</template>

<script>
import TemplatePadrao from '@/template/TemplatePadrao'
import Inicial from '@/components/forms/Inicial'


export default {
  name: 'Home',
  props:['x'],
  data () {
    return {

    }
  },
  components:{
    TemplatePadrao,
    Inicial
  }
}
</script>
