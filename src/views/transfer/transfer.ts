import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
  },
  name: 'transfer',
})
export default class TransferView extends Vue {
  public senderno = '';
  public receiverno = '';
  public amount = '';
  public output = '';

  constructor() {
    super();
  }


    public formSubmit( e: any ) {
        e.preventDefault();
        const currentObj = this;
        this.axios.post('http://localhost:4003/api/transfer', {
            senderno: this.senderno,
            receiverno: this.receiverno,
            amount: this.amount,
        }, axiosConfig)
        .then( ( response ) => {
          window.location.href = '#/dashboard';
          alert('Transfer successfull!');
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


const axiosConfig = {
  headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
};
