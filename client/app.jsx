class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    $.ajax({
      url: '/api/getData',
      method: 'Get',
      success: (data) => {
        data = JSON.parse(data)
        this.setState({products: data.products})
      }
    })
  }

  render() {
    return (
      <div className='app'>
        <h1>Store</h1>
        <div>
          {this.state.products.map(product => <Product data={product} key={product.name}/>)}
        </div>
      </div>
    ) 
  }
}

window.App = App;

