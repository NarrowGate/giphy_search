
    new Vue({
        el: '#giphyApp',
        data: {
          giphyQuery:'',
          giffs:[],
          apiUrl: 'https:api.giphy.com/v1/gifs/search?',
          apiKey: 'dc6zaTOxFJmzC',
          serverError: false
        },
        watch: {
          giphyQuery : function(newval) {
            if(newval.length === 0) {
              this.serverError = false;
            }
          }
        },
        computed: {
          isQueryExist: function() {
            return this.giphyQuery.length ? true : false;
          }
        },
        methods: {
          searchGiphyHandler: function () {
            let url = `${this.apiUrl}&q=${this.giphyQuery}&api_key=${this.apiKey}`;
  
            fetch(url)
            .then(response => {response.json()})
            .then(json => {console.log(json); this.giffs = json.data;})
            .catch(error => {
                this.serverError = true;
            })
          }
        }
      })