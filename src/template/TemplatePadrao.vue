<template>
  <span>
    <div class="hold-transition sidebar-mini">
    <div class="wrapper">

      <menu-superior/>

      <menu-esquerdo/>
      <slot name="principal" />
      <menu-direito/>

      <rodape/>

    </div>
  </div>
  </span>
</template>

<script>
import MenuSuperior from '@/components/widgets/MenuSuperior'
import MenuEsquerdo from '@/components/widgets/MenuEsquerdo'
import MenuDireito from '@/components/widgets/MenuDireito'
import Rodape from '@/components/widgets/Rodape'
import Inicial from '@/components/forms/Inicial'

export default {
  name: 'TemplatePadrao',
  props:['x'],
  data () {
    return {

    }
  },
  components:{
    MenuSuperior,
    MenuEsquerdo,
    Rodape,
    MenuDireito,
    Inicial
  },
  created(){
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
    }else{
      this.$router.push('/login');
    }
  }
}
</script>
