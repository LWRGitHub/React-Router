import React, { Component } from 'react';

class Home extends Component {    
  
  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic = this.name.value;
    let path = `teachers/${teacherTopic}/${teacherName}`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="main-content home">
        <h2>Course Directory</h2>
        <p>This fun directory is a project using <em>React Router</em>.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales sapien viverra, rutrum leo quis, varius enim. Mauris hendrerit pulvinar sem, et mollis leo tristique et. Aenean a velit laoreet, commodo sapien et, mattis lorem. Fusce id mi quis felis porttitor convallis vitae bibendum tellus. Maecenas ac lectus eu turpis tincidunt sollicitudin.</p>
        <p>Pellentesque vitae porttitor sem. Aliquam erat sapien, lobortis ut quam eu, pulvinar finibus nisl. Suspendisse potenti. Ut eget iaculis ex, vitae egestas ligula. Sed ultricies nibh non ipsum posuere finibus.</p>
        <hr />
        <h3>Featured Teachers</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name"  ref={ (input) => this.name = input } />
          <input type="text" placeholder="Topic"  ref={ (input) => this.topic = input} />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;