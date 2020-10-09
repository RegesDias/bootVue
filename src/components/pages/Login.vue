<template>
  <span>
    <div class="hold-transition login-page">
      <div class="login-box">
        <div class="login-logo">
          <a href="#"><b>Admin</b>LTE</a>
        </div>
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Clique em entrar para iniciar o Sistema</p>
            <div>
              <div class="input-group mb-3">
                <input v-model='email' type="email" class="form-control" placeholder="Email">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input v-model='password' type="password" class="form-control" placeholder="Password">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8"/>
                <div class="col-4">
                  <button v-on:click="login()" type="submit" class="btn btn-primary btn-block">Entrar</button>
                </div>
              </div>
            </div>
            <p class="mb-1">
              <a href="forgot-password.html">Esqueci minha senha</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "Login",
  components: {
  },
  data() {
    return {
      email:'',
      password:''
    };
  },
  created(){
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      console.log("teste")
      this.$router.push('/');
    }
  },
  methods:{
    login(){
      this.$http.post(this.$urlApi+'login', {
        email: this.email,
        password: this.password
      })
      .then(response=>{
        if(response.data.status){
          //login com sucesso
          console.log(this.$store);
          this.$store.commit('setUsuario', response.data.usuario);
          sessionStorage.setItem('usuario',  JSON.stringify(response.data.usuario));
          this.$router.push('/');
        }else if (response.data.status == false && response.data.validacao){
          //erros de validacao
          let erros = '';

          for(let erro of Object.values(response.data.erros)){
            erros += erro + " ";
          }
          alert(erros);

        }else{
          //login nao existe
          alert("Login inválido")
        }
      })
      .catch(e=>{
        console.log(e)
        alert("Erro: Tente novamente mais tarde.")
      });
    }
  }
};
</script>
