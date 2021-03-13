class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + '/posts.json', {
        method: 'post',
        body: JSON.stringify(post),
      }); // /posts.json is Firebase rule to save files in JSON format
      const response = await fetch(request);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}

export const apiService = new ApiService(
  'https://hulchenko-blog-project-js-default-rtdb.firebaseio.com'
);
