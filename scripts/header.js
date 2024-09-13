/**
 * Custom class for a header
 */
class CustomHeader extends HTMLElement {

    //Media query for the window size of the device
    query = window.matchMedia('(min-width: 601px)');

    constructor(){
        super();

        this.style.backgroundColor = 'rgb(14, 153, 212)';
        this.style.display = 'flex';
        this.style.height = '80px'
        this.style.padding = '10px';

        //Custom styles for different screen sizes
        if(this.query.matches){
            this.style.flexDirection = 'row';
            this.style.justifyContent = 'space-between';
        }else{
            this.style.flexDirection = 'column';
            this.style.alignItems = 'center';
        }
    }

    addLogo(){
        const logo = document.createElement('img');
        logo.src = '../media/logo-white.png';

        //Custom styles for different screen sizes
        if(this.query.matches){
            //fill out later
  
        }else{
            logo.style.width = '5em';
        }

        this.appendChild(logo);
}

    addPhone(){
        const phoneNumber = document.createElement('p');
        phoneNumber.innerHTML = '+56 9 8733 1524';
        phoneNumber.style.fontFamily = 'Arial Black';
        phoneNumber.style.color = 'white';

        //Custom styles for different screen sizes
        if(this.query.matches){
            phoneNumber.style.fontSize = '25px'
        }

        this.appendChild(phoneNumber);
    }

    connectedCallback(){
        this.addLogo();
        this.addPhone();
    }
}

export {CustomHeader}