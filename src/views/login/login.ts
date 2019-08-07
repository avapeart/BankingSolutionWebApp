import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  components: {
  },
  name: 'login',
})
export default class LoginView extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
  public email = '';
  public password = '';
  public output = '';
  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

    public formSubmit( e: any ) {
        e.preventDefault();
        const currentObj = this;
        this.axios.post('http://localhost:4003/api/login', {
            email: this.email,
            password: this.password,
        })
        .then( ( response ) => {
            localStorage.setItem('token', response.data.token);
            currentObj.output = response.data;
            window.location.href = '#/dashboard';
        })
        .catch( ( error ) => {
            currentObj.output = error;
        });
      }

  private mounted() {
    // TODO: stuff to do when this component loads.
  }
}

