import API from '@/api';

class Main
{
  /**
   * Do api call to create a contact us data
   *
   * @param {object} payload
   *
   * @return {promise}
   */
  static async contactUs(payload) {
    return await API.dispatch(
      'POST',
      'contactUs',
      {
        data: payload
      }
    );
  }
}

export default Main;