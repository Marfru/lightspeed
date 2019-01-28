import axios from 'axios';
import { observable, action, computed, runInAction } from 'mobx';

class ProductStore {

    @observable prodlist = [];

    @action async fetchData() {
        try {
            let response = await axios.get('https://next.json-generator.com/api/json/get/4kiDK7gxZ');
            runInAction(() => {
              this.errorMsg = '';
              this.prodlist = response.data.slice();
            })
          } catch(error) {
            console.error(error);
          }
    }

    @computed get itemsLeft() {
        return 200
    }
}

export default new ProductStore()