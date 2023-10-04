import http from '../http';

class Search {
  static async getUser() {
    return await http.get('https://jsonplaceholder.typicode.com/users');
  }
}

export default Search;