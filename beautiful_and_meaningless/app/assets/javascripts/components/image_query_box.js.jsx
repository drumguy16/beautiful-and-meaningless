var ImageQueryBox = React.createClass({
  getInitialState: function() {
    return {imageQuery: ''};
  },
  handleImageQueryChange: function(event){
    this.setState({imageQuery: event.target.value });
  },
  handleResponse: function(event){
    {debugger;}
    var photo_id = this.photos.photo[3].id
    var photo_url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key='+key+'&photo_id='+ photo_id +'&format=json&nojsoncallback=?'
    $.ajax({
      type: 'get',
      url: photo_url,
      })
      .then(function(response){
      response.handleResponse
      {debugger;}
      });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var imageQuery = this.state.imageQuery.trim
    if (!imageQuery) {
      return;
    }
    var $imageQuery = this.refs.imageQuery
    var content = $imageQuery.value
    var key = 'placeholder'
    var photos_url = (text) =>{
    text = text.replace(/[ ]+/g, '+')
    return 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&tags='+ text +'&format=json&nojsoncallback=?'
  }

    $.ajax({
      type: 'get',
      url: photos_url(content),

      })
      .then(function(response){
      response.handleResponse
      {debugger;}

      });
    //   this.props.onUpdate();
    //   $tweetContent.value = '';
    // }.bind(this)
    // this.setState({ imageQuery: '' });
  },
  render:function(){
    return (
      <form className="imageSearch" onSubmit={this.handleSubmit}>
        <input
          ref="imageQuery"
          type="text"
          value={this.state.imageQuery}
          onChange={this.handleImageQueryChange}
          placeholder="image category" />
        <input type="submit" method="post" />
      </form>
    );
  }
});

var key = 'placeholder'
var flickr_url = (key) => 'https://api.flickr.com/services/rest/?api_key=${key}'
var photos_url = (text) =>{
    text = text.replace(/[ ]+/g, '+')
    return '${flickr_url(key)}&method=flickr.photos.search&text=${text}&format=json&nojsoncallback=?'
  }
console.log(
  photos_url('eiffel tower')
  )


// ReactDom.render(
//   <CommentBox />,
//     document.getElementById('imageQuery')
//   )
