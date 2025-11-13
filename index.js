class GenNumber extends React.Component {
    componentDidUpdate() {
        let time, digit;
        digit = this.props.level.main + 2;
        time = 100 * Math.min(digit, 5) + 400 * Math.max(digit - 5, 0);

        let number = document.getElementById('number');
        setTimeout(function () {
            number.innerHTML = number.innerHTML.replace(/\w/gi,
                '&#183;');
        }, time);
    }

    componentDidMount() {
        let number = document.getElementById('number');
        setTimeout(function () {
            number.innerHTML = number.innerHTML.replace(/\w|\W/gi,
                '&#183;');
        }, 1200);
    }

    render() {
        return (
            React.createElement("div", { className: "number-box" },
                React.createElement("div", { className: "info-box" },
                    React.createElement("p", { className: "level" }, "Level: " + this.props.level.main,
                        " - ", this.props.level.sub),
                    React.createElement("p", { className: "mistakes" }, "Wrong: ", this.props.wrong,
                        "/3")),
                React.createElement("p", { className: "divider" }, "##############################"),
                React.createElement("p", { className: "number", id: "number" }, this.props.wrong <
                    3 ? atob(this.props.question) : '????'),
                React.createElement("p", { className: "divider" },
                    "##############################")));
    }
}


class InputNumber extends React.Component {
    constructor() {
        super();

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleUserInput(e) {
        e.preventDefault();

        let userNumber = btoa(this.setNumber.value);
        this.userNumber.value = "";
        this.props.compareUserInput(userNumber);
    }
    handleReset() {
        this.props.onReset();
    }
    render() {
        let layout;
        if (this.props.wrong < 3) {
            layout = React.createElement("div", { className: "input-box" },
                React.createElement("form", { onSubmit: this.handleUserInput }, "Number is",
                    React.createElement("input", {
                        pattern: "[0-9]+",
                        type: "text",
                        ref: ref => this.userNumber = ref,
                        required: true,
                        autoFocus: true
                    }),
                    React.createElement("br", null),
                    React.createElement("br", null)),
                React.createElement("button", {
                    onClick:
                        this.handleReset
                }, "Restart"))
        }
        else {
            layout = React.createElement("div", { className: "notif-box" },
                React.className("div", { className: "notif" }, "Better luck nex time"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("button", {
                    onClick:
                        this.handleReset
                }, "Restart"));
        }
        return layout;
    }
}