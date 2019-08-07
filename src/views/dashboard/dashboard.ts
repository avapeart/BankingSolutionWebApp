import Vue from 'vue';
import Component from 'vue-class-component';
import Axios from 'axios';


@Component({
  components: {
  },
  name: 'dashboard',
})
export default class DasboardView extends Vue {
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

  private mounted() {
    // TODO: stuff to do when this component loads
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
