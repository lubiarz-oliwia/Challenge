const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = (successCallback) => {
    fetch(`${API_URL}/posts`)
      .then(r => {
        return r.json();
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
      .catch(err => console.log(err));
  };

  export const getDetails = (id, successCallback) => {
    fetch(`${API_URL}/posts/${id}`)
      .then(r => {
        return r.json();
      })
      // .then(r => r.json())
      // .then(r => (r.json()))
      .then(data => {
          successCallback(data);
      })
      .catch(err => console.log(err));
  };



