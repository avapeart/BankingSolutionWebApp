import Vue from 'vue';
import Component from 'vue-class-component';
import Axios from 'axios';
import RegisterView from '../register';


@Component({
  components: {
  },
  name: 'dashboard',
})
export default class DasboardView extends RegisterView  {
  public account: any = {};

  public transactions: any = {};

  private axiosConfig = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  public submitForm( e: any ) {
    e.preventDefault();
    const currentObj = this;
    this.axios.post('http://localhost:4003/api/jointAccount', {
        email: this.email,
        phonenumber: this.phonenumber,
        trn: this.trn,
        username: this.username,
        password: this.password,
    }, this.axiosConfig).then( ( response ) => {
      window.location.href = '#/dashboard';
      alert('Account Updated!');
  })
    // add a redirect to the login page
    .catch( ( error ) => {
        currentObj.output = error;
    });
  }

   public mounted() {
    // TODO: stuff to do when this component loads
    // super.mounted();
    this.getAccount();
    this.getTransactions();
    }

    private getAccount() {
      this.axios.get('http://localhost:4003/api/getAccount', this.axiosConfig).then( ( response ) => {
        this.account = response.data;
      });
    }

  private getTransactions() {
    this.axios.get('http://localhost:4003/api/transactions', this.axiosConfig).then( ( response ) => {
    this.transactions = response.data;
  });
  }}
