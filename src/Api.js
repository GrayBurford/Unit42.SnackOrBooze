import axios from "axios";

const BASE_API_URL = "http://localhost:5000";


// json-server gives you CRUD endpoints on snacks and drinks
// Here is a single action to get all drinks
// Will need to add this class as you build features for the app
class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks () {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

}

export { BASE_API_URL, SnackOrBoozeApi };
