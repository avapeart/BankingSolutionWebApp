import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
  },
  name: 'jointAccount',
})
export default class JointAccountView extends Vue {
  public email = '';
  public phonenumber = '';
  public trn = '';
  public username = '';
  public password = '';
  public output = '';

  constructor() {
    super();
  }


    public formSubmit( e: any ) {
        e.preventDefault();
        const currentObj = this;
        this.axios.post('http://localhost:4003/api/signup', {
            email: this.email,
            phonenumber: this.phonenumber,
            trn: this.trn,
            username: this.username,
            password: this.password,
        }).then( ( response ) => {
          window.location.href = '#/login';
          alert('Account Created!');
      })
        // add a redirect to the login page
        .catch( ( error ) => {
            currentObj.output = error;
        });
    }
  private mounted() {
    // a
  }
}
