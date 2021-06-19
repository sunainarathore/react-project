import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: "",
      bottomText: "",
      selectedImage: "",
      allImages: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // get images
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const { memes } = data.data;
        this.setState({
          allImages: memes,
        });
      });
    this.handleChange = this.handleChange.bind(this);
    this.handleGetRandomImage = this.handleGetRandomImage.bind(this);
  }

  // get user text
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  // get random image
  handleGetRandomImage(e) {
    e.preventDefault();
    const { allImages } = this.state;
    const randomNumber = Math.floor(Math.random() * allImages.length);
    this.setState({
      selectedImage: allImages[randomNumber].url,
    });
  }

  render() {
    const { topText, bottomText, selectedImage } = this.state;
    return (
      <div className="meme-container">
        <form onSubmit={this.handleGetRandomImage} className="meme-form">
          <input
            type="text"
            name="topText"
            onChange={this.handleChange}
            value={topText}
          />
          <input
            type="text"
            name="bottomText"
            onChange={this.handleChange}
            value={bottomText}
          />
          <button>Generate</button>
        </form>
        <div className="meme-display">
          <img
            className={selectedImage ? "meme-image" : "none"}
            src={selectedImage}
            alt=""
          />
          <h2 className="meme-text top">{topText}</h2>
          <h2 className="meme-text bottom">{bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
