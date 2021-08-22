import React, { Component } from 'react';
class Profile  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Fullname: 'Charfa Hazem',
                bio: 'Hazemcharfa/07',
                imgSrc: "/hazem.jpg" ,
                Profession: 'Etudiant',
         }
    }
    render() { 
        return ( 
            <div>
            <h2>{this.state.Fullname}</h2>
            <h3>{this.state.bio}</h3>
            <img src= {this.state.imgSrc} width="15%" alt="2002" />  
            <h3>{this.state.Profession}</h3>

            </div>
              );
    }
}
 
export default Profile;