import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  actions: {
    fetchUsers(page = 1, perPage = null,) {
      let getPerPage = null;
      if (perPage) {
        getPerPage = `&per_page=${perPage}`
      }

      return new Promise((resolve, reject) => {
        axios
          .get(`https://reqres.in/api/users?page=${page}${getPerPage}`)
          .then((response) => {
            this.users = response.data;
            resolve();
          })
          .catch((reason) => {
            console.error(reason);
            reject();
          });
      });
    }
  },
  state: () => ({
    users: []
  }),
  getters: {
    getUsers: state => state.users.data,
    getTotalUsers: state => state.users.total,
    getTotalPages: state => state.users['total_pages']
  }
});
