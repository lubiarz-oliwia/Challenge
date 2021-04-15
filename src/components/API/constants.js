const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = (successCallback, failCallback) => {
    fetch(`${API_URL}/posts`)
    .then(r => {
      if (r.ok === false) {
        failCallback(true);
      }
      else {
      console.log(r);
      return r.json();
      }
    })
      // .then(r => r.json())
      // .then(r => (r.json()))
      .then(data => {
        const sorted = data.sort((a, b) => {return b.id-a.id});
        return sorted;
      })
      .then(data => {
          successCallback(data);
      })
      .catch(err => {
        console.log(err);
        failCallback(err);
      });
  };

  export const getDetails = (id, successCallback, failCallback) => {
    fetch(`${API_URL}/posts/${id}`)
      .then(r => {
        if (r.ok === false) {
          failCallback(true);
        }
        else {
        console.log(r);
        return r.json();
        }
      })
      // .then(r => r.json())
      // .then(r => (r.json()))
      .then(data => {
        if (data) {
          successCallback(data);
        }
      })
      .catch(err => {
        console.log(err);
        failCallback(err);
      });
  };



