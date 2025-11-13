class GenNumber extends React.Component{
    componentDidUpdate(){
        let time, digit;
        digit = this.props.level.main + 2;
        time = 100 * Math.min(digit ,5) + 400 * Math.max(digit - 5, 0);

        let number = document.getElementById('number');
        setTimeout(function(){
            number.innerHTML = number.innerHTML.replace(/\w/
               gi, '&#183;');
        },time);
    }
}